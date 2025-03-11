import Image from 'next/image';
import hero2 from '../../public/hero2.jpg';
import imageCut2 from '../../public/imageCut2.svg';

export default function hero() { 
     return (
          <>
               <section className="relative w-full">
                    <div className="relative w-full h-[400px] sm:h-[500px] md:h-[600px] lg:h-[800px] overflow-hidden">
                         <Image
                              src={hero2}
                              alt="Hero Image"
                              className="absolute inset-0 w-full h-full object-cover"
                         />
                         <div className="absolute inset-0 bg-opacity-50 top-[10%] md:top-[15%] px-6 sm:px-10 md:px-16 lg:px-24 text-white">
                              <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold max-w-[45rem]">
                                   Mass vaccination
                              </h1>
                              <p className="mt-4 sm:text-xl md:text-2xl max-w-[38rem]">
                                   Optimize mass vaccination efforts by leveraging technology
                                   with customized workflows. Organize large projects by
                                   deploying teams to smaller areas with geofences for vaccination
                                   and surveys. The Android field app streamlines data collection
                                   and increases team throughput while the web app ensures
                                   program managers meet their vaccination objectives.
                              </p>
                              <button className="mt-6 bg-[#009CEB] px-5 sm:px-6 py-2 rounded-lg sm:rounded-xl text-white text-base sm:text-lg md:text-xl">
                                   Login
                              </button>
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
          </>
     )
}