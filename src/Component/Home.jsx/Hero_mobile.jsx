import React from 'react'
import heroimg from '/assets/hero.png'
import Smallcard from '../Cards/Smallcard'
import { Herodata } from '../../data/Nav'

const Hero_mobile = () => {
    return (
        <div className='bg-Hero overflow-hidden w-full md:hidden flex justify-center items-center'>
            <div className='flex flex-col justify-between w-[95%] h-full'>
                <div className='md:hidden flex flex-col flex-1 justify-center items-center h-full gap-y-4'>
                    <div className='h-[250px] animate-[Bounce_2s_infinite_alternate]'>
                        <img src={heroimg} className='h-full' alt="" />
                    </div>
                    <div className='text-orange-500 text-lg drop-shadow-[2px_3px_0_pink] cursor-pointer'>
                        Do Help.. Get Hired..
                    </div>
                </div>

                <div className='flex  flex-1  justify-center items-center flex-col gap-y-8 h-[100vh]'>
                    <div className='flex flex-col justify-center items-center'>
                        <h1 className='text-[28px] text-center font-semibold text-[#2d1c5a]'>
                            Get All Tech Related Help
                        </h1>
                        <div className='cursor-none'>
                            Get Help | Do Help | Earn Coin
                        </div>
                    </div>

                    <div className='w-full flex flex-wrap justify-center gap-4 mb-10 md:mb-0 pb-10'>

                        {
                            Herodata.map((pro, i) => (
                                <Smallcard key={i} {...pro} />
                            )
                            )
                        }
                    </div>
                </div>

            </div>

        </div>
    )
}

export default Hero_mobile
