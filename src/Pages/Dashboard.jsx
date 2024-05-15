import { useSelector, useStore } from "react-redux"
import Heading from "../Component/Cards/Heading"
import { useEffect, useState } from "react"
import { doc, getDoc } from "firebase/firestore"
import { db } from "../firebase"

const Dashboard = () => {
    const user = useSelector((state) => state.user.user_data)
    const uid = useSelector((state) => state.user.id)
    const [askedque, setaskedque] = useState([])
    const [ans, setans] = useState([])


    // finding all question asked by user 
    useEffect(() => {

        try {
            const docref = doc(db, "ask_question", "0BEI0cLg8lLOu0zmAKbW");
            getDoc(docref).then((doc) => {
                if (doc.exists) {
                    const data = doc.data()
                    const arr = data.user_question
                    const isid = arr.filter(item => item.user_id === uid)
                    setaskedque(isid)
                }
            })
        } catch (error) {
            console.log(error)
        }

    }, [askedque])

    // finding all answer using id asked by user 
    useEffect(() => {

        try {
            const docref = doc(db, "ask_question", "0BEI0cLg8lLOu0zmAKbW");
            getDoc(docref).then((doc) => {
                if (doc.exists) {
                    const data = doc.data()
                    const arr = data.user_ans
                    const isid = arr.filter(item => item.user_id === uid)
                    setans(isid)
                }
            })
        } catch (error) {
            console.log(error)
        }

    }, [ans])

    return (
        <div className='pt-[80px] mx-[40px]'>
            {
                user ?
                    <div className="bg-red-500 rounded-2xl mt-[10px] h-[70vh] relative flex flex-col gap-y-7 justify-center items-center before:absolute before:content-[''] before:h-[20vh] before:w-full before:bg-white before:top-0">
                        <div className="bg-blue-500 rounded-full w-[30vh] h-[9vh]  z-[99]  flex justify-center items-center border-4 border-white ">
                            <ion-icon name="people-outline"></ion-icon>
                        </div>

                        <div className="flex flex-wrap w-[95%] gap-x-4 justify-center">
                            <div className="w-[30%] bg-white">
                                <Heading value="Basic Detail" />
                                <div className="flex flex-col mx-5 cap">
                                    <div>
                                        <span className="text-[18px] font-semibold">Name:-</span>  {user.name}
                                    </div>
                                    <div>
                                        <span className="text-[18px] font-semibold">Mail:-</span>  {user.email}
                                    </div>
                                    <div>
                                        <span className="text-[18px] font-semibold">Contact:-</span>  {user.phone}
                                    </div>
                                    <div>
                                        <span className="text-[18px] font-semibold">Education:-</span>  {user.education}
                                    </div>
                                </div>
                            </div>
                            <div className="w-[30%] bg-white">
                                <Heading value="Total Asked Question" />
                                <div className=" font-bold text-blue-600 text-2xl flex justify-center items-center h-[50%]">
                                    {askedque.length}
                                </div>
                            </div>
                            <div className="w-[30%] bg-white">
                                <Heading value="Total Question Solved " />
                                <div className=" font-bold text-blue-600 text-2xl flex justify-center items-center h-[50%]">
                                    {ans.length}
                                </div>
                            </div>
                        </div>
                    </div>
                    :
                    <div className=' pt-[80px] mx-[40px] w-[90%] h-[50vh] flex justify-center items-center' >
                        Please Create your Profile First
                    </div>
            }
        </div>
    )
}

export default Dashboard