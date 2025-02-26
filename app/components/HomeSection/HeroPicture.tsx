import Image from 'next/image'
import React from 'react'

const HeroPicture = () => {
  return (
    <div className='col-span-6  '>
      <div className='overflow-hidden'>
      <Image src={'/olimpo.jpg'} width={700} height={700} alt='Olimpo Pereira Neto' className='hover:scale-110 transition-all duration-[5000ms] ease-in-out select-none' />
      </div>
      <p className='text-start max-md:text-sm'>Olimpio Pereira</p>
    </div>
  )
}

export default HeroPicture