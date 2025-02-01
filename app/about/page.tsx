import React from 'react'
import AboutHeroSection from '../components/AboutPageSection/AboutHeroSection'
import CareerSection from '../components/AboutPageSection/CareerSection'
import EcologySection from '../components/AboutPageSection/EcologySection'
import EducationSection from '../components/AboutPageSection/EducationSection'


export const metadata = {
  title: 'Sobre Olimpio | Olimpio Pereira',
  description: 'Conheça a história e trajetória de vida de Olimpio Pereira.',
}

export default function About() {
  return (
    <main className="min-h-screen">
      <AboutHeroSection />
      <EducationSection />
      <CareerSection />
      <EcologySection />
    </main>
  )
}
