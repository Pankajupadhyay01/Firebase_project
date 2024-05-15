import React from 'react'
import { Wrok_Education } from './Wrok_Education'
import Project_lang from './Project_lang'

const Right_resume = () => {
    return (
        <div className='flex w-full flex-col gap-[20px]'>
            <div className='flex justify-start  flex-col gap-3'>
                <h1 className=' font-semibold text-blue-900 text-2xl'>
                    SKILLS
                </h1>

                {/* Skill */}
                <div className='flex gap-3 w-full flex-wrap justify-start'>
                    <div className='flex w-[(25%-10px)] items-start justify-start'>
                        <div className='p-[10px] bg-slate-500 rounded-xl text-white'>
                            React js
                        </div>
                    </div>
                    <div className='flex w-[(25%-10px)] items-start justify-start'>
                        <div className='p-[10px] bg-slate-500 rounded-xl text-white'>
                            Tailwind
                        </div>
                    </div>
                    <div className='flex w-[(25%-10px)] items-start justify-start'>
                        <div className='p-[10px] bg-slate-500 rounded-xl text-white'>
                            Next js
                        </div>
                    </div>
                    <div className='flex w-[(25%-10px)] items-start justify-start'>
                        <div className='p-[10px] bg-slate-500 rounded-xl text-white'>
                            Javascript
                        </div>
                    </div>

                </div>

                {/* Skill section ended  */}


            </div>


            {/* achievement */}
            <div className='flex justify-start  flex-col gap-3'>
                <h1 className=' font-semibold text-blue-900 text-2xl'>
                    Achievement
                </h1>
                <Wrok_Education course="Front end developer" col="Ezyschooling" date="07/2021 - Present" />

            </div>

            {/* Language  */}
            <div className='flex justify-start  flex-col gap-3'>
                <h1 className=' font-semibold text-blue-900 text-2xl'>
                    Languages
                </h1>
                <Project_lang />
            </div>

            {/* Social Link  */}
            <div className='flex justify-start  flex-col gap-3'>
                <h1 className=' font-semibold text-blue-900 text-2xl'>
                    Social Link
                </h1>
                <div className=''>
                    GitHub
                </div>
            </div>

        </div>
    )
}

export default Right_resume