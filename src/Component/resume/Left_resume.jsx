import React from 'react'
import { Wrok_Education } from './Wrok_Education'
import Project_lang from './Project_lang'

const Left_resume = () => {
  return (
    <div className='flex flex-col gap-[20px]'>
      {/* Education */}
      <div className='flex  flex-col gap-3'>
        <h1 className=' font-semibold text-blue-900 text-2xl'>
          EDUCATION
        </h1>
        {/* Education Detail */}
        <Wrok_Education course="Bachelor's Degree in Computer Application" col="Graphic Era" date="07/2021 - Present" area="Haldwani" />
      </div>

      {/* Project */}

      <div className='flex  flex-col gap-3'>
        <h1 className=' font-semibold text-blue-900 text-2xl'>
          Personal Project
        </h1>
        {/* Education Detail */}
        <Project_lang/>
      </div>

      {/* WORK EXPERIENCE */}
      <div className='flex  flex-col gap-3'>
        <h1 className=' font-semibold text-blue-900 text-2xl'>
          WORK EXPERIENCE

        </h1>
        {/* WORK EXPERIENCE  */}
        <Wrok_Education course="Front end developer" col="Ezyschooling" date="07/2021 - Present" area="Work from home " />
      </div>


    </div>
  )
}

export default Left_resume
