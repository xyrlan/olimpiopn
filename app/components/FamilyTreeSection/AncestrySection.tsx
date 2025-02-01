import React from 'react'

interface AncestryGroup {
  title: string
  items: string[]
}

const ancestryData: AncestryGroup[] = [
  {
    title: 'Remotas',
    items: [
      'Da Galícia - Espanha Trás os Montes - Portugal',
    ],
  },
  {
    title: 'Intermediárias',
    items: [
      'Da Mata do Rio - Estado do Rio de Janeiro',
      'Serra Negra/Patrocínio - Estado de Minas Gerais',
    ],
  },
  {
    title: 'Próximas',
    items: [
      'Da fazenda Cachoeira - Lugares: Salto e Marinheiro',
    ],
  },
]

const AncestrySection = () => {
  return (
    <div className='grid gap-8 md:grid-cols-3'>
      {ancestryData.map((group) => (
        <div
          key={group.title}
          className='bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300'
        >
          <h2 className='text-xl font-semibold mb-4 text-gray-800'>
            {group.title}
          </h2>
          <ul className='space-y-3'>
            {group.items.map((item, index) => (
              <li
                key={index}
                className='text-gray-600 leading-relaxed'
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  )
}

export default AncestrySection
