import Image from "next/image";

const Explore = () => {
  return (
    <section className="mx-auto mb-[20vh] max-w-lg sm:max-w-xl md:max-w-2xl lg:max-w-4xl xl:max-w-5xl 2xl:max-w-screen-xl 3xl:max-w-screen-3xl">
      <h1 className="font-bold text-4xl text-left relative">
        Discover
        <span className="absolute w-[15%] h-[3px] bg-yellow-500 top-11 bottom-0 left-0"></span>
      </h1>

      {/*three one big and Pics in a row*/}
      <div className="flex-col mt-9">
        <div className="gap-4 mx-auto flex justify-between mt-4 font-serif">
          <div className="relative h-[35vh] w-[50%] bg-black ">
            <Image
              src="/hotels/resort1.jpeg"
              alt="Hotel 1"
              width={300}
              height={200}
              className="object-cover w-full h-full"
            />
            <p className="absolute text-2xl font-bold mt-2">
              Hotels
            </p>
             <p className="absolute text-1xl text-gray-30 font-thin mt-10">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            </p>
            
            
          </div>

          <div className="relative w-[25%] bg-black h-[25vh]">
            <Image
              src="/hotels/resort3.jpeg"
              alt="Hotel 1"
              width={300}
              height={200}
              className="object-cover w-full h-full"
            />
            <p className="absolute text-2xl font-bold mt-2">
              Resorts
            </p>
            <p className="absolute text-1xl font-thin mt-10 text-gray-30">
              Hotels Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            </p>
          </div>

          <div className="relative w-[25%] bg-black h-[25vh]">
            <Image
              src="/hotels/resort4.jpeg"
              alt="Hotel 1"
              width={300}
              height={200}
              className="object-cover w-full h-full"
            />
            <p className="absolute text-2xl font-bold mt-2">
              Villas
            </p>
            <p className="absolute text-1xl font-thin mt-10 text-gray-30">
              Hotels Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            </p>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Explore;
