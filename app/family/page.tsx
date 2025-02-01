import React from 'react'
import FamilyTreeSection from '../components/FamilyTreeSection/FamilyTreeSection'

export const metadata = {
  title: 'Árvore Genealógica | Olimpio Pereira',
  description: 'Conheça a ancestralidade e árvore genealógica da família de Olimpio Pereira.',
}

export default function Family() {
  return (
    <main className="min-h-screen">
      <FamilyTreeSection />
    </main>
  )
}
