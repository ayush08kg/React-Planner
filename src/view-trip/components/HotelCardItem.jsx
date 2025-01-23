import { GetPlaceDetails, PHOTO_REF_URL } from "@/service/GlobalApi";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function HotelCardItem({ hotel }) {
    const [photoUrl, setPhotoUrl] = useState();
    
      useEffect(()=>{
        hotel&&GetPlacePhoto();
      },[hotel])
    
      const GetPlacePhoto=async()=>{
        const data = {
          textQuery:hotel?.hotel_name
        }
        const result = await GetPlaceDetails(data).then(resp=>{
          console.log(resp.data.places[0].photos[3].name)
          const PhotoUrl = PHOTO_REF_URL.replace('{NAME}',resp.data.places[0].photos[3].name);
          setPhotoUrl(PhotoUrl);
        })
      }
    
  return (
    <div className="hover:scale-105 transition-all cursor-pointer mt-3 shadow-md rounded-xl p-2">
      <img src={photoUrl} alt="" className='rounded-xl h-[180px] w-full object-cover' />
      <div className="my-2 flex flex-col gap-2">
        <Link
          className="font-medium text-gray-800"
          to={
            "https://www.google.com/maps/search/?api=1&query=" +
            hotel?.hotel_name +
            "," +
            hotel?.hotel_address
          }
          target="_blank"
        >
          {/* target blank talks about opening a new page */}
          <h2 className="font-medium ">{hotel?.hotel_name}</h2>
        </Link>
        <h2 className="text-xs text-gray-500 ">📍{hotel?.hotel_address}</h2>
        <h2 className="text-sm">💵{hotel?.price}</h2>
        <h2 className="text-sm">⭐{hotel?.rating} stars</h2>
      </div>
    </div>
  );
}

export default HotelCardItem;
