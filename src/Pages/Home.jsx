import React from 'react'
import Hero from '../Component/Home.jsx/Hero'
import About from '../Component/Home.jsx/About'
import Contact from '../Component/Home.jsx/Contact'
import Sponsor from '../Component/Home.jsx/Sponsor'
import Testimonial from '../Component/Home.jsx/Testimonial' 
import { useSelector } from 'react-redux'
const Home = () => {
    const user = useSelector((state) => state.user.user)
    return (
        <div className=''>
            <Hero />
            <About />
            <Sponsor />
            {/* <Testimonial /> */}
            <Contact />
        </div>
    )
}

export default Home
