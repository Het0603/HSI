"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import hero1 from "../../public/hero1.jpg";
import imageCut from "../../public/imageCut.svg";
import { useRouter } from "next/router";

export default function Hero() {
  const router = useRouter();
  return (
    <section className="relative w-full">
      <div className="relative w-full h-[450px] sm:h-[500px] md:h-[600px] lg:h-[800px] overflow-hidden">
        <Image
          src={hero1}
          alt="Hero Image"
          className="absolute inset-0 w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-opacity-50 sm:top-[5%] md:top-[7%] lg:top-[10%] px-6 sm:px-10 md:px-16 lg:px-24 text-white">
          <motion.p
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
            className="mt-12 lg:mt-4 text-lg sm:text-xl md:text-2xl max-w-[38rem]"
          >
            <span className="text-2xl lg:text-4xl">Empowering animal welfare through technology-driven innovation.</span>
            <br />
            <br />
            From field to clinic, our digital ecosystem drives impactful change in the lives of animals — one vaccination, one rescue, one treatment at a time.
          </motion.p>

          <button onClick={() => router.push('https://hsapps-rebranding.pages.dev/')} style={{ fontFamily: "Noto Sans" }}
            className="w-full sm:w-[12%] mt-6 bg-[#009CEB] px-5 sm:px-6 py-2 rounded-lg sm:rounded-xl font-medium text-white hover:text-[#009CEB] text-base sm:text-lg md:text-xl transition hover:bg-white border-[#009CEB] border transform duration-300 ease-in-out"
          >
            Login
          </button>
        </div>

        <div className="absolute -bottom-1 w-full">
          <Image src={imageCut} alt="Image cut" className="w-full object-cover" />
        </div>
      </div>
    </section>
  );
}
