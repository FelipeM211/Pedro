import { Helmet } from 'react-helmet-async'
import Hero from '../components/Hero'
import About from '../components/About'
import Profile from '../components/Profile'
import Benefits from '../components/Benefits'
import CTA from '../components/CTA'

export default function Home() {
  return (
    <>
      <Helmet>
        <title>Consultoria para Médicos | Pedro Del Sante</title>
        <meta name="description" content="Consultoria Estratégica para Médicos que Querem Ir Além. Transforme sua carreira com gestão, finanças e marketing." />
      </Helmet>

      <Hero />
      <About />
      <Profile />
      <Benefits />
      <CTA />
    </>
  )
}


