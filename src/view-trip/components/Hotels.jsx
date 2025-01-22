import React from 'react'
import { Link } from 'react-router-dom'

function Hotels({trip}) {
  return (
    <div>
      <h2 className='font-semibold text-xl mt-5'>Hotel Recommendation</h2>

      <div className='grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-5'>
        {trip?.tripData?.hotel_options?.map((hotel,index)=>(
            <div className='hover:scale-105 transition-all cursor-pointer mt-3 shadow-md rounded-xl p-2'>
                <img src="/placeholder.jpg" alt="" className='rounded-lg' />
                <div className='my-2 flex flex-col gap-2'>
            <Link className='font-medium text-gray-800'to = {'https://www.google.com/maps/search/?api=1&query='+hotel?.hotel_name+","+hotel?.hotel_address} target='_blank'> 
            {/* target blank talks about opening a new page */}
                    <h2 className='font-medium '>{hotel?.hotel_name}</h2></Link>
                    <h2 className='text-xs text-gray-500 '>📍{hotel?.hotel_address}</h2>
                    <h2 className='text-sm'>💵{hotel?.price}</h2>
                    <h2 className='text-sm'>⭐{hotel?.rating} stars</h2>
                </div>
            </div>
    
        ))}
      </div>

    </div>
  )
}

export default Hotels
