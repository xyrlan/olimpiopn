import React from 'react'
import HeroDescriptions from './HeroDescriptions'
import HeroPicture from './HeroPicture'

const HeroSection = () => {
  return (
    <div className='grid md:grid-cols-12 '>
      <HeroPicture />
      <div className='col-span-1' />
      <HeroDescriptions />
    </div>
  )
}

export default HeroSection