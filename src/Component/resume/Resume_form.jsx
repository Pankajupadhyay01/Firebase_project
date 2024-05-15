import React, { useEffect, useState } from 'react'
import Resume_template from './Resume_template'
import { Formik, useFormik } from 'formik';
import { headder, initial } from '../../data/resume'
import { useDispatch } from 'react-redux';
import { validate } from '../../Redux/resumeSlice';
const Resume_form = () => {

    // functions 
    const dispatch = useDispatch()
    const formik = useFormik({
        initialValues: initial,
        onSubmit: values => {

        },
    })
    dispatch(validate(formik.values))
    // console.log(values)

    const basic = (
        <>
            <div className='flex flex-col w-[30%] my-[10px] p-[10px] '>
                <input name="name" onChange={formik.handleChange} value={formik.values.name} placeholder="Enter Your Name"
                    className=' border-2 border-black text-center p-[8px] rounded outline-none' type="text" />
            </div>
            <div className='flex flex-col w-[30%] my-[10px] p-[10px] '>
                <input name='designation' onChange={formik.handleChange} value={formik.values.designation} placeholder='Enter Your Designation'
                    className=' border-2 border-black text-center p-[8px] rounded outline-none' type="text" />
            </div>
            <div className='flex flex-col w-[30%] my-[10px] p-[10px] '>
                <input name="about" onChange={formik.handleChange} value={formik.values.about} placeholder='Write About You'
                    className=' border-2 border-black text-center p-[8px] rounded outline-none' type="text" />
            </div>
            <div className='flex flex-col w-[30%] my-[10px] p-[10px] '>
                <input name='mail' onChange={formik.handleChange} value={formik.values.mail} placeholder='Enter Your Mail'
                    className=' border-2 border-black text-center p-[8px] rounded outline-none' type="text" />
            </div>
            <div className='flex flex-col w-[30%] my-[10px] p-[10px] '>
                <input name='contact' onChange={formik.handleChange} value={formik.values.contact} placeholder='Enter Your Number'
                    className=' border-2 border-black text-center p-[8px] rounded outline-none' type="text" />
            </div>
            <div className='flex flex-col w-[30%] my-[10px] p-[10px] '>
                <input name='location' onChange={formik.handleChange} value={formik.values.location} placeholder='Enter Your location'
                    className=' border-2 border-black text-center p-[8px] rounded outline-none' type="text" />
            </div>
            <div className='flex flex-col w-[30%] my-[10px] p-[10px] '>
                <input name='github' onChange={formik.handleChange} value={formik.values.github} placeholder='Enter Your github'
                    className=' border-2 border-black text-center p-[8px] rounded outline-none' type="text" />
            </div>
            <div className='flex flex-col w-[30%] my-[10px] p-[10px] '>
                <input name='linkedin' onChange={formik.handleChange} value={formik.values.linkedin} placeholder='Enter Your linkedin'
                    className=' border-2 border-black text-center p-[8px] rounded outline-none' type="text" />
            </div>
        </>

    )

    const education = (
        <>
            <div className='flex flex-col w-[30%] my-[10px] p-[10px] '>
                <input name="education" onChange={formik.handleChange} value={formik.values.education} placeholder="Enter your education "
                    className=' border-2 border-black text-center p-[8px] rounded outline-none' type="text" />
            </div>
            <div className='flex flex-col w-[30%] my-[10px] p-[10px] '>
                <input name="Instute" onChange={formik.handleChange} value={formik.values.Instute} placeholder="Enter your school/college "
                    className=' border-2 border-black text-center p-[8px] rounded outline-none' type="text" />
            </div>
            <div className='flex flex-col w-[30%] my-[10px] p-[10px] '>
                <input name="dos" onChange={formik.handleChange} value={formik.values.dos} placeholder="Enter Joining date "
                    className=' border-2 border-black text-center p-[8px] rounded outline-none' type="text" />
            </div>
            <div className='flex flex-col w-[30%] my-[10px] p-[10px] '>
                <input name="doe" onChange={formik.handleChange} value={formik.values.doe} placeholder="Enter completion date"
                    className=' border-2 border-black text-center p-[8px] rounded outline-none' type="text" />
            </div>
            <div className='flex flex-col w-[30%] my-[10px] p-[10px] '>
                <input name="location" onChange={formik.handleChange} value={formik.values.location} placeholder="Enter Location of Instute"
                    className=' border-2 border-black text-center p-[8px] rounded outline-none' type="text" />
            </div>
        </>
    )

    const skills = (
        <>
            <div className='flex flex-col w-[30%] my-[10px] p-[10px] '>
                <input name="skill" onChange={formik.handleChange} value={formik.values.skill} placeholder="Enter your Skill "
                    className=' border-2 border-black text-center p-[8px] rounded outline-none' type="text" />
            </div>
        </>
    )

    const project = (
        <>
            <div className='flex flex-col w-[30%] my-[10px] p-[10px] '>
                <input name="Project" onChange={formik.handleChange} value={formik.values.Project} placeholder="List your Project"
                    className=' border-2 border-black text-center p-[8px] rounded outline-none' type="text" />
            </div>
            <div className='flex flex-col w-[30%] my-[10px] p-[10px] '>
                <input name="project_desc" onChange={formik.handleChange} value={formik.values.project_desc} placeholder="Describe Project"
                    className=' border-2 border-black text-center p-[8px] rounded outline-none' type="text" />
            </div>
        </>
    )

    const experience = (
        <>
            <div className='flex flex-col w-[30%] my-[10px] p-[10px] '>
                <input name="position" onChange={formik.handleChange} value={formik.values.position} placeholder="Enter your position "
                    className=' border-2 border-black text-center p-[8px] rounded outline-none' type="text" />
            </div>
            <div className='flex flex-col w-[30%] my-[10px] p-[10px] '>
                <input name="company" onChange={formik.handleChange} value={formik.values.company} placeholder="Enter your company name"
                    className=' border-2 border-black text-center p-[8px] rounded outline-none' type="text" />
            </div>
            <div className='flex flex-col w-[30%] my-[10px] p-[10px] '>
                <input name="dos" onChange={formik.handleChange} value={formik.values.dos} placeholder="Enter Joining date"
                    className=' border-2 border-black text-center p-[8px] rounded outline-none' type="text" />
            </div>
            <div className='flex flex-col w-[30%] my-[10px] p-[10px] '>
                <input name="doe" onChange={formik.handleChange} value={formik.values.doe} placeholder="Enter completion date"
                    className=' border-2 border-black text-center p-[8px] rounded outline-none' type="text" />
            </div>
            <div className='flex flex-col w-[30%] my-[10px] p-[10px] '>
                <input name="location" onChange={formik.handleChange} value={formik.values.location} placeholder="Enter work Location "
                    className=' border-2 border-black text-center p-[8px] rounded outline-none' type="text" />
            </div>
        </>
    )

    const languages = (
        <>
            <div className='flex flex-col w-[30%] my-[10px] p-[10px] '>
                <input name="Languages" onChange={formik.handleChange} value={formik.values.Languages} placeholder="Language you Know"
                    className=' border-2 border-black text-center p-[8px] rounded outline-none' type="text" />
            </div>
        </>
    )

    // state
    const [heading, setheading] = useState("Basic")

    // useEffect
    const inputfunc = () => {
        switch (heading) {
            case "Basic":
                return basic
            case "Education":
                return education
            case "Skills":
                return skills
            case "Project":
                return project
            case "Experience":
                return experience
            case "Languages":
                return languages
            default:
                return basic
        }
    }

    useEffect(() => {
        inputfunc()
    }, [heading])

    return (
        <div>
            <div className='flex justify-between m-[10px]'>
                {
                    headder.map((pro, i) => (
                        <li key={i} className=' list-none bg-blue-900 hover:text-mustard p-[10px] rounded text-white cursor-pointer' onClick={() => setheading(pro.id)}>
                            {pro.title}
                        </li>
                    ))
                }
            </div>

            <div className='w-[90%] flex flex-col justify-center m-auto'>
                <form className='flex flex-wrap w-full justify-center items-center '>
                    {inputfunc()}
                </form>
            </div>
            {/* Template */}
            <Resume_template />
        </div >
    )
}

export default Resume_form
