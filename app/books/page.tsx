import React from 'react'
import BooksSection from '../components/BooksSection/BooksSection'

export const metadata = {
  title: 'Livros | Olimpio Pereira',
  description: 'Conheça os livros publicados por Olimpio Pereira ao longo de sua carreira literária.',
}

export default function Books() {
  return (
    <main className="min-h-screen">
      <BooksSection />
    </main>
  )
}
