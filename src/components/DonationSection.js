import Image from "next/image";
import donation from '../../public/donation.jpg';
import { motion, useInView, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useRouter } from "next/router";
import { useRef, useEffect } from "react";

const CounterBox = ({ title, target }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.5 });

  const count = useMotionValue(0);
  const smoothCount = useSpring(count, { stiffness: 50, damping: 20 });
  const displayValue = useTransform(smoothCount, (value) => `${Math.floor(value)}`);

  useEffect(() => {
    if (inView) {
      count.set(target);
    }
  }, [inView, target, count]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true }}
      className="bg-[#f8f8f8] p-2 sm:p-4 md:p-5 lg:p-6 rounded-lg shadow-lg text-center w-45 sm:w-40 md:w-50 lg:w-64 flex flex-col items-center"
    >
      <h2 className="text-3xl text-black lg:text-5xl font-bold mb-2">
        <motion.span>{displayValue}</motion.span>
      </h2>
      <p className="text-lg font-medium text-[#00352C] mt-auto overflow-hidden text-ellipsis whitespace-nowrap max-w-full">{title}</p>
    </motion.div>
  );
};

export default function DonationSection() {
  const router = useRouter();
  const stats = [
    { title: "Animals Vaccinated", target: 50000 },
    { title: "Animals Sterilized", target: 30000 },
    { title: "Field Campaigns", target: 800 },
    { title: "Active Partner Organizations", target: 10 },
  ];
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
        transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }} className="relative z-10 flex flex-col items-start justify-center h-full text-white px-6 md:px-16 lg:px-24 gap-4 sm:gap-5 md:gap-6 lg:gap-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }} style={{ fontFamily: "SharpGrotesk" }} className="text-2xl md:text-4xl lg:text-5xl font-bold max-w-[42rem]">
          Humane World Apps Impact So Far
        </motion.h2>
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8 lg:w-full">
          {stats.map((stat, index) => (
            <CounterBox key={index} title={stat.title} target={stat.target} />
          ))}
        </div>
      </motion.div>
    </motion.section>
  );
};