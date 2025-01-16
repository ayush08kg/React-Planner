import React from 'react'
import { Button } from '../button'
import { Link } from 'react-router-dom'

function Hero() {
  return (
    <div className='flex flex-col items-center mx-56 gap-9'>
        <h1 className='font-bold text-[50px] text-center mt-16'> <span className='text-[#f56551]'>Discover Your Next Adventure with AI : </span>Personalized Itineraries at Your Fingertips</h1>
        <p className='text-xl font-medium text-gray-500 text-center'>Your personal trip planner and travel curator,creating custom itineraries tailored to your interests and budget.</p>
        <Link to={'/create-trip'}><Button className='py-[30px] px-[20px] rounded-full'>Get Started, It's Free</Button></Link>
    </div>
  )
}

export default Hero