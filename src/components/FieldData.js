import Image from "next/image";
import fieldDataImg from "../../public/fieldData.png";

export default function fieldData() {
     return (
          <section className="bg-[#F4F4F4] text-white py-24 px-6 md:px-16 lg:px-24">
               <div className="flex flex-col-reverse md:flex-row items-center gap-8">
                    <div className="md:w-1/2">
                         <div className="overflow-hidden rounded-4xl relative group">
                              <div className="transition-all duration-300 transform group-hover:scale-105 ease-in-out">
                                   <Image
                                        src={fieldDataImg}
                                        alt="Field Data"
                                        className="rounded-4xl w-full h-[24rem]"
                                   />
                              </div>
                         </div>
                    </div>

                    <div className="md:w-1/2 md:text-left p-4">
                         <h2 className="text-xl sm:text-3xl md:text-4xl text-[#005944] font-bold mt-2 max-w-[25rem]">
                              Field Data Gathering with Offline Sync
                         </h2>
                         <p className="mt-4 sm:text-xl md:text-2xl text-black max-w-[29rem]">
                              Record animal’s picture, GPS location, and other information about each animal vaccinated. Offline/Sync feature enables smooth handling of connectivity issues.
                         </p>
                    </div>
               </div>
          </section>
     );
};
