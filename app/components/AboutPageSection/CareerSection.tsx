import React from 'react'
import H1 from '../H1'

const careers = [
  {
    role: 'Auxiliar de Reportagem',
    organization: 'Jornal Brasil Central e Diário da Tarde',
    location: 'Goiânia-GO',
  },
  {
    role: 'Professor Primário',
    organization: 'Prefeitura Municipal de Goiânia',
    location: 'Goiânia-GO',
  },
  {
    role: 'Auxiliar de Serviço Social',
    organization: 'SESI - Serviço Social da Indústria',
    location: '',
  },
  {
    role: 'Auxiliar de Contabilidade',
    organization: 'DER - SESI - SENAI - FIEG',
    location: 'Goiânia-GO',
  },
  {
    role: 'Técnico Contabilista',
    organization: 'Secretaria Estadual da Administração do Estado de Goiás',
    location: '',
  },
  {
    role: 'Professor de 1° e 2° Graus',
    organization: 'Colégio Estadual de Orizona',
    location: 'Goiás',
  },
  {
    role: 'Professor Nível "3"',
    organization: 'Fundação Educacional do Distrito Federal-FEDF',
    location: '',
  },
  {
    role: 'Diretor Regional de Ensino',
    organization: 'Diretoria Regional de Ensino do Guará/FEDF/SEC/GDF',
    location: '',
  },
  {
    role: 'Professor de Ensino de 3° Grau',
    organization: 'Faculdade de Ensino Superior "Celso Inocêncio de Oliveira"/FAESCI',
    location: 'Pires do Rio-Goiás',
  },
  {
    role: 'Diretor de Colégio Estadual',
    organization: 'Colégio Estadual de Orizona',
    location: 'Goiás',
  },
]

const CareerSection = () => {
  return (
    <div className='container mx-auto py-20 max-md:px-6'>
      <div className='max-w-4xl mx-auto'>
        <div className='space-y-6'>
          <H1>Trajetória Profissional</H1>
          <p className='text-lg text-gray-600 leading-relaxed'>
            Ao longo de sua carreira, Olimpio Pereira atuou em diversas instituições educacionais
            e organizações, contribuindo significativamente para o desenvolvimento da educação
            em Goiás e no Distrito Federal.
          </p>
        </div>

        <div className='mt-12 space-y-6'>
          {careers.map((career, index) => (
            <div
              key={index}
              className='bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300'
            >
              <h3 className='text-xl font-semibold text-gray-800 mb-2'>{career.role}</h3>
              <p className='text-gray-600'>{career.organization}</p>
              {career.location && (
                <p className='text-gray-500 text-sm mt-1'>{career.location}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default CareerSection
