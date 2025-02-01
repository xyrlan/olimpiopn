import React from 'react'

import H1 from '../H1'
import BooksList from './BooksList'
import CollectionsList from './CollectionsList'

const BooksSection = () => {
  return (
    <div className='container mx-auto py-20 pb-32 max-md:px-6'>
      <div className='space-y-2'>
        <H1>Livros Publicados</H1>
        <p className='text-gray-600'>Explore a bibliografia completa de Olimpio Pereira</p>
      </div>
      <BooksList />
      <div className='mt-24 space-y-2'>
        <H1>Coletâneas</H1>
        <CollectionsList />
      </div>
    </div>
  )
}

export default BooksSection
