import React from 'react'
import AboutPicture from './AboutPicture'
import AboutDescriptions from './AboutDescriptions'

const AboutSection = () => {
  return (
    <div className='container mx-auto grid md:grid-cols-12 py-20 max-md:px-6'>
      <AboutPicture />
      <div className='col-span-1' />
      <AboutDescriptions />
    </div>
  )
}

export default AboutSection