import React from 'react'
import Image from 'next/image'
import H1 from '../H1'

const ecologyPoints = [
  {
    title: 'Cultivo de Madeiras',
    description: 'Dedicou-se ao cultivo de madeiras de lei, demonstrando seu compromisso com o reflorestamento sustentável.',
  },
  {
    title: 'Plantio de Ipês',
    description: 'Realizou extensivo plantio de mudas de ipê, árvore característica do cerrado, no Park Way em Brasília, contribuindo para a arborização urbana.',
  },
  {
    title: 'Piscicultura',
    description: 'Desenvolveu atividades de criação de peixes, demonstrando seu interesse pela biodiversidade aquática.',
  },
  {
    title: 'Preservação da Fazenda Aroeira',
    description: 'Dedicou-se à revitalização da represa e das nascentes da Fazenda Aroeira, preservando recursos hídricos importantes.',
  },
]

const EcologySection = () => {
  return (
    <div className='bg-gray-50'>
      <div className='container mx-auto py-20 max-md:px-6 bg-gray-50'>
        <div className='max-w-4xl mx-auto'>
          <div className='space-y-6'>
            <H1>Ecologia e Natureza</H1>
            <p className='text-lg text-gray-600 leading-relaxed'>
              Olimpio Pereira manteve uma profunda conexão com a natureza ao longo de sua vida,
              dedicando-se à preservação ambiental e ao cultivo sustentável em diversas regiões.
            </p>
          </div>

          <div className='mt-12 grid md:grid-cols-2 gap-8'>
            <div className='space-y-6'>
              {ecologyPoints.map((point, index) => (
                <div
                  key={index}
                  className='bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300'
                >
                  <h3 className='text-xl font-semibold text-gray-800 mb-2'>{point.title}</h3>
                  <p className='text-gray-600 leading-relaxed'>{point.description}</p>
                </div>
              ))}
            </div>

            <div className='relative aspect-[3/4] rounded-lg overflow-hidden shadow-lg'>
              <Image
                src='/ype.jpg'
                alt='Ipê no cerrado brasileiro'
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className='object-cover'
                quality={95}
              />
              <div className='absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-4'>
                <p className='text-sm'>
                  Ipê no cerrado brasileiro, uma das espécies que Olimpio cultivava com dedicação
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default EcologySection
