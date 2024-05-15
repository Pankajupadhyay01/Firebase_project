import { doc, getDoc } from 'firebase/firestore'
import { useState } from 'react'
import { useParams } from 'react-router-dom'
import { db } from '../firebase'
import Answer_card from '../Component/Cards/Answer_card'
const Answer = () => {
    const id = useParams().id
    const [question, setQuestion] = useState({})

    // finding question using id
    try {
        const docref = doc(db, "ask_question", "0BEI0cLg8lLOu0zmAKbW");
        getDoc(docref).then((doc) => {
            if (doc.exists) {
                const data = doc.data()
                const arr = data.user_question
                const isid = arr.find(item => item.id === id)
                setQuestion(isid)
            }
        })
    } catch (error) {
        console.log(error)
    }

    return (
        <div className=' md:pt-[80px] md:mx-[40px]'>

            < div className=' w-full flex md:flex-row flex-col justify-between items-center' >


                {/* left side */}
                < div className='hidden md:flex flex-col w-full md:w-[35%] bg-black bg-opacity-10 h-[50vh]' >

                </div >

                {/* right side  */}
                < div className=' flex flex-col w-full md:w-[60%] border-2 md:h-[85vh] overflow-y-scroll md:p-[20px]' >
                    <Answer_card pro={question} />
                </div >

            </div>
        </div>
    )
}

export default Answer