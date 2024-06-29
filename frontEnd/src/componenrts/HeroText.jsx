import React from 'react'
import Button from './Button'
import { Link } from 'react-router-dom'

const HeroText = () => {
    return (
        <div>
      <div className='m-6 inline-block  py-20 px-10'>
          <h1 className='font-medium text-6xl   '>Welcome to   <br /><span className='text-green-500 text-7xl font-mono font-bold underline'>WorkiFy</span></h1>
          <p className='font-mono text-2xl tracking-wide pt-10 pb-10'> Plan, Schedule, Maintain To Do's ,Assign Tasks  </p>
          <Link to='/register'>  <Button name="Get Started"></Button>
          </Link>
              
            </div>
            <div>
                <img className='w-48' src="https://www.freepik.com/free-vector/top-view-modern-office-desk-with-flat-design_2857790.htm#fromView=search&page=1&position=4&uuid=ff9adebc-e973-4e93-bc53-200d6385cab4" alt="" />
            </div>
            </div>
  )
}

export default HeroText