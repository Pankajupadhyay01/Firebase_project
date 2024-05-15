import React from 'react'
import RingLoader from "react-spinners/RingLoader";

const Ringload = () => {
    return (
        <div className='flex justify-center items-center w-full flex-col '>
            <RingLoader
                color="black"
                size={50}
                aria-label="Loading Spinner"
                data-testid="loader"
            />

        </div>
    )
}

export default Ringload
