import { motion } from "framer-motion";
import Image from "next/image";

export default function Geofencing({ imageSrc, title, description }) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="flex flex-col-reverse md:flex-row items-center justify-between py-16 bg-gray-100 gap-8 px-6 md:px-16 lg:px-24"
    >
      <motion.div
        className="md:w-1/2"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="overflow-hidden rounded-4xl relative group">
          <div className="transition-all duration-300 transform group-hover:scale-105 ease-in-out">
            <Image
              src={imageSrc}
              alt="Map with Geofencing"
              className="rounded-4xl w-full h-[24rem] object-contain"
            />
          </div>
        </div>
      </motion.div>
      <motion.div
        className="md:w-1/2 p-4"
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <h2 className="text-xl sm:text-3xl md:text-4xl font-semibold text-[#005944]">{title}</h2>
        <p className="mt-4 sm:text-lg md:text-xl" dangerouslySetInnerHTML={{ __html: description }}></p>
      </motion.div>
    </motion.section>
  );
};