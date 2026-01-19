import React, { useMemo } from 'react'
import ContactSection from '../components/Contact'
import Slider from '../components/Slider'
import cars from '../assets/data/cars.js'

export default function Home() {
  const latestCars = useMemo(() => {
    if (!Array.isArray(cars)) return [];
    return cars.slice(-8).reverse();
  }, []);

  return (
    <div>
      <section className="hero position-relative">
        <div className="hero-overlay position-absolute top-0 start-0 w-100 h-100"></div>
      </section>

      <Slider cars={latestCars} title="Latest vehicles" />

      <ContactSection />
    </div>
  )
}
