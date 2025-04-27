import React from 'react'
import { Button } from '../button'
import { Link } from 'react-router-dom'

function Hero() {
  return (
    <div className='flex flex-col items-center mx-20 gap-8 mt-20 p-12 rounded-3xl border hover:scale-[1.02] transition-all bg-gradient-to-r from-[#d0e8df] to-[#e6ecf1] shadow-xl'>
      
      <h1 className='font-extrabold text-4xl md:text-5xl text-center leading-tight text-gray-800'>
        Welcome to <span className='text-blue-600'>Plan Genie</span>
      </h1>

      <h2 className='font-semibold text-2xl md:text-3xl text-center text-gray-600'>
        Personalized Itineraries Crafted by AI
      </h2>

      <p className='text-lg text-gray-500 text-center max-w-2xl'>
        Your travel companion for planning unforgettable journeys — tailored perfectly to your interests, time, and budget.
      </p>

      <Link to='/create-trip'>
        <Button className='py-4 px-8 bg-blue-600 hover:bg-blue-700 text-white rounded-full mt-6 text-lg font-semibold transition'>
          Start Your Adventure
        </Button>
      </Link>

      <p className='text-base font-medium text-gray-500 mt-4'>
        Ready to explore? Let’s get moving 🚀
      </p>
    </div>
  )
}

export default Hero
