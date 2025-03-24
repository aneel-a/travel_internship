import Image from "next/image";

const Trending = () => {
  return (
    <section className="max-w-lg mx-auto mb-[15vh] sm:max-w-xl md:max-w-2xl lg:max-w-4xl xl:max-w-5xl 2xl:max-w-screen-xl 3xl:max-w-screen-3xl">
      <h1 className="font-bold text-4xl text-left relative">
        Trending destinations
        <span className="absolute w-[15%] h-[3px] bg-yellow-500 top-11 bottom-0 left-0"></span>
      </h1>

      <div className="flex max-sm:text-xs mt-6 text-lg items-center justify-between">
        <h2 className="">Top picks for travellers from Nepal</h2>
        <h2 className="hover:underline">View all experiences</h2>
      </div>

      {/*Pics wala div*/}
      <div className="flex-col ">
        {/*first row of pics*/}
        <div className="gap-4 mx-auto flex justify-between mt-9 font-serif">
          <div className="relative w-full bg-black h-[35vh]">
            <Image
              src="/location/thailand.png"
              alt="Hotel 1"
              width={300}
              height={200}
              className="object-cover w-full h-full"
            />
            <p className="absolute left-4 top-2 max-sm:text-2xl text-white text-4xl text-shadow">Thailand</p>
          </div>
          <div className="relative w-full bg-black h-[35vh]">
            <Image
              src="/location/japan.png"
              alt="Hotel 1"
              width={300}
              height={200}
              className="object-cover w-full h-full"
            />
            <p className="absolute left-4 top-2 max-sm:text-2xl text-white text-4xl text-shadow">Japan</p>

          </div>
        </div>
        {/*second row of pics*/}
        <div className=" gap-4 mx-auto flex justify-between mt-4 font-serif">
          <div className="relative w-full bg-black ">
            <Image
              src="/location/pokhra.webp"
              alt="Hotel 1"
              width={300}
              height={200}
              className="object-cover w-full h-full"
            />
            <p className="absolute left-4 top-2 max-sm:text-2xl text-white text-4xl text-shadow">Pokhara</p>
          </div>
          <div className="relative w-full bg-black">
            <Image
              src="/location/newdelhi.jpg"
              alt="Hotel 1"
              width={300}
              height={200}
              className="object-cover w-full h-full"
            />
            <p className="absolute left-4 top-2 max-sm:text-2xl text-white text-4xl text-shadow">New Delhi</p>
          </div>
          <div className="relative w-full bg-black">
            <Image
              src="/location/srilanka.jpg"
              alt="Hotel 1"
              width={300}
              height={200}
              className="object-cover w-full h-full"
            />
            <p className="absolute left-4 top-2 max-sm:text-2xl text-white text-4xl text-shadow">SriLanka</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Trending;
