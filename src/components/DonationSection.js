import Image from "next/image";
import donation from '../../public/donation.jpg';
import { motion } from "framer-motion";
import { useRouter } from "next/router";

export default function DonationSection() {
  const router = useRouter();
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.8, ease: "easeOut" }} className="relative w-full h-[400px] md:h-[450px] lg:h-[700px] overflow-hidden">
      <motion.div
        initial={{ scale: 1.1 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 1, ease: "easeOut" }} className="absolute inset-0">
        <Image
          src={donation}
          alt="Donation Background"
          layout="fill"
          objectFit="cover"
          className="w-full h-full"
        />
        <div className="absolute inset-0 bg-black opacity-50"></div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }} className="relative z-10 flex flex-col items-start justify-center h-full text-white px-6 md:px-16 lg:px-24">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }} className="text-xl md:text-4xl lg:text-5xl font-bold max-w-[42rem]">
          Your gift can do so much for animals in need.
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }} className="mt-3 text-base md:text-lg">
          Start saving lives by making a one-time gift today. <br />
          Or help animals all year long with a monthly contribution.
        </motion.p>
        <motion.button
          onClick={() => router.push('/')}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }} className="mt-6 bg-[#005944] px-5 sm:px-6 py-2 rounded-lg text-white text-base sm:text-lg font-semibold shadow-lg">
          Donate Today
        </motion.button>
      </motion.div>
    </motion.section>
  );
};