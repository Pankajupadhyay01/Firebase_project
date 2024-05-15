import { useEffect, useState } from 'react' 
import { collection, getDocs } from "firebase/firestore";
import { db } from '../../firebase'
import Ringload from '../Loaders/Ringload';
import Seller_list_card from '../Cards/Seller_list_card';
import { Link } from 'react-router-dom';

const Seller_list = () => {
    const [list, setlist] = useState([])
    const [loading, setloading] = useState(true)
    useEffect(() => {
        const fetchSeller = async () => {
            let seller = []
            try {
                const querySnapshot = await getDocs(collection(db, "seller"));
                querySnapshot.forEach((doc) => {
                    const id = doc.id
                    seller = [...seller, { id, ...doc.data() }]
                });
                setlist(seller)
                setloading(false)
            } catch (error) {
                console.log(error);
            }
        }

        fetchSeller()
    }, [])
    return (
        <>
            {
                loading ? <Ringload /> :
                    <div className='flex flex-wrap'>
                        {
                            list.map((pro, i) => (
                                <Link to={"/hire/" + pro.id} className='flex w-[calc(50%-10px)] md:w-[calc(25%-10px)] justify-center items-start '>
                                    <Seller_list_card key={i} {...pro} />
                                </Link>
                            ))

                        }
                    </div>
            }
        </>
    )
}

export default Seller_list