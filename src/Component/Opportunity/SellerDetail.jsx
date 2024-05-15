import { doc, getDoc } from "firebase/firestore";
import { db } from '../../firebase'
import { useEffect, useState } from 'react'
import { useParams } from "react-router-dom";

const SellerDetail = () => {
    const [detail, setdetail] = useState({})
    const uid = useParams().data
    useEffect(() => {
        const fetchData = async () => {
            const docRef = doc(db, "seller", uid);
            const docSnap = await getDoc(docRef);

            if (docSnap.exists()) {
                setdetail(docSnap.data())
            } else {
                console.log("No such document!");
            }
        }
        fetchData()
    }, [])

    return (
        <>
            <div className="w-[90%] py-10 flex flex-col justify-center items-center gap-2 m-auto">
                {/* image  */}
                <div className="flex h-[90px] bg-black w-[90px] rounded-full cursor-pointer justify-center text-white items-center">
                    <input type="file" className=" bg-transparent w-[50px]" />
                </div>
                <div className="flex justify-between items-center w-full text-center m-auto">
                    <div className="flex flex-1 justify-center flex-col gap-5 ">
                        <div className="flex gap-3">
                            <div className="font-semibold text-[20px] text-blue-800">Name:- </div>
                            <div className=" text-[20px] font-medium text-green-900">
                                {detail.name}
                            </div>
                        </div>
                        <div className="flex gap-3">
                            <div className="font-semibold text-[20px] text-blue-800">User Name:- </div>
                            <div className=" text-[20px] font-medium text-green-900">
                                {detail.username}
                            </div>
                        </div>
                        <div className="flex gap-3">
                            <div className="font-semibold text-[20px] text-blue-800">Education:- </div>
                            <div className=" text-[20px] font-medium text-green-900">
                                {detail.education}
                            </div>
                        </div>
                        <div className="flex gap-3">
                            <div className="font-semibold text-[20px] text-blue-800">About:- </div>
                            <div className=" text-[20px] font-medium text-green-900">
                                {detail.about}
                            </div>
                        </div>

                    </div>

                    <div className="flex flex-1">
                        uijghuyh
                    </div>
                </div>

            </div>
        </>
    )
}

export default SellerDetail