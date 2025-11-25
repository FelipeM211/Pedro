import { motion } from 'framer-motion'
import { Quote } from 'lucide-react'

export default function About() {
    return (
        <section id="sobre" className="py-24 bg-white dark:bg-primary relative overflow-hidden">
            <div className="container-page relative z-10">
                <div className="max-w-4xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-3xl md:text-4xl font-bold font-heading text-slate-900 dark:text-white mb-6">
                            Sobre a Consultoria
                        </h2>
                        <div className="h-1 w-20 bg-secondary mx-auto rounded-full" />
                    </motion.div>

                    <div className="grid md:grid-cols-[1fr_auto] gap-8 items-start">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="space-y-6 text-lg text-slate-600 dark:text-slate-300 leading-relaxed"
                        >
                            <p>
                                <strong className="text-slate-900 dark:text-white font-semibold">Pedro Del Sante</strong> já conduziu mais de <span className="text-secondary font-bold">160 consultorias</span>, atendendo famílias e profissionais em sua maioria da área da saúde com cases de sucesso que unem estratégia financeira e posicionamento de mercado.
                            </p>
                            <p>
                                Com uma visão completa, que integra <span className="text-slate-900 dark:text-white font-medium">finanças, gestão e marketing</span>, ajuda médicos e clínicas a crescerem de forma estruturada e sustentável.
                            </p>
                            <p className="text-xl font-heading font-medium text-slate-900 dark:text-white pt-4">
                                Venha fazer parte dessa trajetória de resultados.
                            </p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.4 }}
                            className="hidden md:flex justify-center"
                        >
                            <Quote size={64} className="text-slate-100 dark:text-slate-800" />
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    )
}
