import React, { useState } from 'react'
import Heading from '../Cards/Heading'
import { contact } from '../../data/contact'
import { getFirestore, collection, addDoc } from "firebase/firestore";
import { app } from '../../firebase';


const firestore = getFirestore()
const Contact = () => {
    const [data, setdata] = useState({})

    const dataListner = (e) => {
        const id = e.target.id;
        const val = e.target.value;
        setdata({ ...data, [id]: val })
    }

    const writeData = async (e) => {
        e.preventDefault();
        try {
            console.log(data);
            const result = await addDoc(collection(firestore, "contacts"), {
                ...data,
            });
            const resul = await 
            alert("We have Stored your Detail. Will Contact you ASAP")
        } catch (error) {
            console.log(error);
            alert("Ooops Some error occur please try again ")
        }
    }

    return (
        <>
            <Heading value="Contact Us" />
            <div className='flex sm:flex-row flex-col w-[90%] m-auto justify-between items-center my-5'>
                <div className='hidden sm:flex sm:flex-col gap-3 flex-1 justify-center items-center border-r-2 border-gray-500'>
                    {
                        contact.map((pro, i) => (
                            <div key={i} className='flex flex-col items-center'>
                                <ion-icon name={pro.image}></ion-icon>
                                <div className='text-[24px] font-semibold text-blue-950'>{pro.name}</div>
                                <div className='text-pink-900'>{pro.detail}</div>
                            </div>
                        ))
                    }
                </div>

                <div className='flex md:flex-col gap-3 flex-1 justify-center items-center'>
                    <form onSubmit={writeData} action="" className='flex flex-col gap-4  justify-center items-center'>
                        <input type="name" id='name' onChange={dataListner} className=' bg-transparent border-2 border-black p-[5px_10px] text-center outline-none text-black w-[280px] sm:w-[350px] rounded-lg ' placeholder='Enter Your Name' required/>
                        <input type="email" id='email' onChange={dataListner} className=' bg-transparent border-2 border-black p-[5px_10px] text-center outline-none text-black w-[280px] sm:w-[350px] rounded-lg ' placeholder='Enter Your Email' required/>
                        <textarea rows={5} id='message' type="text" onChange={dataListner} className=' bg-transparent border-2 border-black p-[5px_10px] text-center outline-none text-black w-[280px] sm:w-[350px] rounded-lg ' placeholder='Enter Your Message..' required/>
                        <button type='submit' className=' bg-main flex justify-center p-[10px_40px] rounded-[50px] text-white'>Submit</button>
                    </form>
                </div>
            </div>
        </>
    )
}


export default Contact
