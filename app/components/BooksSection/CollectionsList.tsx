import React from 'react'
import BookCard from './BookCard'

const collections = [
  {
    id: 1,
    title: 'Orizona: Prosa e Verso',
    type: 'coletânea',
    year: 2002,
  },
  {
    id: 2,
    title: 'Orizona em Prosa e Verso',
    type: 'coletânea',
    year: 2002,
  },
  {
    id: 3,
    title: 'A Tocaia',
    type: 'coletânea',
    year: 2002,
  },
]

const CollectionsList = () => {
  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8 mt-8'>
      {collections.map((collection) => (
        <BookCard
          key={collection.id}
          title={collection.title}
          type={collection.type}
          year={collection.year}
        />
      ))}
    </div>
  )
}

export default CollectionsList
