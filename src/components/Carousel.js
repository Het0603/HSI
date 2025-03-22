import React, { useState } from "react";
import Image from "next/image";
import slider1 from "../../public/slider1.png";
import slider2 from "../../public/slider2.png";
import slider3 from "../../public/slider3.png";
import slider4 from "../../public/slider4.png";
import AppPlateform from '../../public/AppPlateform.jpeg';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { motion } from "framer-motion";
import { useRouter } from "next/router";

const applications = [
     {
          title: "Mass Vaccination",
          description:
               `The Mass Vaccination app streamlines administering large number of vaccinations in the field to ensure resources are optimally deployed and the maximum number of animals impacted.<br><br>
               <strong>Key Features:</strong><br>
    - Mobile (Android) application for field work/data collection<br>
    - Web application for administration: project setup, monitoring and data analysis<br>
    - Geofenced areas to separate teams into distinct work areas for maximized efficiency<br>
    - Survey feature for evaluating vaccination coverage<br>
    - Realtime dashboard<br>
    - Project reports<br>
    - Data viewing with CSV export`,
          imgSrc: slider2,
          link: "/mass-vaccination",
     },
     {
          title: "Population Management",
          description:
               `The Population Management app streamlines administering large number of sterilizations.                                  <br><br>
               <strong>Key Features:</strong><br>
    - Mobile (Android) application for field work/data collection<br>
    - Web application for administration: project setup, monitoring and data analysis<br>
    - Release Lock feature (Mobile App) - animals are geotagged on capture and field teams are required to release sterilized animals within 50M of capture.<br>
     - Heath record database for sterilization clinic management<br>
    - Workflow optimized starting from capture, through the clinic process from initial check, to sterilization, to post op evaluation to release.<br>
    - Geofenced areas to separate teams into distinct work areas for maximized efficiency`,
          imgSrc: slider3,
          link: "/population-management",
     },
     {
          title: "Health Clinic",
          description:
               `The field app (Android only) has application specific features (PM or MV) which optimize the field users' data collection.<br><br>
               <strong>Key Features:</strong><br>
    - Easy to use<br>
    - Warns users if outside their assigned geofence<br>
    - Offline/sync mode for when offline or poor/spotty internet.<br>
    - Heath record database for sterilization clinic management<br>
    - Release Lock feature (PM Only) - animals are geotagged on capture and field teams are required to release sterilized animals within 50M of capture.`,
          imgSrc: slider4,
          link: "/health-clinic",
     },
     {
          title: "Mobile App",
          description:
               `The field app (Android only) has application specific features (PM or MV) which optimize the field users' data collection.<br><br>
               <strong>Key Features:</strong><br>
    - Easy to use<br>
    - Warns users if outside their assigned geofence<br>
    - Offline/sync mode for when offline or poor/spotty internet.<br>
    - Heath record database for sterilization clinic management<br>
    - Release Lock feature (PM Only) - animals are geotagged on capture and field teams are required to release sterilized animals within 50M of capture.`,
          imgSrc: slider4,
          link: "/",
     },
     {
          title: "App Platform",
          description:
               `Humane World Apps is an application platform similar to Google's suite of office apps (Docs, Sheets, Slides) enabling sharing of teams/assets across all projects.<br><br>
                Population Management and Mass Vaccination are the first two apps on the platform and are available free of use to qualified organizations.<br><br>    
               <strong>Key Features:</strong><br>
    - Single login across all apps<br>
    - Essentially unlimited number of projects<br>
    - Shared team/asset setup can be shared across all projects<br>
    - Project sharing with Viewers or Editors for team management<br>
    - Accompanying mobile (Android) application for field work/data collection: GPS tracking, barcode scanning and image capture with off-line mode to handle poor/intermittent connectivity.`,
          imgSrc: AppPlateform,
          link: "/",
     },
];

const textVariants = {
     hidden: { opacity: 0, y: 20 },
     visible: (i = 1) => ({
          opacity: 1,
          y: 0,
          transition: { delay: 0.2 * i, duration: 0.6, ease: "easeOut" },
     }),
};

