import React from 'react'
import Alnum_card from '../Cards/Alnum_card'
import Heading from '../Cards/Heading'
import { Joinus } from '../../data/Joinus'
const About = () => {
    return (
        <div className='flex w-[90%] m-auto mb-[30px]'>
            <div className='flex flex-col w-full justify-center items-center '>
                <Heading value="Why Join Us ?" />
                <div className='w-full'>
                    <div className='flex w-full justify-center flex-wrap m-auto gap-y-5'>

                        {
                            Joinus.map((pro, i) => (
                                <Alnum_card key={i} {...pro} />
                            ))
                        }
                    </div>
                </div>
            </div>

        </div>
    )
}

export default About
