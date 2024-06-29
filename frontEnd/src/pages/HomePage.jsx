import React from 'react'
import Navbar from '../componenrts/Navbar'
import HeroText from '../componenrts/HeroText'

const HomePage = () => {
  return (
      <div className='min-h-screen min-w-full flex relative  flex-col'>
      <Navbar  />
      <HeroText/>
    </div>
  )
}

export default HomePage