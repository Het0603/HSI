"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import hero1 from "../../public/hero1.png";
import imageCut from "../../public/imageCut.svg";
import { useRouter } from "next/router";

export default function Hero() {
  const router = useRouter();
  return (
    <section className="relative w-full">
      <div className="relative w-full h-[400px] sm:h-[500px] md:h-[600px] lg:h-[800px] overflow-hidden">
        <Image
          src={hero1}
          alt="Hero Image"
          className="absolute inset-0 w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-opacity-50 top-[20%] px-6 sm:px-10 md:px-16 lg:px-24 text-white">
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold max-w-[50rem]"
          >
            Empowering Animal Welfare Through Technology
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
            className="mt-4 text-lg sm:text-xl md:text-2xl max-w-[38rem]"
          >
            From field to clinic, our digital ecosystem drives impactful change in the lives of animals — one vaccination, one rescue, one treatment at a time.
          </motion.p>

          <button onClick={() => router.push('https://web.hsapps.org/login')}
            className="mt-6 bg-[#009CEB] px-5 sm:px-6 py-2 rounded-lg sm:rounded-xl text-white text-base sm:text-lg md:text-xl"
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
