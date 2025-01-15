import Link from 'next/link'
import React from 'react'

const Footer = () => {
  const socialList = [
    {
      label: 'Instagram',
      href: '/'
    },
    {
      label: 'Facebook',
      href: '/'
    },
    {
      label: 'Twitter',
      href: '/'
    },
    {
      label: 'Youtube',
      href: '/'
    },
  ]
  return (
    <footer className='mx-4 md:mx-20 py-6 border-t border-black/50'>
      <div className='container mx-auto flex md:flex-row flex-col justify-between max-md:gap-5'>
        <ul className='flex md:flex-col max-md:justify-between flex-wrap gap-1'>
          {socialList.map((item) => (
            <li key={item.label}>
              <Link href={item.href} target='_blank' className='border-opacity-0 hover:border-opacity-100 border-b border-b-gray-500 duration-300' >
                {item.label}
              </Link>
            </li>
          ))}
          <span className='text-xs mt-5 text-gray-500 max-md:hidden'>
            ®PIONETO 2025
          </span>
        </ul>

        <div className='flex flex-col md:gap-5'>
          <span className='uppercase'>
            Goiás, Orizona, Fazenda Aroeiras
          </span>
          <p>
            29 de abril de 1936
          </p>
        </div>

        <div className='flex flex-col md:gap-5'>
          <span className='uppercase'>
            Distrito Federal, Brasília
          </span>
          <p>
            19 de julho de 2020
          </p>
        </div>
        <span className='text-xs mt-5 text-gray-500 md:hidden'>
            ®PIONETO 2025
          </span>
      </div>
    </footer>
  )
}

export default Footer