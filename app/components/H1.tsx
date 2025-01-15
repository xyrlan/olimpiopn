import React from 'react'

const H1 = ({ children }: {
  children: React.ReactNode;
}) => {
  return (
    <h1 className='text-2xl md:text-3xl'>
      {children}
    </h1>
  )
}

export default H1