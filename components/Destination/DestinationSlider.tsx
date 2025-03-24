"use client";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Link from "next/link";

// Function to generate a slug
const generateSlug = (title: string) => {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9\s]/g, "") // Remove non-alphanumeric characters except spaces
    .replace(/\s+/g, "-"); // Replace spaces with hyphens
};

const DestinationSlider = ({ dataList }: { dataList: any[] }) => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: { 
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="slider-container mx-auto mt-8">
      <Slider {...settings}>
        {dataList.map((item) => (
          <div key={item.id} className="relative flex justify-center p-2">
            <Link href={`/product/${generateSlug(item.title)}`}>
              <div className="h-[55vh] bg-white rounded-lg shadow-lg overflow-hidden hover:scale-105 transition-transform">
                <img
                  src={item.image}
                  alt={item.title}
                  className="object-cover w-full h-48"
                />  
                <div className="p-4">
                  <p className="text-sm text-gray-500">{item.category}</p>
                  <div className="flex justify-between items-center">
                    <h3 className="text-xl font-bold text-gray-800">{item.title}</h3>
                    <p className="text-lg font-medium text-green-600">${item.price}</p>
                  </div>
                  <div className="flex items-center mt-2">
                    <p className="text-yellow-400">★★★★★</p>
                  </div>
                  <p className="text-sm text-gray-600 mt-3">
                    {item.description.substring(0, 60)}...
                  </p>
                </div>
              </div>
            </Link>

            {/* Separate button outside the Link */}
            <button
              className="absolute top-2 right-2 text-white bg-black p-2 rounded-xl bg-opacity-30"
              onClick={(e) => {
                e.stopPropagation();  // Prevent link navigation
                // Add your button logic here (e.g., add to wishlist)
                console.log(`Added ${item.title} to wishlist!`);
              }}
            >
              🤍
            </button>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default DestinationSlider;
