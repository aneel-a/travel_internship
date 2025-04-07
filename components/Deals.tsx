"use client";
import DestinationSlider from "@/components/Destination/DestinationSlider";
import { useEffect, useState } from "react";

type Property = {
  id: number;
  image: string;
  location: string;
  name: string;
  price: number;
  description: string;
};

const Deals = () => {
  const [dataList, setDataList] = useState<Property[] | []>([]);

  useEffect(() => {
    const storedProducts = localStorage.getItem("products");
    if (storedProducts) {
      setDataList(JSON.parse(storedProducts));
    }
  }, []);

  return (
    <section className="my-24 mb-[15vh] mx-auto max-w-lg sm:max-w-xl md:max-w-2xl lg:max-w-4xl xl:max-w-5xl 2xl:max-w-screen-xl 3xl:max-w-screen-3xl ">
      {/* Heading and Subheading */}
      <div className="mx-auto">
        <h2 className="text-4xl font-bold text-left relative">
          Deals for the weekend
          <span className="absolute top-11 bottom-0 left-0 w-[15%] h-[3px] bg-yellow-500"></span>
        </h2>
        <div className="flex justify-between items-center mt-6">
          <p className="text-black-500">
            Save on stays for 7 February - 9 February
          </p>
          <button className="text-black-500 hover:underline">
            View all stays
          </button>
        </div>
      </div>

      {/* DestinationSlider Component with dataList */}
      <DestinationSlider dataList={dataList} />
    </section>
  );
};

export default Deals;
