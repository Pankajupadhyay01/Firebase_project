import React from 'react'

const Seller_list_card = ({ ...pro }) => {
    return (
        // <div className='flex w-[calc(50%-10px)] md:w-[calc(25%-10px)] justify-center items-start '>
            <div className='flex mx-2 flex-col w-[250px] justify-center items-center bg-Hero h-[200px] relative before:absolute before:content-[""]  before:h-[40px] before:w-full before:bg-white before:top-0 '>
                <div className=" flex justify-center items-center border-1 border-blue-500 text-4xl w-[100px] h-[100px] hover:scale-105 z-[99] rounded-[50%] bg-[aliceblue] p-1 overflow-hidden bg-contain">
                    <ion-icon name={pro.img}></ion-icon>
                </div>
                <div className='flex flex-col justify-center text-center items-center my-5'>
                    <div className=' text-xl text-blue-800'>
                        {pro.name}
                    </div>
                    <div className='text-md text-green-800'>
                        {pro.about}
                    </div>
                </div>

                <div className='flex justify-between w-full px-4 text-purple-700 text-lg'>
                    <div>{pro.education}</div>
                    <div>{pro.phone}</div>
                </div>
            </div>
        // </div> 
    )
}

export default Seller_list_card