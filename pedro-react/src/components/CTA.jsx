import { motion } from 'framer-motion'
import { ArrowRight, MessageCircle } from 'lucide-react'

export default function CTA() {
    const contactLink = "https://api.whatsapp.com/send/?phone=5511996536110&text=Ol%C3%A1+Pedro%2C%0A%0AEstou+interessado%28a%29+na+consultoria+estrat%C3%A9gica+m%C3%A9dica.%0A%0ANome+completo%3A%0AEspecialidade+m%C3%A9dica%3A%0APrincipal+objetivo+profissional%3A%0A%0AAgrade%C3%A7o+o+retorno%21&type=phone_number&app_absent=0"

    return (
        <section className="py-24 relative overflow-hidden">
            <div className="absolute inset-0 bg-primary dark:bg-slate-900">
                <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100 contrast-150 mix-blend-overlay"></div>
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-primary via-primary to-slate-900 opacity-90"></div>
                <div className="absolute -top-[50%] -right-[20%] w-[80%] h-[80%] rounded-full bg-secondary/20 blur-3xl animate-pulse" />
            </div>

            <div className="container-page relative z-10 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="text-3xl md:text-5xl font-bold font-heading text-white mb-6 leading-tight">
                        Pronto para Transformar Sua <br />
                        <span className="text-secondary">Carreira Médica?</span>
                    </h2>

                    <p className="text-slate-300 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
                        Não espere mais para alcançar o reconhecimento e a liberdade financeira que você merece. Agende agora sua consultoria estratégica.
                    </p>

                    <a
                        href={contactLink}
                        target="_blank"
                        rel="noreferrer"
                        className="group inline-flex items-center justify-center px-8 py-4 text-base font-bold text-primary bg-white rounded-full hover:bg-slate-100 transition-all duration-200 shadow-xl hover:shadow-2xl hover:-translate-y-1"
                    >
                        <MessageCircle className="w-5 h-5 mr-2 text-secondary" />
                        Agendar Consultoria
                        <ArrowRight className="ml-2 w-5 h-5 text-primary group-hover:translate-x-1 transition-transform" />
                    </a>
                </motion.div>
            </div>
        </section>
    )
}
