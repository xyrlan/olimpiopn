import React from 'react'
import BookCard from './BookCard'

const books = [
  {
    id: 1,
    title: 'Um Lugar no mapa',
    type: 'ensaio',
    year: 1971,
  },
  {
    id: 2,
    title: 'A Terceira pessoa Depois de ninguém',
    type: 'romance',
    year: 1972,
  },
  {
    id: 3,
    title: 'O Sapeca - Contos e causos',
    type: 'contos',
    year: 1978,
  },
  {
    id: 4,
    title: 'Natalice',
    type: 'romance',
    year: 1979,
  },
  {
    id: 5,
    title: 'Brasiliano - Crônicas e Contos',
    type: 'contos e crônicas',
    year: 1988,
  },
  {
    id: 6,
    title: 'Orizona: Cidade e Campo',
    type: 'crônicas',
    year: 1991,
  },
  {
    id: 7,
    title: 'Verdes Campinas',
    type: 'romance histórico',
    year: 1991,
  },
  {
    id: 8,
    title: 'Nomes das Nossas Terras',
    type: 'ensaio',
    year: 1996,
  },
  {
    id: 9,
    title: 'Orizona Campo e Cidade',
    type: 'crônicas',
    year: 2008,
  },
  {
    id: 10,
    title: 'Histórias Inocentes - Fábulas e Contos',
    type: 'fábulas e contos',
    year: 2013,
  },
]

const BooksList = () => {
  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8 mt-8'>
      {books.map((book) => (
        <BookCard
          key={book.id}
          title={book.title}
          type={book.type}
          year={book.year}
        />
      ))}
    </div>
  )
}

export default BooksList
