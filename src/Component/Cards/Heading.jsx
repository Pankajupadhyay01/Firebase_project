import React from 'react'

const Heading = ({ value }) => {
    return (
        <div className='flex justify-center py-[10px]'>
            <span className='text-[28px] text-blue-900 relative font-[600] before:absolute before:h-[4px] before:w-full before:content-["_"] before:bg-[#4070f4] before:bottom-0 before:left-0 after:bg-mustard after:w-[50%] after:h-1 after:content-["_"] after:absolute after:left-0 after:bottom-0'>
                {value}
            </span>
        </div>


    )
}

export default Heading
