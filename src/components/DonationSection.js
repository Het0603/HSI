import Image from "next/image";
import donation from '../../public/donation.jpg';

export default function DonationSection() {
  return (
    <section className="relative w-full h-[400px] md:h-[450px] lg:h-[700px] overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src={donation}
          alt="Donation Background"
          layout="fill"
          objectFit="cover"
          className="w-full h-full"
        />
        <div className="absolute inset-0 bg-black opacity-50"></div>
      </div>

      <div className="relative z-10 flex flex-col items-start justify-center h-full text-white px-6 md:px-16 lg:px-24">
        <h1 className="text-xl md:text-4xl lg:text-5xl font-bold max-w-[42rem]">
          Your gift can do so much for animals in need.
        </h1>
        <p className="mt-3 text-base md:text-lg">
          Start saving lives by making a one-time gift today. <br />
          Or help animals all year long with a monthly contribution.
        </p>
        <button className="mt-6 bg-[#005944] px-5 sm:px-6 py-2 rounded-lg text-white text-base sm:text-lg font-semibold shadow-lg">
          Donate Today
        </button>
      </div>
    </section>
  );
};