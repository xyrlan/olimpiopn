import React from 'react'
import H1 from '../H1'
import P from '../P'

const HeroDescriptions = () => {
  return (
    <div className='flex flex-col gap-10 col-span-5'>
      <H1>
        Olimpo Pereira Neto
      </H1>

      <div className='flex flex-col font-light text-lg tracking-wide '>
        <span>
          1936
        </span>
        <span className='text-base'>
          Brasil
        </span>
      </div>

      <div>
        <P>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita in laboriosam doloremque delectus iste maxime ab recusandae velit esse distinctio, soluta sapiente modi nam fugiat deleniti. Explicabo possimus ipsam labore!
        </P>
        <br />
        <P>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum, quibusdam. Tempore aliquid debitis suscipit magnam velit excepturi delectus sint sed nemo facere enim, similique possimus quos inventore perferendis et officia.
        </P>
      </div>
    </div>
  )
}

export default HeroDescriptions