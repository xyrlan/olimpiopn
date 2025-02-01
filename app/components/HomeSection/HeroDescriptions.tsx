import React from 'react'
import H1 from '../H1'
import P from '../P'
import Image from 'next/image'

const HeroDescriptions = () => {
  return (
    <div className='flex flex-col gap-10 col-span-5 py-4'>
      <H1>
        Olímpio Pereira Neto
      </H1>

      <div className='flex flex-col font-light text-lg tracking-wide font-serif'>
        <span className=''>
          1936
        </span>
        <span className='text-base'>
          Brasil
        </span>
      </div>

      <div>
        <P>
          Nascido em 29 de abril de 1936, na fazenda Aroeiras, no município de Orizona, Goiás, Olímpio Pereira Neto foi um professor, jornalista e escritor reconhecido por sua contribuição à cultura e à educação brasileira. Formado em Letras pela Universidade Federal de Goiás, dedicou sua vida à disseminação do conhecimento, lecionando Teoria Literária, Literatura e Filosofia, além de se aposentar como professor da Secretaria de Educação do Governo do Distrito Federal.
        </P>
        <br />
        <P>
          Ao longo de sua trajetória, Olímpio foi membro ativo de diversas instituições, como a União Brasileira de Escritores, a Casa do Poeta Brasileiro e o Sindicato dos Escritores de Brasília. Também integrou a Associação Goiana de Imprensa e academias literárias, destacando-se na Academia Taguatinguense de Letras e na Academia de Letras, Ciências & Artes Campo Formoso, de Orizona.
        </P>
      </div>
      <div className='flex flex-col items-center justify-center'>
        <Image src='/brasao-orizona.png' alt='Olímpio Pereira Neto' width={300} height={300} />
        <p className='text-start max-md:text-sm self-end'>Brasão Orizona</p>
      </div>
    </div>
  )
}

export default HeroDescriptions