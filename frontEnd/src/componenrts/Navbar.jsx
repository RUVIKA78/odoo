import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <div className='flex mx-10 my-5 justify-between text-xl font-mono'>
            <div className='text-3xl font-bold underline text-green-500'>WorkiFy</div>
            <div className='flex gap-3'>
                <Link to='/' >Home</Link>
                <Link to='/login' >Login</Link>
                <Link to='/register'>Register</Link>
                <Link to='/subscription'>Subscription</Link>
                <Link>Profile</Link>
            </div>
        </div>
    )
}

export default Navbar