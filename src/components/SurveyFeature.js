import Image from "next/image";
import videoSection from '../../public/videoSection.jpg';
import mobile from '../../public/mobile.svg';
import { motion } from "framer-motion";

export default function surveyFeature() {
     return (
          <motion.section
               initial={{ opacity: 0 }}
               whileInView={{ opacity: 1 }}
               transition={{ duration: 1, ease: "easeOut" }}
               className="bg-white h-[50rem] md:h-[55rem] lg:h-[64rem]"
          >
               <div className="relative py-16 md:px-16 lg:px-24 h-160 object-cover bg-cover bg-center" style={{ backgroundImage: `url(${videoSection.src})` }}>
                    <div className="absolute inset-0 bg-[#00352C] opacity-70"></div>

                    <motion.div
                         initial={{ opacity: 0, y: 30 }}
                         whileInView={{ opacity: 1, y: 0 }}
                         viewport={{ once: true, amount: 0.3 }}
                         transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }} className="relative text-center text-white top-10"
                    >
                         <h2 className="text-xl sm:text-3xl md:text-5xl font-bold">Survey Feature</h2>
                         <div className="flex justify-center">
                              <p className="mt-7 sm:text-xl md:text-2xl max-w-[60rem]">The survey feature helps organizations to reach their vaccination targets and facilitates recordkeeping. Web app users can track vaccination (“marked”) status of free roaming animals as field teams collect data using the survey feature on MV mobile app</p>
                         </div>
                         <motion.div
                              initial={{ opacity: 0, scale: 0.9 }}
                              whileInView={{ opacity: 1, scale: 1 }}
                              viewport={{ once: true, amount: 0.3 }}
                              transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }} className="mt-10 flex justify-center"
                         >
                              <div className=" rounded-2xl overflow-hidden relative">
                                   <Image src={mobile} alt="Video Thumbnail" className="w-full h-[80%] sm:h-[70%] md:h-[70%] lg:h-full object-contain" />
                              </div>
                         </motion.div>
                    </motion.div>
               </div>
          </motion.section>
     );
}