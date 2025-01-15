"use client"
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'
import { motion } from "motion/react"

const Navbar = () => {
  const pathname = usePathname()
  console.log(pathname)
  const navItems = [
    {
      label: 'Home',
      href: '/'
    },
    {
      label: 'Sobre Olimpio',
      href: '/about'
    },
    {
      label: 'Livros',
      href: '/books'
    }
  ]

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className='sticky top-0 bg-[#ededed] px-6 py-6 z-50 flex justify-between'>
      <Link href={'/'} className='text-xl md:text-2xl font-serif tracking-widest select-none '>
        <span className='cursor-pointer hover:scale-110 transition-all duration-[5000ms] ease-in-out'>PIONETO</span>
      </Link>
      <ul className='flex gap-4 items-center'>
        {navItems.map((item) => (
          <li key={item.label}>
            <Link href={item.href} aria-selected={pathname === item.href} className='uppercase aria-selected:font-medium border-opacity-0 hover:border-opacity-100 border-b border-b-gray-500 duration-300' >
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
      <div>

      </div>
    </motion.nav>
  )
}

export default Navbar