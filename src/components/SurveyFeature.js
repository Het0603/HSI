import Image from "next/image";
import videoSection from '../../public/videoSection.jpg';
import { motion } from "framer-motion";

export default function surveyFeature({description, imageSrc}) {
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
                         <h2 className="text-xl sm:text-3xl md:text-5xl font-bold">Survey Feature</h2>
                         <div className="flex justify-center">
                              <div className="mt-10 sm:text-xl md:text-2xl max-w-[60rem]" dangerouslySetInnerHTML={{ __html: description }}></div>
                         </div>
                         <motion.div
                              initial={{ opacity: 0, scale: 0.9 }}
                              whileInView={{ opacity: 1, scale: 1 }}
                              viewport={{ once: true, amount: 0.3 }}
                              transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }} className="mt-10 flex justify-center"
                         >
                              <div className="rounded-4xl overflow-hidden relative w-auto max-h-[40rem]">
                                   <Image src={imageSrc} alt="Video Thumbnail" className="w-full h-[80%] sm:h-[70%] md:h-[70%] lg:h-[124%] object-contain" />
                              </div>
                         </motion.div>
                    </motion.div>
               </div>
          </motion.section>
     );
}