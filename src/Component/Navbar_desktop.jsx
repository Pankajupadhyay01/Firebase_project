import React, { useState } from 'react'
import { Desktopnav } from '../data/Nav'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { Logout } from '../Redux/userSlice'
const Navbar_desktop = () => {
    // checking wether user is login or not
    const isuser = useSelector((state) => state.user.user)
    const dispatch = useDispatch()
    const logout = ()=>{
        dispatch(Logout())
    }
    return (
        <div>
            <nav className='bg-white hidden md:flex w-full fixed h-[50px] z-[999]'>
                <div className='flex w-full justify-between mx-[20px] items-center p-[10px_20px]'>
                    <div className='text-[28px] text-blue-900 font-semibold drop-shadow-[0_0_5px_mustard]'>Getforum</div>
                    <ul className='flex gap-x-4 justify-center items-center'>
                        {
                            Desktopnav.map((pro, i) => (
                                <Link key={i} to={pro.Link} className=' hover:text-blue-900 text-[18px]'>{pro.name}</Link>
                            ))
                        }

                        {
                            isuser ?
                                <div onClick={logout} className='bg-main text-white p-[5px_20px] rounded-xl cursor-pointer'>Log out </div>
                                :
                                <Link to={"/login"} className='bg-mustard p-[5px_20px] rounded-xl'>Sign in</Link>
                        }

                    </ul>
                </div>
            </nav>
        </div>
    )
}

export default Navbar_desktop
