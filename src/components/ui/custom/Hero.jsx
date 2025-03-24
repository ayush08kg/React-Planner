import React from 'react'
import { Button } from '../button'
import { Link } from 'react-router-dom'

function Hero() {
  return (
    <div className='flex flex-col items-center mx-56 gap-9 mt-20 rounded-3xl border hover:scale-105 transition-all bg-yellow-200 backdrop-blur-lg bg-opacity-30'>
        <h1 className='font-bold  mt-8 text-center'><span className='text-blue-400'>Plan Genie </span>Welcomes <span className='text-red-400'>You 🫵</span></h1>
        <h1 className='font-bold text-[46px] text-center mt-2 text-[#7878ca]'> <span className='text-[#302670]'>Embark on Your Next Journey with AI:<br></br></span>Customized Itineraries Designed for You</h1>
        <p className='text-xl font-medium text-[#abc045cb] text-center'>Your personal travel assistant, crafting unique itineraries suited to your preferences and budget..</p>
        <Link to={'/create-trip'}><Button className='py-[30px] px-[20px] bg-[#3636ca]  hover:bg-white hover:text-black rounded-full mb-15 mt-6'>Get Started, It's Free</Button></Link>
        <h1 className='mb-7 text-[20px] font-semibold text-center text-[#2ba3ae]'>Let's Go....🚘💨🏁
        </h1>
    </div>
  )
}

export default Hero
