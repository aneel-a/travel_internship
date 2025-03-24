import Image from "next/image";

const ExpTypes = () => {
  return (
    <section className="mx-auto mb-[15vh] max-w-lg sm:max-w-xl md:max-w-2xl lg:max-w-4xl xl:max-w-5xl 2xl:max-w-screen-xl 3xl:max-w-screen-3xl">
      <h1 className="font-bold text-4xl text-left relative">
        Explore property types
        <span className="absolute w-[15%] h-[3px] bg-yellow-500 top-11 bottom-0 left-0"></span>
      </h1>

      {/*four Pics in a row*/}
      <div className="flex-col mt-9">
        <div className="sm:text-sm gap-4 mx-auto flex justify-between mt-4 font-serif">
          <div className="relative w-full bg-black ">
            <Image
              src="/hotels/resort1.jpeg"
              alt="Hotel 1"
              width={300}
              height={200}
              className="object-cover w-full h-full"
            />
            <p className="absolute text-1xl font-bold mt-2">Hotels</p>
          </div>

          <div className="relative w-full bg-black ">
            <Image
              src="/hotels/resort2.jpeg"
              alt="Hotel 1"
              width={300}
              height={200}
              className="object-cover w-full h-full"
            />
            <p className="absolute text-1xl font-bold mt-2">Apartments</p>
          </div>

          <div className="relative w-full bg-black">
            <Image
              src="/hotels/resort3.jpeg"
              alt="Hotel 1"
              width={300}
              height={200}
              className="object-cover w-full h-full"
            />
            <p className="absolute text-1xl font-bold mt-2">Resorts</p>
          </div>

          <div className="relative w-full bg-black">
            <Image
              src="/hotels/resort4.jpeg"
              alt="Hotel 1"
              width={300}
              height={200}
              className="object-cover w-full h-full"
            />
            <p className="absolute text-1xl font-bold mt-2">Villas</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExpTypes;
