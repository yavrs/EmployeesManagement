import React, { useState } from 'react'

const Header = (props) => {

    const logout = () => {
        localStorage.removeItem("loggedInuser");
        props.changeuser("")
    }

    return (
        <div className='flex items-center  justify-between'>
            <h1 className='text-2xl font-medium '>hello <br /> <span className='text-3xl font-bold'>{props.data.name}👋</span></h1>
            <button onClick={() => logout()} className='bg-red-600 text-white px-5 py-2 rounded-2xl font-bold text-md'>Log Out</button>

        </div>
    )
}

export default Header
