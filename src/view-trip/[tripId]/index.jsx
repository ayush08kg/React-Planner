import { db } from '@/service/firebaseConfig';
import { doc, getDoc } from 'firebase/firestore';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { toast } from 'sonner';
import InfoSection from '../components/InfoSection';
import Hotels from '../components/Hotels';

function Viewtrip() {

    const {tripId} = useParams(); //destructuring
    useEffect(() => {
      tripId && GetTripData();
    }, [tripId])
    const [trip, setTrip] = useState([])

    //used to get trip information

    const GetTripData = async()=>{
        const docRef = doc(db,'AITrips',tripId);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
            console.log("Doc:",docSnap.data());
            setTrip(docSnap.data());
        }
        else{
            console.log("No such doc");
            toast("No trip found")
        }
    }
  return (
    <div className='p-10 md:px-20 lg:px-44 xl:px-56'>
        
      {/* Information Section */}

      <InfoSection trip = {trip}/>
      
      {/* Recommended Hotels */}

      <Hotels trip={trip}/>

      {/* Daily Plan */}

      {/* Footer */}
    </div>
  )
}

export default Viewtrip
