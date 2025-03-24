import Image from "next/image";

const Hero = () => {
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
                  className="w-10 h-10 rounded-full border-1 border-white"
                />
                <Image
                  src="/person-2.png"
                  alt="User 2"
                  width={40}
                  height={40}
                  className="w-10 h-10 rounded-full border-1 border-white"
                />
                <Image
                  src="/person-3.png"
                  alt="User 3"
                  width={40}
                  height={40}
                  className="w-10 h-10 rounded-full border-1 border-white"
                />
                <Image
                  src="/person-4.png"
                  alt="User 4"
                  width={40}
                  height={40}
                  className="w-10 h-10 rounded-full border-1 border-white"
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
      <div className="absolute z-[2] bottom-[-50px] left-0 right-0 bg-white py-6 px-1 gap-2 sm:px-9 flex justify-between items-center w-full max-w-lg sm:max-w-xl md:max-w-2xl lg:max-w-4xl xl:max-w-5xl 2xl:max-w-screen-xl 3xl:max-w-screen-3xl  mx-auto rounded-md shadow-lg ">
        {/* Box 1: What's your destination? */}
        <div className="flex gap-3 w-[28%] bg-gray-200 text-center px-2 py-4 border rounded-md items-center justify-center">
          <img
            src="/triple-folded-paper.png "
            alt="Find Stays Icon"
            className="w-4 h-4"
          />
          {/* <h3 className="regular-16 lg:regular-14 md:text-[10px] sm:text-[8px] max-sm:text-[8px] ">
            What's your destination?
          </h3> */}
          {/* <label htmlFor="text">Destination</label> */}
          <input type="text" placeholder="What's your destination?" className="regular-16 placeholder-black focus:placeholder-gray-50 focus:outline-none bg-gray-200 lg:regular-14 md:text-[10px] sm:text-[8px] max-sm:text-[8px] "/>
        </div>

        {/* Box 2: Check In */}
        <div className="flex  gap-4 w-[20%] bg-gray-200 text-center py-4 border rounded-md justify-center items-center">
          {/* <img src="/calendar.png" alt="Check In" className="w-4 h-4" /> */}
          {/* <h3 className="regular-16 lg:regular-14 md:text-[10px] sm:text-[8px] max-sm:text-[8px] ">Check In</h3> */}
          <label htmlFor="date" className="text-sm">Check In</label>
          <input type="date" placeholder="Check In" className="regular-16 bg-gray-200 lg:regular-14 md:text-[10px] sm:text-[8px] max-sm:text-[8px] "/>
        </div>  

        {/* Box 3: Check Out */}
        <button className="flex gap-3 w-[18%] bg-gray-200 text-center py-4 border rounded-md justify-center items-center">
          <img src="/calendar.png" alt="Check Out" className="w-4 h-4" />
          {/* <h3 className="regular-16 lg:regular-14 md:text-[10px] sm:text-[8px] max-sm:text-[8px] ">
            Check Out
          </h3> */}
          <input type="date" placeholder="Check Out" className="regular-16 lg:regular-14 md:text-[10px] sm:text-[8px] max-sm:text-[8px] "/>
        </button>

        {/* Box 4: Travellers */}
        <button className="flex gap-2 w-[15%] bg-gray-200 text-center py-4 border  rounded-md justify-center items-center">
          <img src="/people.png" alt="Travellers" className="w-4 h-4" />
          <h3 className="regular-16 lg:regular-14 md:text-[10px] sm:text-[8px] max-sm:text-[8px]">
            Travellers
          </h3>
          <input type="number" placeholder="Check In" className="regular-16 lg:regular-14 md:text-[10px] sm:text-[8px] max-sm:text-[8px] "/>

        </button>

        {/* Box 5: Find Available Stays */}
        <button  className="w-[20%] text-center py-4 border bg-green-900 text-white  rounded-md">
          <h3 className="regular-16 lg:regular-14 md:text-[10px] sm:text-[8px] max-sm:text-[8px]">
            Find Available Stays
          </h3>
        </button>
      </div>
    </section>
  );
};

export default Hero;




//searchresults/page code before using gpt wala fakestoreapi integration
"use client";
// app/search-results/page.tsx

import { useSearchParams } from 'next/navigation';

const SearchResults = () => {
  const searchParams = useSearchParams();
  
  const location = searchParams.get('location');
  const checkIn = searchParams.get('checkIn');
  const checkOut = searchParams.get('checkOut');
  const travellers = searchParams.get('travellers');
  
  return (
    <div>
      <h1>Search Results</h1>
      <p>Location: {location}</p>
      <p>Check-in: {checkIn}</p>
      <p>Check-out: {checkOut}</p>
      <p>Travellers: {travellers}</p>
      {/* You can now perform API calls or other logic to filter and display search results */}
    </div>
  );
};

export default SearchResults;
