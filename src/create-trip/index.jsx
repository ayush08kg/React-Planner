import { Input } from '@/components/ui/input';
// import { Input } from 'postcss';
import React, { useEffect, useState } from 'react'
import GooglePlacesAutocomplete from 'react-google-places-autocomplete'
import { AI_PROMPT, SelectBudgetOptions } from '@/constants/options'; 
import { SelectTravelsList } from '@/constants/options'; 
import { Button } from '@/components/ui/button';
import { toast } from 'sonner';
import { chatSession } from '@/service/AIModal';

function CreateTrip() {
    const [place, setPlace] = useState()
    const [formData, setFormData] = useState([])
    const handleInputChange = (name,value)=>{
        setFormData({
            ...formData,
            [name]:value
        })
    }
    useEffect(()=>{
        console.log(formData);
    },[formData]) // whenever value changes this hook will be executed

    const onGenerateTrip = async()=>{
        if (formData?.noOfDays>5 && !formData?.location || !formData?.budget || !formData?.traveller) {
            toast("Please Fill in all the details")
            return ;
        }
        const FINAL_PROMPT = AI_PROMPT
        .replace('{location}',formData?.location.label)
        .replace('{totalDays}',formData?.noOfDays)
        .replace('{traveller}',formData?.traveller)
        .replace('{budget}',formData?.budget)
        .replace('{Days}',formData?.noOfDays)
        console.log(FINAL_PROMPT);
        const result = await chatSession.sendMessage(FINAL_PROMPT);
        console.log("--",result?.response?.text());
    }

  return (
    <div className='sm:px-10 md:px-32 lg:px-56 xl:px-20 px-5 mt-10'>
        <h2 className='font-bold text-3xl'>Tell us your travel preferences🏕️🌴</h2>
        <p className='mt-2 text-gray-500 text-lg'>Just provide some basic information, and our trip planner will generate a customised itinerary based on your preferences.</p>
        <div className='mt-10 flex flex-col gap-10'>
            <div>
                <h2 className='text-xl my-3 font-medium'>What is your destination?</h2>
                <GooglePlacesAutocomplete
                apiKey={import.meta.env.VITE_GOOGLE_PLACE_API_KEY}
                selectProps={{
                    place,
                    onChange:(v)=>{setPlace(v);handleInputChange('location',v)}
                }}
                />
            </div>
            <div>
            <h2 className='text-xl my-3 font-medium'>How many days are you planning your trip</h2>
            <Input placeholder='Ex: 5'
            onChange={(e)=>handleInputChange('noOfDays',e.target.value)}/>
            </div>
        </div>

        <div>
        <h2 className='text-xl my-3 mt-10 font-medium'>What is your Budget?</h2>
        <div className='grid grid-cols-3 gap-5 mt-5 cursor-pointer'>
            {SelectBudgetOptions.map((item,index)=>(
                <div key={index} 
                onClick={()=>handleInputChange('budget',item.title)}
                className={`p-4 border rounded-lg hover:shadow-lg
                ${formData?.budget==item.title && 'shadow-lg border-black'}`}>
                    {/*if the data matches selected item then add border*/}
                    <h2 className='text-4xl'>{item.icon}</h2>
                    <h2 className='font-bold text-lg'>{item.title}</h2>
                    <h2 className='text-sm text-gray-500'>{item.desc}</h2>
                </div>
            ))}
        </div>
        </div>

        <div>
        <h2 className='text-xl my-3 mt-10 font-medium'>Who do you plan on travelling with on your next adventure?</h2>
        <div className='grid grid-cols-3 gap-5 mt-5 cursor-pointer'>
            {SelectTravelsList.map((item,index)=>(
                <div key={index}
                onClick={()=>handleInputChange('traveller',item.people)} 
                className={`p-4 border rounded-lg hover:shadow-lg
                    ${formData?.traveller==item.people && 'shadow-lg border-black'} 
                `}> {/*if the data matches selected item then add border*/}
                    <h2 className='text-4xl'>{item.icon}</h2>
                    <h2 className='font-bold text-lg'>{item.title}</h2>
                    <h2 className='text-sm text-gray-500'>{item.desc}</h2>
                </div>
            ))}
        </div>
        </div>
        <div className='my-10 justify-end flex'>
        <Button onClick = {onGenerateTrip}>Generate Trip</Button>
        </div>
    </div>
  )
}

export default CreateTrip
