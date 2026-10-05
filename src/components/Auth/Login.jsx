import React, { useState } from 'react'

const Login = ({ handlelogin }) => {
    const [password, setPassword] = useState("")
    const [email, setEmail] = useState("")


    const submitHandler = (e) => {
        e.preventDefault()
        // console.log("email", email, "password", password);
        handlelogin(email, password)
        setEmail("")
        setPassword("")


    }


    return (
        <div className="flex h-screen w-screen p-10 items-center justify-center">
            <div className="border-2 border-emerald-600 rounded-lg p-20">

                <form onSubmit={(e) => submitHandler(e)} className='flex flex-col items-center justify-center' >
                    <input required className='border-2 border-emerald-600 py-3 px-5 text-xl text-whitw outline-none bg-transparent placeholder:text-white rounded-full ' type="email" placeholder='Enter Your Email' value={email} onChange={(e) => setEmail(e.target.value)} />
                    <input required className='border-2 border-emerald-600 py-3 px-5 text-xl text-white outline-none bg-transparent mt-5 placeholder:text-white rounded-full ' type="password" placeholder='Enter Your Password' value={password} onChange={(e) => setPassword(e.target.value)} />
                    <button className='border-2 border-emerald-700 w-full mt-5 bg-emerald-600 py-3 px-5 text-xl text-white  outline-none  placeholder:text-white rounded-full '>Log In</button>
                </form>

            </div>
        </div>
    )
}

export default Login