import Image from "next/image";
import videoSection from '../../public/videoSection.jpg';
import dataReviewImg2 from "../../public/dataReview2.jpeg";
import mobile1 from "../../public/mobile1.jpeg";
import mobile2 from "../../public/mobile2.jpeg";
import mobile3 from "../../public/mobile3.jpeg";
import { motion } from "framer-motion";

export default function surveyFeature({description}) {
     return (
          <motion.section
               initial={{ opacity: 0 }}
               whileInView={{ opacity: 1 }}
               transition={{ duration: 1, ease: "easeOut" }}
               className="bg-[#f8f8f8] h-[50rem] md:h-[45rem] lg:h-[55rem]"
          >
               <div className="relative py-16 md:px-16 lg:px-24 h-140 object-cover bg-cover bg-center" style={{ backgroundImage: `url(${videoSection.src})` }}>
                    <div className="absolute inset-0 bg-[#00352C] opacity-70"></div>

                    <motion.div
                         initial={{ opacity: 0, y: 30 }}
                         whileInView={{ opacity: 1, y: 0 }}
                         viewport={{ once: true, amount: 0.3 }}
                         transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }} className="relative text-center text-white"
                    >
                         <h2 className="text-xl sm:text-3xl md:text-5xl font-bold mt-[-15px]">Survey Feature</h2>
                         <div className="flex justify-center">
                              <div className="mt-10 sm:text-xl md:text-2xl max-w-[60rem]" dangerouslySetInnerHTML={{ __html: description }}></div>
                         </div>
                         <motion.div
                              initial={{ opacity: 0, scale: 0.9 }}
                              whileInView={{ opacity: 1, scale: 1 }}
                              viewport={{ once: true, amount: 0.3 }}
                              transition={{ duration: 0.5, delay: 0.4, ease: "easeOut" }} className="mt-10 flex justify-center"
                         >
                              <div className="overflow-hidden relative max-h-[40rem] flex gap-6">
                                   <Image src={dataReviewImg2} alt="Video Thumbnail" className="rounded-2xl hidden lg:block w-full h-[80%] sm:h-[70%] md:h-[70%] lg:h-[101%] object-contain" />
                                   <Image src={mobile1} alt="Video Thumbnail" className="rounded-2xl hidden lg:block w-full h-[80%] sm:h-[70%] md:h-[70%] lg:h-[100%] object-contain" />
                                   <Image src={mobile3} alt="Video Thumbnail" className="rounded-2xl h-[80%] w-full sm:h-[70%] md:h-[70%] lg:h-[100%] object-contain" />
                                   <Image src={mobile2} alt="Video Thumbnail" className="rounded-2xl hidden lg:block h-[80%] sm:h-[70%] md:h-[70%] lg:h-[100%] object-contain" />
                              </div>
                         </motion.div>
                    </motion.div>
               </div>
          </motion.section>
     );
}