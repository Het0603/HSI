import Image from 'next/image';
import hero1 from '../../public/hero1.png';
import imageCut from '../../public/imageCut.svg';

export default function hero() {
  return (
    <>
      <section className="relative w-full">
        <div className="relative w-full h-[400px] sm:h-[500px] md:h-[600px] lg:h-[800px] overflow-hidden">
          <Image
            src={hero1}
            alt="Hero Image"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-opacity-50 top-[20%] px-6 sm:px-10 md:px-16 lg:px-24 text-white">
            <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold max-w-[45rem]">
              We Are Humane World for Animals
            </h1>
            <p className="mt-4 text-lg sm:text-xl md:text-2xl max-w-[38rem]">
              We've grown from a Humane Society to a Humane World. Join us—together we can end animal cruelty.
            </p>
            <button className="mt-6 bg-[#009CEB] px-5 sm:px-6 py-2 rounded-lg sm:rounded-xl text-white text-base sm:text-lg md:text-xl">
              Login
            </button>
          </div>
          <div className="absolute -bottom-1 w-full">
            <Image
              src={imageCut}
              alt="Image cut"
              className="w-full object-cover"
            />
          </div>
        </div>
      </section>
    </>
  )
}