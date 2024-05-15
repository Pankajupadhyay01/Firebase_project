import React from 'react'

export const Wrok_Education = ({ ...props }) => {
  return (
    <>

      {/* Education Detail */}
      <div className='flex flex-col gap-1'>
        <div className='font-semibold text-lg'>
          {props.course}
        </div>

        <p className='font-[600] text-gray-600'>
          {props.col}
        </p>

        <div className='flex justify-between font-light text-sm'>
          <p>{props.date}</p>
          <p>{props.area}</p>
        </div>
      </div>

    </>
  )
}
