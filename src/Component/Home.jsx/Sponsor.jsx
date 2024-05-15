import React from 'react'
import Heading from '../Cards/Heading'
import { ourSponsor } from '../../data/Joinus'
import Alnum_card from '../Cards/Alnum_card'
import Smallcard from '../Cards/Smallcard'
import { Herodata } from '../../data/Nav'

const Sponsor = () => {
    return (
        <div className='my-[50px]'>
            <Heading value={"Our Sponsor's"} />

            <div className='flex'>
                <div className='flex w-full justify-center flex-wrap m-auto gap-y-5'>

                    {
                        ourSponsor.map((pro, i) => (
                            <Alnum_card key={i} {...pro} />
                        ))
                    }

                </div>
            </div>

        </div>
    )
}

export default Sponsor