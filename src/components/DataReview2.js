import Image from "next/image";
import dataReviewImg2 from "../../public/dataReview2.jpg";

export default function dataReview2() {
     return (
          <section className="bg-[#F4F4F4] text-white py-24 px-6 md:px-16 lg:px-24">
               <div className="flex flex-col-reverse md:flex-row items-center gap-8">
                    <div className="md:w-1/2">
                         <div className="overflow-hidden rounded-4xl relative group">
                              <div className="transition-all duration-300 transform group-hover:scale-105 ease-in-out">
                                   <Image
                                        src={dataReviewImg2}
                                        alt="Data Review"
                                        className="rounded-4xl h-[24rem]"
                                   />
                              </div>
                         </div>
                    </div>

                    <div className="md:w-1/2 md:text-left p-4">
                         <h2 className="text-xl sm:text-3xl md:text-4xl text-[#005944] font-bold mt-2 max-w-[25rem]">
                              Real-time Dashboards & Data review
                         </h2>
                         <p className="mt-4 sm:text-xl md:text-2xl text-black max-w-[29rem]">
                              The HSIApps Web application provides a dynamic reporting system with options to view pre-defined reports in PDF format and download data into CSV for custom analysis.
                         </p>
                    </div>
               </div>
          </section>
     );
};
