import { motion, useInView, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useEffect, useRef } from "react";

const formatNumber = (num) => {
  return num >= 1000 ? `${Math.floor(num / 1000)}k+` : `${num}+`;
};

const CounterBox = ({ title, target }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.5 });

  // Motion value and spring effect for smooth counting
  const count = useMotionValue(0);
  const smoothCount = useSpring(count, { stiffness: 50, damping: 20 });
  const displayValue = useTransform(smoothCount, (value) => `${Math.floor(value)}`); // Ensure whole numbers

  useEffect(() => {
    if (inView) {
      count.set(target); // Start counting when in view
    }
  }, [inView, target, count]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true }}
      className="bg-[#FAFAFA] p-6 rounded-lg shadow-lg text-center w-full sm:w-64 flex flex-col items-center"
    >
      <h2 className="text-3xl lg:text-5xl font-bold mb-2">
        <motion.span>{displayValue}</motion.span>
      </h2>
      <p className="text-lg font-medium text-[#00352C] mt-auto">{title}</p>
    </motion.div>
  );
};

export default function OurImpact() {
  const stats = [
    { title: "Animals Vaccinated", target: 50000 },
    { title: "Animals Sterilized", target: 30000 },
    { title: "Field Campaigns", target: 800 },
    { title: "Active Partner Organizations", target: 10 },
  ];

  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="py-12 relative w-full px-6 sm:px-12 md:px-16 lg:px-24 mx-auto "
    >
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        className="text-[#00352C] text-2xl sm:text-4xl md:text-5xl font-bold mb-8"
      >
        Our Impact So Far
      </motion.h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {stats.map((stat, index) => (
          <CounterBox key={index} title={stat.title} target={stat.target} />
        ))}
      </div>
    </motion.section>
  );
}
