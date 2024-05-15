import React from 'react'

const Alnum_card = ({ ...pro }) => {
    return (
        <>
            <div className='flex w-[calc(50%-10px)] md:w-[calc(25%-10px)] justify-center items-start '>
                <div className='flex mx-2 flex-col w-[250px] justify-center items-center bg-Hero h-[200px] relative before:absolute before:content-[""]  before:h-[60px] before:w-full before:bg-white before:top-0 '>
                    <div className=" flex justify-center items-center border-t-4 border-green-200 text-4xl w-[100px] h-[100px] hover:scale-105 z-[99] rounded-[50%] bg-[aliceblue] p-1 overflow-hidden bg-contain">
                        <ion-icon name={pro.img}></ion-icon>
                    </div>
                    <div className='flex justify-center text-center items-center my-5'>
                        {pro.title}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Alnum_card
