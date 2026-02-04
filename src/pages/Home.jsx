import React, { useMemo } from 'react'
import ContactSection from '../components/Contact'
import Slider from '../components/Slider'
import About from '../components/About.jsx'
import cars from '../assets/data/cars.js'
import Hero from '../components/Hero.jsx'
import SEO from '../components/SEO.jsx';
import Clients from '../components/Clients.jsx'
import RevealUp from '../components/Animations/RevealUp.jsx'


export default function Home() {
  const latestCars = useMemo(() => {
    if (!Array.isArray(cars)) return [];
    return cars.slice(-8).reverse();
  }, []);

  return (
    <div>
      <SEO 
        title="Home" 
        description="Welcome to Motorvibes, your trusted car dealer in the USA. Explore our latest new and used cars, financing options, and expert services." 
        url="https://www.motorvibesllc.com/" 
        image="/img/logo.webp" 
      />
      <Hero />

      <RevealUp>
      <Slider cars={latestCars} title="Latest vehicles" />
      </RevealUp>

      <RevealUp>
      <About />
      </RevealUp>


      <RevealUp>
      <Clients />
      </RevealUp>
      
      <RevealUp>
      <ContactSection />
      </RevealUp>
    </div>
  )
}
