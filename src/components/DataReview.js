import { motion } from "framer-motion";
import Image from "next/image";

export default function dataReview({ imageSrc, title, description }) {
     return (
          <motion.section
               initial={{ opacity: 0 }}
               whileInView={{ opacity: 1 }}
               transition={{ duration: 1, ease: "easeOut" }}
               className="bg-[#005944] text-white py-18 px-6 md:px-16 lg:px-24"
          >
               <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
                    <motion.div
                         className="md:w-1/2 text-center md:text-left"
                         initial={{ opacity: 0, x: -50 }}
                         whileInView={{ opacity: 1, x: 0 }}
                         transition={{ duration: 0.8, ease: "easeOut" }}>
                         <h2 className="text-xl sm:text-3xl md:text-4xl text-[#5EC9FF] font-bold mt-2 max-w-[25rem]">
                              {title}
                         </h2>
                         <p className="mt-4 sm:text-xl md:text-2xl leading-relaxed max-w-[29rem]" dangerouslySetInnerHTML={{ __html: description }}>
                         </p>
                    </motion.div>

                    <motion.div
                         className="md:w-1/2"
                         initial={{ opacity: 0, x: 50 }}
                         whileInView={{ opacity: 1, x: 0 }}
                         transition={{ duration: 0.8, ease: "easeOut" }}>
                         <div className="overflow-hidden rounded-4xl relative group">
                              <div className="transition-all duration-300 transform group-hover:scale-105 ease-in-out">
                                   <Image
                                        src={imageSrc}
                                        alt="Data Review"
                                        className="rounded-4xl h-[24rem]"
                                   />
                              </div>
                         </div>
                    </motion.div>
               </div>
          </motion.section>
     );
};
