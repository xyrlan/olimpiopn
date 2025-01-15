"use client"
import React, { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { AnimatePresence, motion } from 'motion/react'
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai'
import Image from 'next/image'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()

  const navItems = [
    { label: 'Home', href: '/' },
    { label: 'Sobre Olimpio', href: '/about' },
    { label: 'Livros', href: '/books' },
  ]

  function toggleMenu() {
    setIsOpen((prev) => !prev)
  }

  return (
    <>
      {/* Navbar principal */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className='sticky top-0 bg-[#ededed] px-6 py-6 z-50 flex justify-between items-center'
      >
        <Link
          href={'/'}
          className='text-xl md:text-2xl font-serif tracking-widest select-none flex items-center gap-2'
        >
          <Image src={'/pionetoicon.png'} width={50} height={50} alt='Pioneto Olimpio Neto' />
          <span className='cursor-pointer'>
            PIONETO
          </span>
        </Link>

        {/* Ícone do menu (aparece somente em telas pequenas) */}
        <button
          onClick={toggleMenu}
          className='text-2xl md:hidden hover:scale-110 transition-transform'
          aria-label='Abrir Menu'
        >
          <AiOutlineMenu />
        </button>

        {/* Menu (aparece somente em telas médias ou maiores) */}
        <ul className='hidden md:flex gap-4 items-center'>
          {navItems.map((item) => (
            <li key={item.label}>
              <Link
                href={item.href}
                aria-selected={pathname === item.href}
                className='uppercase aria-selected:font-medium border-b border-b-transparent hover:border-b-gray-500 transition-colors duration-300'
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </motion.nav>

      {/* Overlay (sombra) e menu lateral para mobile */}
      {/* Quando isOpen === false, esse elemento fica invisível. Você pode controlar exibição também via Tailwind se preferir. */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            key={'navbar-mobile'}
            onClick={toggleMenu} // Fechar ao clicar na área escura
            className='fixed inset-0 bg-black bg-opacity-50 flex justify-end z-50'
          // initial={{ opacity: 0 }}
          // animate={{ opacity: 1 }}
          // exit={{ opacity: 0 }}
          // transition={{ duration: 0.3 }}
          >
            {/* Menu lateral em si */}
            <motion.div
              onClick={(e) => e.stopPropagation()} // Evita fechar ao clicar dentro do menu
              className='w-64 max-w-[80%] h-full bg-[#ededed] p-6 flex flex-col'
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ duration: 0.5, ease: 'anticipate' }}
            >
              {/* Ícone de fechar */}
              <button
                onClick={toggleMenu}
                className='self-end text-2xl mb-8 hover:scale-110 transition-transform'
                aria-label='Fechar Menu'
              >
                <AiOutlineClose />
              </button>

              {/* Links do menu lateral */}
              <ul className='flex flex-col gap-6'>
                {navItems.map((item) => (
                  <li key={item.label}>
                    <Link
                      href={item.href}
                      aria-selected={pathname === item.href}
                      onClick={() => setIsOpen(false)} // fechar menu ao clicar
                      className='uppercase aria-selected:font-medium border-b border-b-transparent hover:border-b-gray-500 transition-colors duration-300'
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

export default Navbar
