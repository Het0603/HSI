"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import hero1 from "../../public/hero1.jpg";
import imageCut from "../../public/imageCut.svg";
import { useRouter } from "next/router";
import logo2 from "../../public/mobileAppLogoWhite.png";

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
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="text-2xl sm:text-4xl md:text-5xl lg:text-7xl font-semibold max-w-[50rem]"
          >
            <div className="flex items-center space-x-2">
              <Image
                src={logo2}
                width={80}
                height={10}
                alt="Logo"
                className="w-20 sm:w-36 h-auto md:w-38 lg:w-70 -mb-5 lg:-mb-10 -ml3 sm:-ml-4 md:-ml-6 lg:-ml-12"
              />
              <span className="sm:text-lg md:text-3xl lg:text-6xl font-semibold text-center block mt-6 md:-ml-4 lg:-ml-8">
                Humane World <br />
                <span className="block mx-auto">Apps</span>
              </span>
            </div>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
            className="mt-2 lg:mt-4 text-lg sm:text-xl md:text-2xl max-w-[38rem]"
          >
            <span className="lg:text-4xl">Empowering Animal Welfare Through Technology Driven Innovation</span>
            <br />
            <br />
            From field to clinic, our digital ecosystem drives impactful change in the lives of animals — one vaccination, one rescue, one treatment at a time.
          </motion.p>

          <button onClick={() => router.push('https://web.hsapps.org/login')}
            className="w-full sm:w-[12%] mt-6 bg-[#009CEB] px-5 sm:px-6 py-2 rounded-lg sm:rounded-xl text-white text-base sm:text-lg md:text-xl"
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
