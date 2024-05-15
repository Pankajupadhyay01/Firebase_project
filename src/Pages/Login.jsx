import React, { useEffect, useState } from 'react'
import Logimg from '/assets/login.png'
import FormsLoader from '../Component/Loaders/FormsLoader';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from '../firebase';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { checkUser, userid } from '../Redux/userSlice';

const Login = () => {

  // Loading animation time  

  const [loading, setloading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setloading(false)
    }, 3500);
  }, [])

  // Loading animation end


  const dispatch = useDispatch()

  const [Form, setForm] = useState("Sign In");
  const navigate = useNavigate()
  // form user input state 
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // const error state for firebase 
  const [err, seterr] = useState("")


  // form toogle method
  const func = () => {
    setEmail("");
    setName("");
    setPassword("")
    if (Form == "Sign In") {
      setForm("Sign Up")
    } else {
      setForm("Sign In")
    }
  }

  // submit button for Sign up

  const handleSubmit = (e) => {
    e.preventDefault()

    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        seterr("")
        const user = userCredential.user;
        alert("Hey Your Accoun created sucessfully")
      })
      .catch((error) => {
        seterr(error.code)
      });
  }

  // sign in button 

  const hanleLogin = (e) => {
    e.preventDefault()

    signInWithEmailAndPassword(auth, email, password)
      .then(async (userCredential) => {
        seterr("")
        const user = await userCredential.user;
        const id = await user.uid
        const email = await user.email
        dispatch(checkUser())
        dispatch(userid(id))
        navigate("/")
      })
      .catch((error) => {
        seterr(error.code)
      });
  }

  return (
    <>
      {
        loading ?
          < FormsLoader />
          :
          <div className='h-[100vh] bg-main flex items-center'>

            <div className='bg-white bg-opacity-20 border-1 w-[90%] lg:w-[70%] py-[40px] m-auto'>
              {/* heading */}
              <h1 className='flex justify-center text-[42px] text-mustard mb-5'>
                {Form}
              </h1>
              <div className='flex md:flex-row w-full flex-col m-auto justify-between items-center'>

                {/* Left Section */}

                <div className='flex justify-center gap-4 flex-col flex-1 items-center w-full lg:w-[55%] md:border-r-2'>

                  {/* form */}

                  <form action="" className='flex flex-col gap-4  justify-center items-center'>
                    <input value={email} type="email" onChange={e => { setEmail(e.target.value); seterr("") }} className=' bg-transparent border-2 p-[5px_10px] text-center outline-none text-white w-[280px] rounded-lg ' placeholder='Enter Your Email' />
                    {
                      Form == "Sign Up" ?

                        <input onChange={e => setName(e.target.value)} value={name} type="text" className=' bg-transparent border-2 p-[5px_10px] text-center outline-none text-white w-[280px] rounded-lg ' placeholder='Enter Your Name' />
                        : <></>
                    }

                    <input onChange={e => setPassword(e.target.value)} value={password} type="password" className=' bg-transparent border-2 p-[5px_10px] text-center outline-none text-white w-[280px] rounded-lg ' placeholder='Enter Your Password' />

                    {
                      Form == "Sign Up" ?
                        <button onClick={handleSubmit} className=' bg-main flex justify-center p-[10px_40px] rounded-[50px] text-white'>Sign up</button>
                        :
                        <button onClick={hanleLogin} className=' bg-main flex justify-center p-[10px_40px] rounded-[50px] text-white'>Sign in</button>
                    }

                  </form>

                  {err ? <div> {err} </div> : ""}

                  {/* login with options  */}
                  <div className='flex gap-x-3'>
                    <div className='cursor-pointer ' >Google</div>
                    <div className='cursor-pointer '>Github</div>
                  </div>

                  {/* Signup page link For mobile */}
                  <div className='text-white md:hidden'>
                    Do You Want to ? <button className='text-blue-300 ' onClick={() => func()}>{Form == "Sign In" ? "Sign Up" : "Sign In"}</button>
                  </div>
                </div>

                {/* Right Section */}

                <div className='md:flex flex-col justify-center items-center w-[45%] flex-2 animate-[Bounce_2s_infinite_ease_alternate] hidden'>
                  <img className='w-full ' src={Logimg} alt="" srcSet={Logimg} />

                  {/* Signup page link for desktop */}
                  <div className='text-white'>
                    Do You Want to  ? <button className='text-blue-300' onClick={() => func()}>{Form == "Sign In" ? "Sign Up" : "Sign In"}</button>
                  </div>
                </div>


              </div>
            </div>


          </div>
      }
    </>

  )
}

export default Login
