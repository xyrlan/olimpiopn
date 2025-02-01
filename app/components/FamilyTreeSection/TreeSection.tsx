import React from 'react'

interface FamilyMember {
  name: string
  spouse?: string
  relationship: string
}

const familyData = {
  bisavosPaternos: [
    { name: 'Albino Vieira da Mota', spouse: 'Maria Antonia Vieira', relationship: 'Bisavós Paternos' },
    { name: 'José Pereira Cardoso', spouse: 'Maria Abadia Vieira', relationship: 'Bisavós Paternos' },
  ],
  bisavosMaternos: [
    { name: 'José Pereira Cardoso', spouse: 'Maria Abadia Vieira', relationship: 'Bisavós Maternos' },
    { name: 'Tobias Machado de Castro', spouse: 'Cândida Fernandes de Castro', relationship: 'Bisavós Maternos' },
  ],
  avosPaternos: [
    { name: 'José Albino Vieira', spouse: 'Maria José de Jesus', relationship: 'Avós Paternos' },
  ],
  avosMaternos: [
    { name: 'Olimpio Pereira Cardoso', spouse: 'Luiza de Castro Pereira', relationship: 'Avós Maternos' },
  ],
  pais: [
    { name: 'Florentino Vieira Pereira', spouse: 'Dorcelina Pereira', relationship: 'Pais' },
  ],
  olimpioEsposa: [
    { name: 'Olimpio Pereira', spouse: 'Alexandrina Vicente Pereira', relationship: 'Casal' },
  ],
  descendentes: {
    filhos: [
      { name: 'Eloiza Rocha Pereira', spouse: 'Marcos Silva Neiva', relationship: 'Filha' },
      { name: 'Elder Rocha Pereira Vicente', spouse: 'Verbena Maria de Moura Fé', relationship: 'Filho' },
      { name: 'Elder Rocha Pereira Vicente', spouse: 'Adae Rubia Bandeira', relationship: 'Filho' },
      { name: 'Ruth Rocha Pereira Vicente', relationship: 'Filha' },
    ],
    netos: [
      { name: 'Giovani Pereira Neiva', relationship: 'Neto', parent: 'Eloiza' },
      { name: 'Eduardo Pereira Neiva', relationship: 'Neto', parent: 'Eloiza' },
      { name: 'Denise Barros Pereira', relationship: 'Neta', parent: 'Elder' },
      { name: 'Pedro Henrique Barros Pereira', relationship: 'Neto', parent: 'Elder' },
      { name: 'Gisele Maria Gonçalves Pereira', spouse: 'Paulo Cesar Pereira', relationship: 'Neta', parent: 'Elder' },
      { name: 'Angélica Bandeira Garcia', spouse: 'Thiago Fernandes Garcia', relationship: 'Neta', parent: 'Elder' },
      { name: 'Alice Bandeira Yahya', spouse: 'Rani Yahya', relationship: 'Neta', parent: 'Elder' },
    ],
    bisnetos: [
      { name: 'Luana Gonçalves Pereira', spouse: 'Cristopher Eduardo Gomes da Costa', relationship: 'Bisneta', parent: 'Gisele' },
      { name: 'João Paulo Gonçalves Pereira', spouse: 'Jessica Alves Ribeiro', relationship: 'Bisneto', parent: 'Gisele' },
      { name: 'Ana Julia Gonçalves Pereira', relationship: 'Bisneta', parent: 'Gisele' },
      { name: 'Bento Bandeira Garcia', relationship: 'Bisneto', parent: 'Angélica' },
    ],
    trinetos: [
      { name: 'Manuela Pereira da Costa', relationship: 'Trineta', parent: 'Luana' },
      { name: 'João Arthur Alves Pereira', relationship: 'Trineto', parent: 'João Paulo' },
    ],
  },
}

const TreeSection = () => {
  const renderFamilyGroup = (members: FamilyMember[], isDescendants: boolean = false) => (
    <div className={`space-y-2 relative ${isDescendants ? 'ml-8 pl-6 border-l-2 border-gray-200' : ''}`}>
      {members.map((member, index) => (
        <div
          key={index}
          className='bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 hover:translate-x-1 relative'
        >
          <p className='text-gray-800'>
            <span className='font-medium'>{member.name}</span>
            {member.spouse && (
              <>
                <span className='text-gray-400 mx-2'>•</span>
                <span>{member.spouse}</span>
              </>
            )}
          </p>
        </div>
      ))}
    </div>
  )

  return (
    <div className='mt-12 space-y-16'>
      <div className='grid md:grid-cols-2 gap-12'>
        <div>
          <h3 className='text-xl font-semibold mb-4 text-gray-800'>Bisavós Paternos</h3>
          {renderFamilyGroup(familyData.bisavosPaternos)}
        </div>
        <div>
          <h3 className='text-xl font-semibold mb-4 text-gray-800'>Bisavós Maternos</h3>
          {renderFamilyGroup(familyData.bisavosMaternos)}
        </div>
      </div>

      <div className='grid md:grid-cols-2 gap-12'>
        <div>
          <h3 className='text-xl font-semibold mb-4 text-gray-800'>Avós Paternos</h3>
          {renderFamilyGroup(familyData.avosPaternos)}
        </div>
        <div>
          <h3 className='text-xl font-semibold mb-4 text-gray-800'>Avós Maternos</h3>
          {renderFamilyGroup(familyData.avosMaternos)}
        </div>
      </div>

      <div className='relative'>
        <h3 className='text-xl font-semibold mb-4 text-gray-800'>Pais</h3>
        <div className='absolute left-0 w-px h-full bg-gray-200 -z-10'></div>
        {renderFamilyGroup(familyData.pais)}
      </div>

      <div className='relative'>
        <h3 className='text-xl font-semibold mb-4 text-gray-800'>Olimpio e Esposa</h3>
        <div className='absolute left-0 w-px h-full bg-gray-200 -z-10'></div>
        {renderFamilyGroup(familyData.olimpioEsposa)}
      </div>

      <div className='relative space-y-8'>
        <h3 className='text-xl font-semibold mb-4 text-gray-800'>Descendentes</h3>
        <div className='absolute left-0 w-px h-full bg-gray-200 -z-10'></div>
        
        <div>
          <h4 className='text-lg font-medium mb-3 text-gray-700'>Filhos</h4>
          {renderFamilyGroup(familyData.descendentes.filhos)}
        </div>

        <div className='ml-6'>
          <h4 className='text-lg font-medium mb-3 text-gray-700'>Netos</h4>
          {renderFamilyGroup(familyData.descendentes.netos)}
        </div>

        <div className='ml-12'>
          <h4 className='text-lg font-medium mb-3 text-gray-700'>Bisnetos</h4>
          {renderFamilyGroup(familyData.descendentes.bisnetos)}
        </div>

        <div className='ml-16'>
          <h4 className='text-lg font-medium mb-3 text-gray-700'>Trinetos</h4>
          {renderFamilyGroup(familyData.descendentes.trinetos)}
        </div>
      </div>
    </div>
  )
}

export default TreeSection
