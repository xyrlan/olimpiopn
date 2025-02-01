import React from 'react'

import H1 from '../H1'
import AncestrySection from './AncestrySection'
import TreeSection from './TreeSection'

const FamilyTreeSection = () => {
  return (
    <div className='container mx-auto py-20 pb-32 max-md:px-6'>
      <div className='space-y-2 mb-16'>
        <H1>Ancestralidade</H1>
        <p className='text-gray-600'>Conheça as origens e história da família de Olimpio Pereira</p>
      </div>
      <AncestrySection />
      <div className='mt-24 space-y-2'>
        <H1>Árvore Genealógica</H1>
        <p className='text-gray-600'>Explore a árvore genealógica completa da família</p>
      </div>
      <TreeSection />
    </div>
  )
}

export default FamilyTreeSection
