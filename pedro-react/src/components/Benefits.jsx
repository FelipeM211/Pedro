import { motion } from 'framer-motion'
import { BarChart3, Briefcase, Send } from 'lucide-react'

export default function Benefits() {
    const benefits = [
        {
            title: "Saúde Financeira Completa",
            desc: "Planejamento e estrutura para PJ e pessoa física do médico, garantindo longevidade patrimonial.",
            icon: <BarChart3 className="w-8 h-8" />,
        },
        {
            title: "Gestão e Eficiência",
            desc: "Organize processos e equipe para escalar sua clínica com menos estresse operacional.",
            icon: <Briefcase className="w-8 h-8" />,
        },
        {
            title: "Marketing Estratégico",
            desc: "Posicione sua marca e atraia pacientes particulares alinhados com seu propósito.",
            icon: <Send className="w-8 h-8" />,
        },
    ]

    return (
        <section className="py-24 bg-white dark:bg-primary relative">
            <div className="container-page">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold font-heading text-slate-900 dark:text-white mb-4">
                        Benefícios da Consultoria
                    </h2>
                    <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
                        Uma abordagem 360º para transformar sua carreira médica em um negócio sólido e rentável.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {benefits.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2 }}
                            className="group p-8 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-100 dark:border-slate-700 hover:border-secondary/50 transition-all duration-300"
                        >
                            <div className="mb-6 text-secondary">
                                {item.icon}
                            </div>

                            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">
                                {item.title}
                            </h3>

                            <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                                {item.desc}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
