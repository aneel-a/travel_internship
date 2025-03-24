import Image from "next/image";

const Explore = () => {
  return (
    <section className=" mx-auto mb-[20vh] max-w-lg sm:max-w-xl md:max-w-2xl lg:max-w-4xl xl:max-w-5xl 2xl:max-w-screen-xl 3xl:max-w-screen-3xl">
      <h1 className="font-bold text-4xl text-left relative">
        Explore properties in Nepal
        <span className="absolute w-[15%] h-[3px] bg-yellow-500 top-11 bottom-0 left-0"></span>
      </h1>

      {/*six Pics in a row*/}
      <div className="flex-col mt-9">
        <div className="max-sm:text-xs gap-4 mx-auto flex justify-between mt-4 font-serif">
          <div className="relative w-full bg-black ">
            <Image
              src="/hotels/resort1.jpeg"
              alt="Hotel 1"
              width={300}
              height={200}
              className="object-cover w-full h-full"
            />
            <p className="absolute text-1xl font-bold mt-2">
              Bhaktapur
            </p>
            <p className="absolute text-1xl font-light mt-8">
              982 properties
            </p>
          </div>

          <div className="relative w-full bg-black ">
            <Image
              src="/hotels/resort2.jpeg"
              alt="Hotel 1"
              width={300}
              height={200}
              className="object-cover w-full h-full"
            />
            <p className="absolute text-1xl font-bold mt-2">
              Dhulikhel
            </p>
            <p className="absolute text-1xl font-light mt-8">
              604 properties
            </p>
          </div>

          <div className="relative w-full bg-black">
            <Image
              src="/hotels/resort3.jpeg"
              alt="Hotel 1"
              width={300}
              height={200}
              className="object-cover w-full h-full"
            />
            <p className="absolute text-1xl font-bold mt-2">
              Sauraha
            </p>
            <p className="absolute text-1xl font-light mt-8">
              48 properties
            </p>
          </div>

          <div className="relative w-full bg-black">
            <Image
              src="/hotels/resort4.jpeg"
              alt="Hotel 1"
              width={300}
              height={200}
              className="object-cover w-full h-full"
            />
            <p className="absolute text-1xl font-bold mt-2">
              Pokhara
            </p>
            <p className="absolute text-1xl font-light mt-8">
              102 properties
            </p>
          </div>

          <div className="relative w-full bg-black">
            <Image
              src="/hotels/resort4.jpeg"
              alt="Hotel 1"
              width={300}
              height={200}
              className="object-cover w-full h-full"
            />
            <p className="absolute text-1xl font-bold mt-2">
              Kathmandu
            </p>
            <p className="absolute text-1xl font-light mt-8">
              44 properties
            </p>
          </div>

          <div className="relative w-full bg-black">
            <Image
              src="/hotels/resort4.jpeg"
              alt="Hotel 1"
              width={300}
              height={200}
              className="object-cover w-full h-full"
            />
            <p className="absolute text-1xl font-bold mt-2">
              Nagarkot
            </p>
            <p className="absolute text-1xl font-light mt-8">
              115 properties
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Explore;
