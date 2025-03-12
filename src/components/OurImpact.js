import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const formatNumber = (num) => {
  if (num >= 1000) {
    return `${Math.floor(num / 1000)}k+`;
  }
  return `${num}+`;
};

const CounterBox = ({ title, target }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const end = target;
    const duration = 2000;
    const increment = end / (duration / 50);

    const counter = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(counter);
      } else {
        setCount(Math.ceil(start));
      }
    }, 50);

    return () => clearInterval(counter);
  }, [target]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true }}
      className="bg-[#FAFAFA] p-6 rounded-lg shadow-lg text-center w-full sm:w-64 flex flex-col items-center">
      <h2 className="text-3xl lg:text-5xl font-bold mb-2">{formatNumber(count)}</h2>
      <p className="text-lg font-medium text-[#005944] mt-auto overflow-hidden text-ellipsis whitespace-nowrap max-w-full">{title}</p>
    </motion.div>
  );
};

export default function OurImpact() {
  const stats = [
    { title: "Animals Vaccinated", target: 30000 },
    { title: "Animals Sterilized", target: 15000 },
    { title: "Field Campaigns", target: 500 },
    { title: "Active Partner Organizations", target: 10 },
  ];

  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="py-12 relative w-full px-6 sm:px-12 md:px-16 lg:px-24 mx-auto"
    >
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        className="text-[#005944] text-2xl sm:text-4xl md:text-5xl font-bold mb-8"
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
