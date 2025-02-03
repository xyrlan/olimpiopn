import Image from 'next/image'
import React from 'react'

const AboutPicture = () => {
  return (
    <div className='col-span-6  '>
          <div className='overflow-hidden '>
          <Image src={'/olimpiogusta.jpg'} width={700} height={600} alt='Olimpo Pereira Neto e Gustavo Dourado' className='hover:scale-110 transition-all duration-[5000ms] ease-in-out select-none' />
          </div>
          <p className='text-start max-md:text-sm'>Olimpio Pereira e Gustavo Dourado</p>
        </div>
  )
}

export default AboutPicture