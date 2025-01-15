import React from 'react'

const P = ({ children }: {
  children: React.ReactNode;
}) => {
  return (
    <p className='tracking-wide font-light'>
      {children}
    </p>
  )
}

export default P