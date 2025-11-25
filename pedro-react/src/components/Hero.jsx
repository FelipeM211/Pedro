import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

export default function Hero() {
    const contactLink = "https://api.whatsapp.com/send/?phone=5511996536110&text=Ol%C3%A1+Pedro%2C%0A%0AEstou+interessado%28a%29+na+consultoria+estrat%C3%A9gica+m%C3%A9dica.%0A%0ANome+completo%3A%0AEspecialidade+m%C3%A9dica%3A%0APrincipal+objetivo+profissional%3A%0A%0AAgrade%C3%A7o+o+retorno%21&type=phone_number&app_absent=0"

    return (
        <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-50 to-slate-100 dark:from-primary-dark dark:to-primary pt-20">
            {/* Background Elements */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute -top-[20%] -right-[10%] w-[50%] h-[50%] rounded-full bg-secondary/10 blur-3xl animate-pulse" />
                <div className="absolute top-[40%] -left-[10%] w-[40%] h-[40%] rounded-full bg-blue-500/10 blur-3xl" />
            </div>

            <div className="container-page relative z-10 text-center px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <span className="inline-block py-1 px-3 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-xs font-bold tracking-wider uppercase mb-6 border border-blue-200 dark:border-blue-800">
                        Consultoria Estratégica
                    </span>

                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold font-heading text-slate-900 dark:text-white mb-6 leading-tight">
                        Transforme Desafios em <br className="hidden md:block" />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-secondary dark:from-blue-400 dark:to-secondary">
                            Crescimento Sustentável
                        </span>
                    </h1>

                    <p className="text-lg md:text-xl text-slate-600 dark:text-slate-300 max-w-2xl mx-auto mb-10 leading-relaxed">
                        Orientação especializada para médicos e clínicas que buscam ir além da medicina, integrando gestão, finanças e marketing para alcançar novos patamares.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <a
                            href={contactLink}
                            target="_blank"
                            rel="noreferrer"
                            className="group relative inline-flex items-center justify-center px-8 py-4 text-base font-bold text-white transition-all duration-200 bg-blue-600 font-heading rounded-full hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-600 shadow-lg shadow-blue-600/30 hover:shadow-blue-600/50 hover:-translate-y-1"
                        >
                            Agendar Consultoria
                            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </a>

                        <a
                            href="#sobre"
                            className="inline-flex items-center justify-center px-8 py-4 text-base font-bold text-slate-700 dark:text-slate-200 transition-all duration-200 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-full hover:bg-slate-50 dark:hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-slate-200"
                        >
                            Saiba Mais
                        </a>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}
