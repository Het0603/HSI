import videoSection from '../../public/videoSection.jpg';
import { motion } from "framer-motion";

export default function VideoSection() {
     const videoUrl = "https://www.youtube.com/embed/D2RoEze3gPw?si=Zh10f5n0JCOd22SQ";
     return (
          <motion.section
               initial={{ opacity: 0, y: 50 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true, amount: 0.3 }}
               transition={{ duration: 0.8, ease: "easeOut" }} className="bg-[#f8f8f8] h-[30rem] sm:h-[33rem] md:h-[45rem] lg:h-[50rem]"
          >
               <div className="relative py-12 px-6 sm:px-12 md:px-16 lg:px-24 h-110 md:h-160 object-cover bg-cover bg-center bg-[#F3EFEA]">

                    <motion.div
                         initial={{ opacity: 0, y: 30 }}
                         whileInView={{ opacity: 1, y: 0 }}
                         viewport={{ once: true, amount: 0.3 }}
                         transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }} className="relative text-center top-10">
                         <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold text-[#00352C]">Creating a humane world</h2>
                         <p className="mt-7 text-lg md:text-2xl">Over 1 million dogs and cats vaccinated and over 150,000 sterilized since 2013.</p>

                         <motion.div
                              initial={{ opacity: 0, scale: 0.9 }}
                              whileInView={{ opacity: 1, scale: 1 }}
                              viewport={{ once: true, amount: 0.3 }}
                              transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }} className="mt-10 flex justify-center">
                              <div className="bg-black rounded-2xl shadow-lg w-full max-w-sm sm:max-w-lg md:max-w-4xl overflow-hidden relative">
                                   <div className="relative w-full flex items-center justify-center">
                                        <iframe
                                             className="w-full h-[25vh] sm:h-[40vh] md:h-[55vh] lg:h-[70vh] object-cover"
                                             src={videoUrl}
                                             title="YouTube video player"
                                             frameBorder="0"
                                             allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                             allowFullScreen
                                        ></iframe>
                                   </div>
                              </div>
                         </motion.div>
                    </motion.div>
               </div>
          </motion.section>
     );
}