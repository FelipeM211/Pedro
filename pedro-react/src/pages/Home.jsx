import { Helmet } from 'react-helmet-async'
import { motion } from 'framer-motion'
import { BarChart3, Briefcase, Send } from "lucide-react";

export default function Home() {
  return (
    <div>
      <Helmet>
        <title>Consultoria para Médicos</title>
        <meta name="description" content="Consultoria Estratégica para Médicos que Querem Ir Além." />
      </Helmet>

      <section className="bg-gradient-to-br from-blue-700 to-blue-900 text-white text-center py-24 rounded-xl">
        <div className="container-page">
          <h1 className="text-3xl sm:text-4xl font-bold mb-4">Consultoria Estratégica para Médicos que Querem Ir Além</h1>
          <p className="opacity-90 max-w-3xl mx-auto">
            Orientação estratégica para transformar desafios da medicina em crescimento sustentável e novas oportunidades.
          </p>
        </div>
      </section>

      <section className="py-16 text-center">
        <div className="container-page">
          <h2 className="text-2xl font-bold mb-4">Sobre a Consultoria</h2>
          <p className="max-w-3xl mx-auto">
          Pedro Del Sante já conduziu mais de 160 consultorias, atendendo famílias e profissionais em sua maioria da área da saúde com cases de sucesso que unem estratégia financeira e posicionamento de mercado.
Com uma visão completa, que integra finanças, gestão e marketing, ajuda médicos e clínicas a crescerem de forma estruturada e sustentável.
          </p>
          <p className="max-w-3xl mx-auto">
          Venha fazer parte dessa trajetória de resultados.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container-page grid md:grid-cols-2 gap-10 items-center">
          <motion.img
            src={'/pedro.png'}
            alt="Pedro Del Sante"
            className="w-full rounded-lg shadow"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          />
          <div>
            <h2 className="uppercase tracking-widest text-slate-500 text-sm">IDEALIZADOR DA MENTORIA</h2>
            <h3 className="text-3xl font-bold text-blue-800 dark:text-blue-300 mb-4">Pedro Del Sante</h3>
            <div className="bg-blue-50 dark:bg-slate-800 p-6 rounded-lg">
              <h4 className="text-blue-700 dark:text-blue-300 font-semibold mb-2">Qualificações Técnicas:</h4>
              <ul className="list-disc pl-6 space-y-1">
                <li>Formado em Administração pela Pontifícia Universidade Católica de São Paulo (PUC-SP).</li>
                <li>Pós-graduado em Gestão de Clínicas e Serviços de Saúde pelo Hospital Israelita Albert Einstein.</li>
                <li>Certificado no mercado financeiro pelas certificações Anbima CPA-20 e outros programas de capacitação em investimentos.</li>
                <li>Especialização em marketing estratégico e posicionamento digital para clínicas e profissionais da saúde.</li>
                <li>Conhecimento prático em gestão de tráfego pago, análise de performance e estratégias de captação de pacientes.</li>
                <li>Vivência em recrutamento e estruturação de equipes de alta performance na área médica.</li>
                <li>Experiência comprovada com mais de 160 projetos e consultorias realizadas junto a médicos e clínicas em todo o país.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
   

<section className="py-16 bg-slate-50 dark:bg-slate-800 rounded-xl">
  <div className="container-page text-center">
    <h2 className="text-2xl font-bold mb-8">Benefícios da Consultoria</h2>
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              title: "Saúde Financeira Completa",
              desc: "Planejamento e estrutura para PJ e pessoa física do médico.",
              icon: (
                <BarChart3 className="w-10 h-10 text-blue-600 dark:text-blue-300 mx-auto mb-4" />
              ),
            },
            {
              title: "Gestão e Eficiência",
              desc: "Organize processos e equipe para escalar sua clínica.",
              icon: (
                <Briefcase className="w-10 h-10 text-blue-600 dark:text-blue-300 mx-auto mb-4" />
              ),
            },
            {
              title: "Marketing Estratégico",
              desc: "Posicione sua marca e atraia pacientes com propósito.",
              icon: (
                <Send className="w-10 h-10 text-blue-600 dark:text-blue-300 mx-auto mb-4" />
              ),
            },
          ].map((b) => (
            <motion.div
              key={b.title}
              className="p-6 rounded-lg bg-white dark:bg-slate-900 shadow border border-slate-200 dark:border-slate-800"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              {b.icon}
              <h3 className="text-xl font-semibold text-blue-800 dark:text-blue-300 mb-2">
                {b.title}
              </h3>
              <p className="text-slate-600 dark:text-slate-300">{b.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  



      <section className="py-16 text-center">
        <div className="container-page">
          <h2 className="text-2xl font-bold mb-2">Pronto para Transformar Sua Carreira Médica?</h2>
          <p className="mb-6">Entre em contato agora e agende uma consultoria estratégica personalizada.</p>
          <a
            className="inline-block rounded-full bg-white text-blue-800 font-semibold px-6 py-3 shadow hover:-translate-y-0.5 transition"
            target="_blank"
            rel="noreferrer"
            href="https://api.whatsapp.com/send/?phone=5511996536110&text=Ol%C3%A1+Pedro%2C%0A%0AEstou+interessado%28a%29+na+consultoria+estrat%C3%A9gica+m%C3%A9dica.%0A%0ANome+completo%3A%0AEspecialidade+m%C3%A9dica%3A%0APrincipal+objetivo+profissional%3A%0A%0AAgrade%C3%A7o+o+retorno%21&type=phone_number&app_absent=0"
          >
            Agendar Consultoria
          </a>
        </div>
      </section>
    </div>
  )
}