export default function Carousel() {
     const [animationKey, setAnimationKey] = useState(0);
     const [selectedApp, setSelectedApp] = useState(null);
     const router = useRouter();

     const settings = {
          dots: false,
          infinite: true,
          speed: 500,
          slidesToShow: 3,
          slidesToScroll: 1,
          arrows: true,
          nextArrow: <NextArrow />,
          prevArrow: <PrevArrow />,
          beforeChange: () => setAnimationKey((prev) => prev + 1),
          responsive: [
               { breakpoint: 1024, settings: { slidesToShow: 3, slidesToScroll: 1 } },
               { breakpoint: 768, settings: { slidesToShow: 2, slidesToScroll: 1 } },
               { breakpoint: 480, settings: { slidesToShow: 1, slidesToScroll: 1 } },
          ],
     };

     return (
          <motion.section
               initial={{ opacity: 0, y: 50 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true, amount: 0.3 }}
               transition={{ duration: 0.8, ease: "easeOut" }}
               className="relative w-full px-4 sm:px-12 md:px-16 lg:px-24 mx-auto bg-[#f8f8f8]"
          >
               <motion.h2
                    variants={textVariants}
                    initial="hidden"
                    animate="visible"
                    className="text-[#00352C] text-3xl sm:text-4xl md:text-5xl font-bold p-3 mb-2"
                    style={{ fontFamily: "SharpGrotesk" }}
               >
                    Applications
               </motion.h2>
               <Slider {...settings}>
                    {applications.map((app, index) => (
                         <div key={index} className="p-4">
                              <div className="bg-white rounded-lg overflow-hidden relative group shadow-md">
                                   <div className="overflow-hidden rounded-lg relative group">
                                        <div className="transition-all duration-300 transform group-hover:scale-105 ease-in-out">
                                             <Image
                                                  src={app.imgSrc}
                                                  alt={app.title}
                                                  className="rounded-lg w-full h-[170px] sm:h-[210px] md:h-[250px] object-cover"
                                             />
                                        </div>
                                   </div>
                                   <div className="p-4">
                                        <motion.h2
                                             key={animationKey}
                                             variants={textVariants}
                                             initial="hidden"
                                             animate="visible"
                                             custom={index}
                                             className="text-xl font-medium pb-3 text-[#00352C] text-center"
                                             style={{ fontFamily: "SharpGrotesk" }}
                                        >
                                             {app.title}
                                        </motion.h2>
                                        <motion.p
                                             key={animationKey + 1}
                                             variants={textVariants}
                                             initial="hidden"
                                             animate="visible"
                                             custom={index + 1}
                                             className="text-gray-600 text-center h-30 md:h-50 lg:h-30 overflow-hidden"
                                             style={{
                                                  display: "-webkit-box",
                                                  WebkitLineClamp: 1,
                                                  WebkitBoxOrient: "vertical",
                                             }}
                                        >
                                             {app.description.length > 120 ? (
                                                  <>
                                                       {app.description.substring(0, 120)}...
                                                       <span
                                                            className="text-blue-500 cursor-pointer"
                                                            onClick={() => setSelectedApp(app)}
                                                       >
                                                            Read More
                                                       </span>
                                                  </>
                                             ) : (
                                                  app.description
                                             )}
                                        </motion.p>
                                        <div className="mt-4 flex gap-3 justify-between">
                                             <button onClick={() => router.push('https://hsapps-rebranding.pages.dev/')} className="bg-[#009CEB] text-white px-4 py-2 rounded w-full sm:w-40">
                                                  Login
                                             </button>
                                             <button onClick={() => router.push(app.link)} className="bg-transparent border border-[#009CEB] w-full sm:w-40 text-[#009CEB] px-4 py-2 rounded-lg">
                                                  Know More
                                             </button>
                                        </div>
                                   </div>
                              </div>
                         </div>
                    ))}
               </Slider>
               {/* <div className="flex justify-center text-center mt-4">
                    <button className="bg-[#00352C] text-center block text-white px-5 py-2 rounded">
                         View all →
                    </button>
               </div> */}

               {selectedApp && (
                    <motion.div
                         className="px-4 sm:px-12 md:px-16 lg:px-24 fixed inset-0 flex justify-center items-center z-50"
                         initial={{ opacity: 0 }}
                         animate={{ opacity: 1 }}
                         transition={{ duration: 0.5, ease: "easeOut" }}
                    >
                         <div className="absolute inset-0 bg-black opacity-70"></div>
                         <motion.div
                              className="bg-white p-6 rounded-lg max-w-lg w-full relative"
                              initial={{ opacity: 0 }}
                              animate={{ opacity: 1 }}
                              transition={{ duration: 0.5, ease: "easeOut" }}
                         >
                              <button
                                   className="absolute top-2 right-3 text-gray-600 hover:text-gray-800 text-xl"
                                   onClick={() => setSelectedApp(null)}
                              >
                                   ✕
                              </button>
                              <h2 className="text-2xl font-bold text-[#00352C] mb-4">
                                   {selectedApp.title}
                              </h2>
                              <p className="text-gray-700" dangerouslySetInnerHTML={{ __html: selectedApp.description }}></p>
                         </motion.div>
                    </motion.div>
               )}

          </motion.section>
     );
};

const NextArrow = ({ onClick }) => (
     <button
          onClick={onClick}
          className="absolute right-0 top-1/2 transform -translate-y-1/2 item-start w-12 h-12 flex justify-center border-2 border-[#009CEB] text-[#009CEB] text-3xl rounded-full bg-white shadow-lg hover:bg-[#009CEB] hover:text-white transition"
     >
          ›
     </button>
);

const PrevArrow = ({ onClick }) => (
     <button
          onClick={onClick}
          className="absolute left-0 top-1/2 transform -translate-y-1/2 w-12 h-12 flex justify-center border-2 border-[#009CEB] text-[#009CEB] text-3xl rounded-full bg-white shadow-lg hover:bg-[#009CEB] hover:text-white transition z-10"
     >
          ‹
     </button>
);