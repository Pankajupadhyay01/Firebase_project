import { arrayUnion, doc, getDoc, updateDoc } from 'firebase/firestore';
import React, { useEffect } from 'react'
import { useState } from 'react'
import { useSelector } from 'react-redux';
import { db } from '../../firebase';

const Answer_card = ({ pro }) => {

    const user_id = useSelector((state) => state.user.id);
    const user_name = useSelector((state) => state.user.user_data.name)

    const id = pro.id

    const [ans, setans] = useState("")
    const [allans, setallans] = useState([])
    const handleChange = (e) => {
        setans(e.target.value)
    }


    const handle_submit = async (e) => {
        e.preventDefault();
        try {
            const docref = doc(db, "ask_question", "0BEI0cLg8lLOu0zmAKbW");
            await updateDoc(docref, {
                user_ans: arrayUnion({
                    que_id: id,
                    answer: ans,
                    user_id: user_id,
                    user_name: user_name,
                })
            })
            alert("Hey  You'r Answer posted sucessfully.")

        }
        catch (error) {
            console.log(error)
        }
    }

    // finding all answer using id
    useEffect(() => {

        try {
            const docref = doc(db, "ask_question", "0BEI0cLg8lLOu0zmAKbW");
            getDoc(docref).then((doc) => {
                if (doc.exists) {
                    const data = doc.data()
                    const arr = data.user_ans
                    const isid = arr.filter(item => item.que_id === id)
                    setallans(isid)
                }
            })
        } catch (error) {
            console.log(error)
        }

    }, [allans])

    return (
        <div className='flex w-full flex-col gap-4 bg-blue-500 bg-opacity-50 p-[10px_10px] text-black rounded-lg'>
            <div className='flex mx-[20px] items-center text-lg'>
                Que:-  {pro.question} ?
            </div>
            <div className='flex w-full flex-col gap-y-2 justify-center items-center'>
                <form onSubmit={handle_submit}>
                    <textarea
                        onChange={handleChange}
                        className='bg-white p-[10px_10px] rounded-lg w-full'
                        name="" id="" placeholder='Your Answer'
                        rows="5" cols="50"
                        required />

                    <button type='submit' className='flex justify-center m-auto items-center bg-blue-500 p-[10px] rounded-full text-white gap-x-4'>
                        Post Answer <ion-icon name="paper-plane"></ion-icon>
                    </button>
                </form>
            </div>

            <div>
                <h1 className=' flex justify-end mx-5 items-center text-[20px] font-semibold text-blue-700 my-[20px]'>
                    Other Answer's
                </h1>

                <div className='flex w-full flex-col gap-y-2 justify-center items-center'>
                    {
                        allans.map((item, i) => (
                            <div className='flex flex-col gap-y-3  w-full bg-white p-[10px] rounded'>

                                <div className='flex gap-x-4 text-black items-center '>
                                    <div className=' flex justify-center items-center text-white text-[25px] bg-black h-[50px] w-[50px] rounded-full'>
                                        <ion-icon name="people-outline"></ion-icon>
                                    </div>
                                    <div>
                                        {item.user_name}
                                    </div>
                                </div>
                                <div className='flex gap-x-5 mx-10'>
                                    {item.answer}
                                </div>
                            </div>
                        ))
                    }
                </div>

            </div>
        </div>
    )
}

export default Answer_card