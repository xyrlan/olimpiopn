import React from 'react'
import H1 from './components/H1'
import P from './components/P'
import Link from 'next/link'

const NotFound = () => {
  return (
    <div className='h-[75vh] flex flex-col gap-5 justify-center text-center items-center'>
      <H1>OPS!</H1>
      <P>Não encontramos esta página :(</P>
      <Link href={"/"} className='uppercase border-opacity-0 hover:border-opacity-100 border-b border-b-gray-500 duration-300' >
        Ir para a página inicial
      </Link>
    </div>
  )
}

export default NotFound