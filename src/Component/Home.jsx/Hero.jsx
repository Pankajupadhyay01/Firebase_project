import React from 'react'
import Smallcard from '../Cards/Smallcard'
import Hero_mobile from './Hero_mobile'
import { Herodata } from '../../data/Nav'
const Hero = () => {
    return (
        <>
            <div className='pt-[50px] hidden md:flex md:flex-col'>

                <div className='bg-Hero h-[320px] z-[-1] '>
                    <div className='flex flex-col justify-center items-center h-[280px] '>
                        <div className='text-[32px] text-black font-semibold'>
                            Get All Tech Related Help
                        </div>
                        <div className='text-purple-500'>
                            Get Help | Do Help | Earn Coin
                        </div>
                    </div>
                </div>

                <div className='bg-white w-[90%] hidden md:flex justify-center items-center m-auto py-[30px] -mt-[80px] rounded-t-[30px]'>
                    <div className='w-full flex flex-wrap justify-center gap-4 mb-10 md:mb-0 pb-10'>
                        {
                            Herodata.map((pro, i) => (
                                <Smallcard key={i} {...pro} />
                            ))
                        }
                    </div>

                </div>
            </div>

            {/* Hero Section for mobile */}
            <Hero_mobile />
        </>
    )
}

export default Hero
