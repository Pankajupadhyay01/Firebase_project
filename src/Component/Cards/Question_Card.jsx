import React from 'react'
import { Link } from 'react-router-dom'

const Question_Card = ({ ...pro }) => {
    return (
        <>
            <div className='md:w-[45%] w-full mx-[10px] overflow-x-ellipsis flex  flex-col jus gap-5 bg-blue-500 my-[20px] p-[10px] bg-opacity-30'>
                <div className='flex gap-x-3 items-center m-auto'>
                    <div className=' flex justify-center items-center text-white text-[25px] bg-black h-[50px] w-[50px] rounded-full'>
                        <ion-icon name="people-outline"></ion-icon>
                    </div>
                    <div>
                        {pro.user_name}
                    </div>
                </div>
                <div className='flex ml-4 w-full'>
                    {pro.question} ?
                </div>
                <Link to={`/answer/${pro.id}`}
                    type='submit'
                    value='Submit'
                    onClick={pro.setAnswer}
                    className='flex justify-center m-auto items-center bg-blue-500 p-[10px] rounded-full text-white gap-x-4'>
                    <ion-icon name="paper-plane"></ion-icon>
                </Link >
            </div>
        </>
    )
}

export default Question_Card