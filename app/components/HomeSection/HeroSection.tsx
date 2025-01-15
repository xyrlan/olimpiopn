import React from 'react'
import FirstHeroSection from './FirstHeroSection'
import SecondHeroSection from './SecondHeroSection'

const HeroSection = () => {
  return (
    <div className='px-6'>
      <FirstHeroSection />
      <SecondHeroSection />
    </div>
  )
}

export default HeroSection