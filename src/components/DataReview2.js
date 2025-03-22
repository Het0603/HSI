import { motion } from "framer-motion";
import Image from "next/image";

export default function dataReview2({ imageSrc, title, description, multi, imageSrc2, imageSrc3 }) {
     return (
          <motion.section
               initial={{ opacity: 0 }}
               whileInView={{ opacity: 1 }}
               transition={{ duration: 1, ease: "easeOut" }}
               className="bg-[#F8F8F8] text-white py-18 px-6 md:px-16 lg:px-24 overflow-hidden"
          >
               <div className="flex flex-col-reverse md:flex-row items-center gap-8">
                    <motion.div
                         className="md:w-1/2"
                         initial={{ opacity: 0, x: -50 }}
                         whileInView={{ opacity: 1, x: 0 }}
                         transition={{ duration: 0.8, ease: "easeOut" }}>
                         <div className="overflow-hidden rounded-4xl relative group">
                              <div className="transition-all flex duration-300 transform group-hover:scale-105 ease-in-out">
                                   {!multi ? <Image
                                        src={imageSrc}
                                        alt="Data Review"
                                        className="rounded-4xl h-[28rem] object-contain"
                                   /> : <>
                                        <Image
                                             src={imageSrc}
                                             alt="Data Review1"
                                             className="rounded-4xl h-[28rem] object-contain"
                                        />
                                        <Image
                                             src={imageSrc2}
                                             alt="Data Review2"
                                             className="rounded-4xl h-[28rem] object-contain"
                                        />
                                        <Image
                                             src={imageSrc3}
                                             alt="Data Review3"
                                             className="rounded-4xl h-[28rem] object-contain"
                                        />
                                   </>}
                              </div>
                         </div>
                    </motion.div>

                    <motion.div
                         className="md:w-1/2 md:text-left p-4"
                         initial={{ opacity: 0, x: 50 }}
                         whileInView={{ opacity: 1, x: 0 }}
                         transition={{ duration: 0.8, ease: "easeOut" }}>
                         <h2 className="text-xl sm:text-3xl md:text-4xl text-[#00352C] font-bold mt-2 ">
                              {title}
                         </h2>
                         <div className="mt-8 sm:text-xl md:text-2xl text-black " dangerouslySetInnerHTML={{ __html: description }}>
                         </div>
                    </motion.div>
               </div>
          </motion.section>
     );
};
