import React from 'react'
import PacmanLoader from "react-spinners/PacmanLoader";

const FormsLoader = () => {


    return (
        <div className='flex justify-center items-center w-full h-[100vh] flex-col animate-[bganimate_2s_infinite_ease-in_alternate] gap-4'>
            <PacmanLoader
                color="#3cd7b8"
                size={30}
                aria-label="Loading Spinner"

                data-testid="loader"
            />
            <div className='text-xl'>Moving To Dark Space...</div>
            <div className='text-md drop-shadow-[0_5px_15px_cyan]'> Where No One Check Your Credentials</div>
        </div>
    )
}

export default FormsLoader
