import { motion } from "framer-motion";
import Image from "next/image";

export default function fieldData({ imageSrc, title, description }) {
     return (
          <motion.section
               initial={{ opacity: 0 }}
               whileInView={{ opacity: 1 }}
               transition={{ duration: 1, ease: "easeOut" }}
               className="bg-[#F8F8F8] text-white py-24 px-6 md:px-16 lg:px-24"
          >
               <div className="flex flex-col-reverse md:flex-row items-center gap-8 overflow-hidden">
                    <motion.div
                         className="md:w-1/2"
                         initial={{ opacity: 0, scale: 0.8 }}
                         whileInView={{ opacity: 1, scale: 1 }}
                         transition={{ duration: 0.8, ease: "easeOut" }}
                    >
                         <div className="overflow-hidden rounded-4xl relative group">
                              <div className="transition-all duration-300 transform group-hover:scale-105 ease-in-out">
                                   <Image
                                        src={imageSrc}
                                        alt="Field Data"
                                        className="rounded-4xl w-full h-[24rem]"
                                   />
                              </div>
                         </div>
                    </motion.div>

                    <motion.div
                         className="md:w-1/2 md:text-left p-4"
                         initial={{ opacity: 0, x: -50 }}
                         whileInView={{ opacity: 1, x: 0 }}
                         transition={{ duration: 0.8, ease: "easeOut" }}
                    >
                         <h2 className="text-xl sm:text-3xl md:text-4xl text-[#00352C] font-bold mt-2 max-w-[40rem]">
                              {title}
                         </h2>
                         <div className="mt-4 sm:text-xl md:text-2xl text-black max-w-[40rem]" dangerouslySetInnerHTML={{ __html: description }}>
                         </div>
                    </motion.div>
               </div>
          </motion.section>
     );
};
