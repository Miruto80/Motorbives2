import React, { useMemo } from 'react'
import ContactSection from '../components/Contact'
import Slider from '../components/Slider'
import About from '../components/About.jsx'
import cars from '../assets/data/cars.js'

export default function Home() {
  const latestCars = useMemo(() => {
    if (!Array.isArray(cars)) return [];
    return cars.slice(-8).reverse();
  }, []);

  return (
    <div>
      <About />
      <Slider cars={latestCars} title="Latest vehicles" />

      <ContactSection />
    </div>
  )
}
