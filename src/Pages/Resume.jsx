import React from 'react'
import Resume_form from '../Component/resume/Resume_form'
import Heading from '../Component/Cards/Heading'

const Resume = () => {
    return (
        <div className='flex flex-col pt-[50px] w-[90%] m-auto'>
            <Heading value="Create Awesome Resume" />
            <Resume_form />
        </div>
    )
}

export default Resume
