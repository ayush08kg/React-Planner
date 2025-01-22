import { Button } from "@/components/ui/button";
import React from "react";
import { FaShare } from "react-icons/fa";

function InfoSection({ trip }) {
  return (
    <div>
      <img
        src="/placeholder.jpg"
        alt=""
        className="rounded-xl h-[340px] w-full object-cover"
      />
      <div className="flex justify-between items-center">
        <div className="my-5 flex flex-col gap-2">
          <h2 className="font-semibold text-xl">
            {trip?.userSelection?.location?.label}
          </h2>
          <div className="flex gap-5">
            <h2 className="p-1 px-3 bg-gray-200 rounded-full text-gray-500 ">
              📅{trip?.userSelection?.noOfDays} Days
            </h2>
            <h2 className="p-1 px-3 bg-gray-200 rounded-full text-gray-500 ">
              💰{trip?.userSelection?.budget} Budget
            </h2>
            <h2 className="p-1 px-3 bg-gray-200 rounded-full text-gray-500 ">
              🧑🏻‍🦱No. of Traveller : {trip?.userSelection?.traveller}
            </h2>
          </div>
        </div>
        <Button><FaShare /></Button>
      </div>
    </div>
  );
}

export default InfoSection;
