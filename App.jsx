import { useState } from 'react'
import { services } from './data/site.js'
import Header from './components/Header.jsx'
import Hero from './components/Hero.jsx'
import Rates from './components/Rates.jsx'
import Steps from './components/Steps.jsx'
import About from './components/About.jsx'
import Faq from './components/Faq.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'

export default function App() {
  const [serviceId, setServiceId] = useState(services[0].id)

  // Used by the "Book" buttons in the rate card: pick the job type, then
  // bring the job card into view.
  function chooseService(id) {
    setServiceId(id)
    document.getElementById('book')?.scrollIntoView({ block: 'start' })
  }

  return (
    <>
      <Header />
      <main>
        <Hero serviceId={serviceId} onServiceChange={setServiceId} />
        <Rates onChoose={chooseService} />
        <Steps />
        <About />
        <Faq />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
