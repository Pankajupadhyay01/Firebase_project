import React from 'react'
import { Link } from 'react-router-dom'
const Smallcard = ({ ...pro }) => {
    return (
        < >
            <div className='flex flex-col justify-center items-center w-[calc(50%-10px)] md:w-[calc(25%-15px)] bg-[#dfffce] md:p-[10px_10px] rounded-lg gap-2'>
                <div className='text-blue-500 text-[20px]'>
                    <ion-icon name={pro.image}></ion-icon>
                </div>
                <div className='font-bold lg:text-xl text-lg text-center text-blue-800'>
                    {pro.name}
                </div>
                <Link to={pro.Link} className='text-orange-500 font-bold text-[20px] transition-all hover:translate-x-2'>
                    <ion-icon name="arrow-forward-outline"></ion-icon>
                </Link>
            </div>

        </>
    )
}

export default Smallcard
