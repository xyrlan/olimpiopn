import React from 'react'
import HeroPicture from './HeroPicture'
import HeroDescriptions from './HeroDescriptions'

const FirstHeroSection = () => {
  return (
    <div className='container mx-auto grid md:grid-cols-12'>
      <HeroPicture />
      <div className='col-span-1' />
      <HeroDescriptions />
    </div>
  )
}

export default FirstHeroSection