import Image from 'next/image';
import imageCut2 from '../../public/imageCut2.svg';
import { useRouter } from 'next/router';
import { motion } from 'framer-motion';

export default function hero({ imageSrc, title, description, subHeader }) {
     const router = useRouter();
     return (
          <section className="relative w-full">
               <div className="relative w-full h-[400px] sm:h-[500px] md:h-[600px] lg:h-[800px] overflow-hidden">
                    <Image
                         src={imageSrc}
                         alt="Hero Image"
                         className="absolute inset-0 w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-opacity-50 top-[10%] md:top-[15%] px-6 sm:px-10 md:px-16 lg:px-24 text-white">
                         <motion.h2
                              initial={{ opacity: 0, y: 40 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ duration: 1, ease: "easeOut" }}
                              className="text-2xl sm:text-4xl md:text-5xl lg:text-7xl font-semibold max-w-[45rem]"
                         >
                              {title}
                         </motion.h2>
                         <motion.p
                              initial={{ opacity: 0, y: 40 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
                              className="mt-8 text-lg sm:text-xl md:text-2xl max-w-[38rem]"
                         >
                              <span className="hidden sm:block lg:text-4xl mb-8">{subHeader}</span>
                              {description}
                         </motion.p>
                    </div>
                    <div className="absolute -bottom-1 w-full">
                         <Image
                              src={imageCut2}
                              alt="Image cut"
                              className="w-full object-cover"
                         />
                    </div>
               </div>
          </section>
     )
}