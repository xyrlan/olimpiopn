import React from 'react'

interface BookCardProps {
  title: string
  type: string
  year: number
}

const BookCard = ({ title, type, year }: BookCardProps) => {
  return (
    <div className='flex flex-col gap-4 group cursor-pointer p-4'>
      <div className='relative w-full aspect-[3/4] bg-white rounded-lg overflow-hidden transition-all duration-300 group-hover:scale-105 shadow-sm group-hover:shadow-lg'>
        {/* Placeholder for book cover */}
        <div className='absolute inset-0 flex items-center justify-center text-gray-400 bg-gray-50'>
          <svg className='w-16 h-16' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
            <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253' />
          </svg>
        </div>
      </div>
      <div className='space-y-1 text-center'>
        <h3 className='text-xl font-semibold line-clamp-2 min-h-[3.5rem]'>{title}</h3>
        <p className='text-gray-600 capitalize'>{type}</p>
        <p className='text-gray-500 font-medium'>{year}</p>
      </div>
    </div>
  )
}

export default BookCard
