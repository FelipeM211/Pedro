import { Helmet } from 'react-helmet-async'
import { motion } from 'framer-motion'

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
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in dui mauris. Vivamus hendrerit arcu sed erat molestie vehicula. Sed auctor neque eu tellus rhoncus ut eleifend nibh porttitor.
          </p>
          <p className="max-w-3xl mx-auto">
            Ut in nulla enim. Phasellus molestie magna non est bibendum non venenatis nisl tempor. Suspendisse dictum feugiat nisl ut dapibus.
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
                <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
                <li>Nullam in dui mauris. Vivamus hendrerit arcu sed erat.</li>
                <li>Sed auctor neque eu tellus rhoncus ut eleifend nibh.</li>
                <li>Phasellus molestie magna non est bibendum non venenatis.</li>
                <li>Suspendisse dictum feugiat nisl ut dapibus.</li>
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
                title: 'Estratégia Personalizada',
                desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in dui mauris.',
              },
              {
                title: 'Crescimento Sustentável',
                desc: 'Vivamus hendrerit arcu sed erat molestie vehicula. Sed auctor neque eu tellus.',
              },
              {
                title: 'Oportunidades Exclusivas',
                desc: 'Phasellus molestie magna non est bibendum non venenatis nisl tempor.',
              },
            ].map((b) => (
              <motion.div key={b.title} className="p-6 rounded-lg bg-white dark:bg-slate-900 shadow border border-slate-200 dark:border-slate-800" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                <h3 className="text-xl font-semibold text-blue-800 dark:text-blue-300 mb-2">{b.title}</h3>
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


