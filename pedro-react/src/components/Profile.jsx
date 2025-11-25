import { motion } from 'framer-motion'
import { CheckCircle2, Award } from 'lucide-react'

export default function Profile() {
    const qualifications = [
        "Formado em Administração pela Pontifícia Universidade Católica de São Paulo (PUC-SP).",
        "Pós-graduado em Gestão de Clínicas e Serviços de Saúde pelo Hospital Israelita Albert Einstein.",
        "Certificado no mercado financeiro pelas certificações Anbima CPA-20 e outros programas de capacitação em investimentos.",
        "Especialização em marketing estratégico e posicionamento digital para clínicas e profissionais da saúde.",
        "Conhecimento prático em gestão de tráfego pago, análise de performance e estratégias de captação de pacientes.",
        "Vivência em recrutamento e estruturação de equipes de alta performance na área médica.",
        "Experiência comprovada com mais de 160 projetos e consultorias realizadas junto a médicos e clínicas em todo o país."
    ]

    return (
        <section className="py-24 bg-slate-50 dark:bg-slate-900/50 relative overflow-hidden">
            <div className="container-page">
                <div className="grid md:grid-cols-2 gap-16 items-center">
                    {/* Image Column */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="relative order-2 md:order-1 flex justify-center"
                    >
                        {/* Background Blob */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-to-tr from-blue-600/20 to-secondary/20 rounded-full blur-3xl" />

                        {/* Image Container */}
                        <div className="relative z-10 w-full max-w-md">
                            {/* Gradient removed as requested */}
                            <img
                                src="/pedro.png"
                                alt="Pedro Del Sante"
                                className="w-full h-auto drop-shadow-2xl mask-image-b"
                            />

                            {/* Floating Badge */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.5 }}
                                className="absolute -bottom-6 -right-6 bg-white dark:bg-slate-800 p-4 rounded-2xl shadow-xl border border-slate-100 dark:border-slate-700 max-w-[200px] hidden sm:block"
                            >
                                <div className="flex items-center gap-3 mb-2">
                                    <div className="p-2 bg-blue-100 dark:bg-blue-900/50 rounded-lg text-blue-600 dark:text-blue-400">
                                        <Award size={24} />
                                    </div>
                                    <span className="font-bold text-2xl text-slate-900 dark:text-white">160+</span>
                                </div>
                                <p className="text-sm text-slate-600 dark:text-slate-400 font-medium">
                                    Projetos realizados em todo o Brasil
                                </p>
                            </motion.div>
                        </div>
                    </motion.div>

                    {/* Content Column */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="order-1 md:order-2"
                    >
                        <span className="inline-block text-secondary font-bold tracking-widest text-sm uppercase mb-3">
                            Idealizador da Mentoria
                        </span>
                        <h2 className="text-4xl font-bold font-heading text-slate-900 dark:text-white mb-8">
                            Pedro Del Sante
                        </h2>

                        <div>
                            <h3 className="text-xl font-bold text-primary dark:text-white mb-6 flex items-center gap-2">
                                Qualificações Técnicas:
                            </h3>

                            <ul className="space-y-3">
                                {qualifications.map((item, index) => (
                                    <motion.li
                                        key={index}
                                        initial={{ opacity: 0, x: 20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: index * 0.1 }}
                                        className="flex items-start gap-3"
                                    >
                                        <span className="w-1.5 h-1.5 rounded-full bg-secondary mt-2 shrink-0" />
                                        <span className="text-slate-600 dark:text-slate-300 text-base leading-relaxed">
                                            {item}
                                        </span>
                                    </motion.li>
                                ))}
                            </ul>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}
