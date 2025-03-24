"use client";

import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/navigation"; //next/navigation is used for the App Directory routing (which is the new approach for navigation in Next.js 13+ when using the App Directory).

const Hero = () => {
  const [location,setLocation] = useState("");
  const [checkin,setCheckIn] = useState("");
  const [checkout,setCheckOut] = useState("");
  const [travellers,setTravellers] = useState("");

  const router = useRouter(); //Initialize the router

  const handleSearch=()=>{
     // You can perform the search here, for example, make an API call.
    console.log("Search criteria:", {location,checkin,checkout,travellers});
    
    // Example: Redirect to a new page or filter results based on criteria
    router.push(`/search-results?location=${location}&checkIn=${checkin}&checkOut=${checkout}&travellers=${travellers}`);
  }

  return (
    <section className="relative mb-[15vh] h-[70vh] flex flex-col py-0 xs:flex-row sm:flex-row md:flex-row xl:flex-row">
      <div className="flex w-full relative">
        {/* Gradient Overlay for Dark Effect */}
        <div className="ml-10 absolute inset-0 z-[2] bg-gradient-to-l from-transparent to-black opacity-100 cus-container">
          <div className="flex flex-col items-start pt-36 h-full w-fit">
            {/* Main Heading */}
            <h1 className="text-6xl font-semibold text-white">
              Find your next stay
            </h1>

            {/* Subtext */}
            <p className="text-lg  text-white mt-4">
              Find great deals on hotels, vacation rentals, <br />
              and more!
            </p>

            {/* People who rated + Stars */}
            <div className="flex items-center mt-16 ">
              {/* Profile Images */}
              <div className="flex -space-x-3">
                <Image
                  src="/person-1.png"
                  alt="User 1"
                  width={40}
                  height={40}
                  className="w-10 h-10 rounded-full"
                />
                <Image
                  src="/person-2.png"
                  alt="User 2"
                  width={40}
                  height={40}
                  className="w-10 h-10 rounded-full"
                />
                <Image
                  src="/person-3.png"
                  alt="User 3"
                  width={40}
                  height={40}
                  className="w-10 h-10 rounded-full"
                />
                <Image
                  src="/person-4.png"
                  alt="User 4"
                  width={40}
                  height={40}
                  className="w-10 h-10 rounded-full"
                />
              </div>

              {/* Rating Stars */}
              <p className="text-yellow-400 text-2xl ml-4">★★★★★</p>
            </div>
          </div>
        </div>

        {/* Left Div with Black Background */}
        <div className="w-[40%] bg-black flex items-center"></div>

        {/* Right Div with Image Background and Gradient Overlay */}
        <div className="flex-grow bg-[url('/hotelroom.webp')] bg-cover bg-center relative">
          {/* Gradient Overlay covering 1/5th of the second div */}
          <div className="absolute top-0 left-0 w-1/4 h-full bg-gradient-to-l from-transparent to-black opacity-1000"></div>
        </div>
      </div>

      {/* BOTTOM RECTANGLE WITH MULTIPLE BOXES */}
      <div className="absolute z-[2] bottom-[-50px] left-0 right-0 bg-white py-6 px-2 gap-2 sm:px-9 flex justify-between items-center w-full max-w-lg sm:max-w-xl md:max-w-2xl lg:max-w-4xl xl:max-w-5xl 2xl:max-w-screen-xl 3xl:max-w-screen-3xl  mx-auto rounded-md shadow-lg ">

        {/* Box 1: What's your destination? */}
        <div className="flex flex-col gap-2 w-[20%] bg-gray-200 text-center py-3 border rounded-md justify-center items-center">
          <div className="flex flex-row gap-2">
            <img
              src="/triple-folded-paper.png"
              alt="Check Out"
              className="w-4 h-4"
            />
            <label
              htmlFor="date"
              className="regular-16 bg-gray-200 lg:regular-14 md:text-[10px] sm:text-[8px] max-sm:text-[8px] "
            >
              Location
            </label>
          </div>
          <input
            type="text"
            value={location}
            onChange={(e)=>setLocation(e.target.value)}
            placeholder="What's your destination?"
            className="regular-16 placeholder-black focus:placeholder-gray-50 focus:outline-none bg-gray-200 lg:regular-14 md:text-[10px] sm:text-[8px] max-sm:text-[8px] w-[70%] text-center "
          />
        </div>

        {/* Box 2: Check In */}
        <div className="flex flex-col gap-2 w-[20%] bg-gray-200 text-center py-3  rounded-md justify-center items-center">
          <div className="flex flex-row gap-2">
            <img src="/calendar.png" alt="Check In" className="w-4 h-4" />
            <label
              htmlFor="date"
              className="regular-16 bg-gray-200 lg:regular-14 md:text-[10px] sm:text-[8px] max-sm:text-[8px]  "
            >
              Check In
            </label>
          </div>
          <input
            type="date"
            value={checkin}
            onChange={(e)=>setCheckIn(e.target.value)}
            className="regular-16 bg-gray-200 focus:outline-none lg:regular-14 md:text-[10px] sm:text-[8px] max-sm:text-[8px] text-center"
          />
        </div>

        {/* Box 3: Check Out */}
        <div className="flex flex-col gap-2 w-[20%] bg-gray-200 text-center py-3  rounded-md justify-center items-center">
          <div className="flex flex-row gap-2">
            <img src="/calendar.png" alt="Check Out" className="w-4 h-4" />
            <label
              htmlFor="date"
              className="regular-16 bg-gray-200 lg:regular-14 md:text-[10px] sm:text-[8px] max-sm:text-[8px] "
            >
              Check Out
            </label>
          </div>
          <input
            type="date"
            value={checkout}
            onChange={(e)=>setCheckOut(e.target.value)}
            className="regular-16 bg-gray-200 focus:outline-none lg:regular-14 md:text-[10px] sm:text-[8px] max-sm:text-[8px] text-center"
          />
        </div>

        {/* Box 4: Travellers */}
        <div className="flex flex-col gap-2 w-[20%] bg-gray-200 text-center py-3 px-2  rounded-md justify-center items-center">
          <div className="flex flex-row gap-2">
            <img src="/people.png" alt="Travellers" className="w-4 h-4" />
            <label
              htmlFor="date"
              className="regular-16 bg-gray-200 lg:regular-14 md:text-[10px] sm:text-[8px] max-sm:text-[8px] "
            >
              Travellers
            </label>
          </div>
          <input
            type="number"
            value={travellers}
            onChange={(e)=>setTravellers(e.target.value)}
            placeholder="Number of guests"
            min="1"
            max="20"
            className="regular-16 bg-gray-200 focus:outline-none lg:regular-14 md:text-[10px] sm:text-[8px] max-sm:text-[8px] w-[60%] text-center"
          />
        </div>

        {/* Box 5: Find Available Stays */}
        <button onClick={handleSearch} className="w-[10%] text-center py-6 bg-green-900 text-white  rounded-md">
          <h3 className="regular-16 lg:regular-14 md:text-[10px] sm:text-[8px] max-sm:text-[8px]">
            Search
          </h3>
        </button>
      </div>
    </section>
  );
};

export default Hero;
