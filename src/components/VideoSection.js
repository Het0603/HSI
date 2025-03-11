import Image from "next/image";
import videoSection from '../../public/videoSection.jpg';
import videoImg from '../../public/videoImg.jpg';
import { motion } from "framer-motion";

export default function VideoSection() {
     return (
          <motion.section
               initial={{ opacity: 0, y: 50 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true, amount: 0.3 }}
               transition={{ duration: 0.8, ease: "easeOut" }} className="bg-white h-[35rem] sm:h-[45rem] md:h-[55rem] lg:h-[64rem]"
          >
               <div className="relative py-12 px-6 sm:px-12 md:px-16 lg:px-24 h-110 md:h-160 object-cover bg-cover bg-center" style={{ backgroundImage: `url(${videoSection.src})` }}>
                    <div className="absolute inset-0 bg-[#009CEB] opacity-70"></div>

                    <motion.div
                         initial={{ opacity: 0, y: 30 }}
                         whileInView={{ opacity: 1, y: 0 }}
                         viewport={{ once: true, amount: 0.3 }}
                         transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }} className="relative text-center text-white top-10">
                         <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold">Creating a humane society</h2>
                         <p className="mt-7 text-lg md:text-2xl">Over 1 million dogs and cats vaccinated and over 150,000 sterilized since 2013.</p>

                         <motion.div
                              initial={{ opacity: 0, scale: 0.9 }}
                              whileInView={{ opacity: 1, scale: 1 }}
                              viewport={{ once: true, amount: 0.3 }}
                              transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }} className="mt-10 flex justify-center">
                              <div className="bg-black rounded-2xl shadow-lg w-full max-w-sm sm:max-w-lg md:max-w-4xl overflow-hidden relative">
                                   <div className="relative w-full flex items-center justify-center bg-white">
                                        <Image src={videoImg} alt="Video Thumbnail" className="w-full h-full object-contain" />

                                        <motion.button
                                             initial={{ opacity: 0, scale: 0.5 }}
                                             whileInView={{ opacity: 1, scale: 1 }}
                                             viewport={{ once: true, amount: 0.3 }}
                                             transition={{ duration: 0.6, delay: 0.6, ease: "easeOut" }} className="absolute bg-[#005944] p-3 rounded-full flex justify-center items-center shadow-lg hover:bg-[#004d3a] transition duration-200 w-20 h-20">
                                             <svg width="40" height="40" viewBox="0 0 53 55" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                  <path d="M48.5635 20.221C49.9034 20.9234 51.0241 21.9718 51.8056 23.2541C52.5871 24.5364 53 26.0041 53 27.5C53 28.9959 52.5871 30.4637 51.8056 31.7459C51.0241 33.0282 49.9034 34.0767 48.5635 34.7791L12.8236 53.9377C7.06876 57.0259 0 53.011 0 46.6615V8.34135C0 1.98904 7.06876 -2.02309 12.8236 1.05956L48.5635 20.221Z" fill="white" />
                                             </svg>
                                        </motion.button>
                                   </div>

                                   <motion.div
                                        initial={{ opacity: 0, width: "0%" }}
                                        whileInView={{ opacity: 1, width: "100%" }}
                                        viewport={{ once: true, amount: 0.3 }}
                                        transition={{ duration: 1.2, delay: 0.8, ease: "easeOut" }} className="h-3 bg-black flex items-center absolute bottom-4 left-0 right-0">
                                        <div className="w-full h-1 bg-blue-700 relative flex items-center">
                                             <div className="absolute left-1/4 h-full bg-white w-full"></div>
                                             <div className="absolute left-1/4 w-3 h-3 bg-white rounded-full"></div>
                                        </div>
                                   </motion.div>
                              </div>
                         </motion.div>
                    </motion.div>
               </div>
          </motion.section>
     );
}