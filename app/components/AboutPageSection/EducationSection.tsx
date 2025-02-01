import React from 'react'
import H1 from '../H1'

const courses = [
  'Técnico em Contabilidade (2° Grau)',
  'Letras Vernáculas',
  'Educação Moral e Cívica e Problemas Brasileiros',
  'Diversos cursos de Extensão Universitária',
  'Cursos de Atualização de Conhecimentos',
]

const EducationSection = () => {
  return (
   <div className='bg-gray-50'>
     <div className='container mx-auto py-20 max-md:px-6 '>
      <div className='max-w-4xl mx-auto'>
        <div className='space-y-6'>
          <H1>Formação Acadêmica</H1>
          <p className='text-lg text-gray-600 leading-relaxed'>
            Ao longo de sua vida, Olimpio Pereira buscou constantemente o aprimoramento profissional
            e acadêmico, participando de diversos cursos e programas educacionais.
          </p>
        </div>

        <div className='mt-12'>
          <div className='grid gap-6'>
            {courses.map((course, index) => (
              <div
                key={index}
                className='bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300'
              >
                <p className='text-lg text-gray-800'>{course}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
   </div>
  )
}

export default EducationSection
