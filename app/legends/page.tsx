import React from 'react'
import LegendsSection from '../components/LegendsSection/LegendsSection'

export const metadata = {
  title: 'Lendas | Olimpio Pereira',
  description: 'Conheça as lendas escritas por Olimpio Pereira durante sua residência em Brasília.',
}

export default function Legends() {
  return (
    <main className="min-h-screen">
      <LegendsSection />
    </main>
  )
}
