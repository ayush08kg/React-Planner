import { GetPlaceDetails, PHOTO_REF_URL } from '@/service/GlobalApi';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function PlacesToVisit({ trip }) {
  const [photoUrls, setPhotoUrls] = useState({}); // Store photo URLs for each place

  useEffect(() => {
    if (trip && trip.tripData?.itinerary) {
      GetPlacePhotos(trip.tripData.itinerary);
    }
  }, [trip]);

  const GetPlacePhotos = async (itinerary) => {
    const newPhotoUrls = {};

    // Loop through all the days and places
    for (const dayKey in itinerary) {
      const places = itinerary[dayKey].places;

      for (const place of places) {
        if (place.place_name && !newPhotoUrls[place.place_name]) {
          try {
            const data = {
              textQuery: place.place_name,
            };
            const resp = await GetPlaceDetails(data);
            const photoName = resp.data.places[0].photos[3]?.name;

            if (photoName) {
              const photoUrl = PHOTO_REF_URL.replace('{NAME}', photoName);
              newPhotoUrls[place.place_name] = photoUrl; // Save the photo URL for the place
            }
          } catch (error) {
            console.error(`Failed to fetch photo for ${place.place_name}`, error);
          }
        }
      }
    }

    setPhotoUrls((prev) => ({ ...prev, ...newPhotoUrls })); // Update state with new photo URLs
  };

  return (
    <div>
      <h2 className="font-semibold text-lg mt-5">Places to Visit</h2>

      <div>
        {trip.tripData?.itinerary &&
          Object.entries(trip.tripData.itinerary)
            // Sort the days in ascending order
            .sort(([dayA], [dayB]) => {
              const dayNumberA = parseInt(dayA.replace('day', ''), 10);
              const dayNumberB = parseInt(dayB.replace('day', ''), 10);
              return dayNumberA - dayNumberB;
            })
            .map(([dayKey, dayData]) => (
              <div
                key={dayKey}
                className="mb-4 shadow-md p-5 border rounded-xl mt-3 cursor-pointer transition-all"
              >
                {/* Display the day (e.g., Day 1, Day 2) */}
                <h2 className="font-medium text-lg">{dayKey.toUpperCase()}</h2>
                {/* Display the theme */}
                <p className="italic">{dayData.theme}</p>
                {/* Display the best time to visit */}
                <p className="text-sm text-gray-600">
                  Best time to visit: {dayData.best_time_to_visit}
                </p>
                {/* Display the places */}
                <ul className="list-disc ml-5 ">
                  {dayData.places.map((place, index) => (
                    <li
                      key={index}
                      className="mb-2 hover:scale-105 shadow-lg p-5 my-10 list-none transition-all"
                    >
                      <img
                        src={photoUrls[place.place_name] || '/default-image.jpg'?photoUrls[place.place_name] || '/default-image.jpg':'/placeholder.jpg'} // Use the correct photo URL
                        alt={place.place_name}
                        className="w-[120px] h-[100px] mt-2 rounded object-cover"
                      />
                      <Link
                        className="font-medium text-gray-800"
                        to={
                          'https://www.google.com/maps/search/?api=1&query=' +
                          place?.place_name
                        }
                        target="_blank"
                      >
                        <h3 className="font-semibold">📌{place.place_name}</h3>
                      </Link>
                      <p className="text-sm text-gray-600">
                        {place.place_details}
                      </p>
                      <p className="text-sm">⭐Rating: {place.rating}</p>
                      <p className="text-sm">
                        💳Ticket Pricing: {place.ticket_pricing}
                      </p>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
      </div>
    </div>
  );
}

export default PlacesToVisit;
