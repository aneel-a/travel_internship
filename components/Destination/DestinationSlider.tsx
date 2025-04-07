"use client";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Link from "next/link";
import Image from "next/image";

const generateSlug = (title: string) => {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9\s]/g, "")
    .replace(/\s+/g, "-");
};

const DestinationSlider = ({ dataList }: { dataList: any[] }) => {
  const settings = {
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
          <div key={item.id} className="relative flex justify-center p-2 group">
            <Link href={`/product/${generateSlug(item.name)}`} className="block">
              <div className="h-[50vh] bg-white rounded-lg shadow-lg overflow-hidden hover:scale-105 transition-transform duration-300">
                {/* Image with proper alt text and error handling */}
                <div className="relative w-full h-48">
                  {item.imageUrl?(<Image
                    src={item.imageUrl || '/default-product.jpg'}
                    alt={item.title || 'Product image'}  // Required alt text
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = '/default-product.jpg';
                    }}
                  />):(
                    <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                      <span>No Image</span>
                    </div>
                  )}
                </div>
                <div className="p-4">
                  <p className="text-sm text-gray-500">{item.category}</p>
                  <div className="flex justify-between items-center">
                    <h3 className="text-xl font-bold text-gray-800">{item.name}</h3>
                    <p className="text-lg font-medium text-green-600">${item.price}</p>
                  </div>
                  <div className="flex items-center mt-2">
                    <p className="text-yellow-400">★★★★★</p>
                  </div>
                  <p className="text-sm text-gray-600 mt-3">
                    {item.description?.substring(0, 60)}...
                  </p>
                </div>
              </div>
            </Link>

            <button
              className="absolute top-4 right-4 text-white bg-black p-2 rounded-full bg-opacity-30 opacity-0 group-hover:opacity-100 transition-opacity duration-200 z-10"
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                console.log(`Added ${item.title} to wishlist!`);
              }}
              aria-label="Add to wishlist"
            >
              <span className="text-lg">🤍</span>
            </button>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default DestinationSlider;