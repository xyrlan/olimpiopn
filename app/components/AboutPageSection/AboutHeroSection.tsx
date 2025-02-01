import React from 'react'
import Image from 'next/image'
import H1 from '../H1'

const AboutHeroSection = () => {
  return (
    <div className='container mx-auto py-20 max-md:px-6'>
      <div className='grid md:grid-cols-12 gap-8 items-center'>
        <div className='md:col-span-5'>
          <div className='relative aspect-square rounded-lg overflow-hidden shadow-lg'>
            <Image
              src='/pionetoicon.png'
              alt='Olimpio Pereira'
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className='object-cover'
              priority
              quality={95}
            />
          </div>
        </div>
        <div className='md:col-span-7 space-y-6'>
          <H1>Sobre Olimpio Pereira</H1>
          <div className='space-y-4 text-gray-600'>
            <p className='text-lg leading-relaxed'>
              Olimpio Pereira foi um educador, escritor e ambientalista brasileiro que dedicou sua vida ao ensino,
              à literatura e à preservação do meio ambiente. Sua trajetória é marcada por uma rica contribuição
              para a educação em Goiás e uma profunda conexão com a natureza do cerrado brasileiro.
            </p>
            <p className='text-lg leading-relaxed'>
              Como professor e gestor educacional, ele impactou positivamente a vida de inúmeros estudantes
              e profissionais da educação. Sua paixão pela escrita resultou em diversas obras literárias
              que retratam a cultura e a vida no interior do Brasil.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutHeroSection
