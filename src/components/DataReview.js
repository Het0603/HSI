import Image from "next/image";
import dataReviewImg from "../../public/dataReview.png";

export default function dataReview() {
     return (
          <section className="bg-[#005944] text-white py-18 px-6 md:px-16 lg:px-24">
               <div className="flex flex-col md:flex-row items-center md:items-start gap-8">

                    <div className="md:w-1/2 text-center md:text-left">
                         <h2 className="text-xl sm:text-3xl md:text-4xl text-[#5EC9FF] font-bold mt-2 max-w-[25rem]">
                              Real-time Dashboards & Data review
                         </h2>
                         <p className="mt-4 sm:text-xl md:text-2xl leading-relaxed max-w-[29rem]">
                              he dashboard feature allows for realtime project status and decision making. Admin users can get a real-time bird’s-eye view of the Project on maps, monitoring areas or smaller streets that might be overlooked. These features increase team coordination and prevent potential missed areas.
                         </p>
                    </div>

                    <div className="md:w-1/2">
                         <div className="overflow-hidden rounded-4xl relative group">
                              <div className="transition-all duration-300 transform group-hover:scale-105 ease-in-out">
                                   <Image
                                        src={dataReviewImg}
                                        alt="Data Review"
                                        className="rounded-4xl h-[24rem]"
                                   />
                              </div>
                         </div>
                    </div>
               </div>
          </section >
     );
};
