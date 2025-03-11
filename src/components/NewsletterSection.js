import Image from "next/image";
import dog1 from '../../public/dog1.jpg';
import dog2 from '../../public/dog2.jpg';
import dog3 from '../../public/dog3.jpg';
import dog4 from '../../public/dog4.jpg';
import recaptcha from '../../public/recaptcha.png';

export default function NewsletterSection() {
     return (
          <section className="bg-[#005944] py-16 px-6 md:px-16 lg:px-24">
               <div className=" mx-auto flex flex-col md:flex-row items-center gap-12 md:gap-24">

                    <div className="text-white w-full md:w-1/2">
                         <h2 className="text-2xl sm:text-4xl md:text-6xl font-bold mb-6">Humane World for Animals</h2>
                         <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-5 w-full w-125">
                              <div className="overflow-hidden rounded-3xl relative group">
                                   <div className="transition-all duration-300 transform group-hover:scale-105 ease-in-out">
                                        <Image src={dog1} alt="Dog 1" className="rounded-3xl object-cover h-36 md:h-48 lg:h-60 w-full" />
                                   </div>
                              </div>
                              <div className="overflow-hidden rounded-3xl relative group">
                                   <div className="transition-all duration-300 transform group-hover:scale-105 ease-in-out">
                                        <Image src={dog2} alt="Dog 2" className="rounded-3xl object-cover h-36 md:h-48 lg:h-60 w-full" />
                                   </div>
                              </div>
                              <div className="overflow-hidden rounded-3xl relative group">
                                   <div className="transition-all duration-300 transform group-hover:scale-105 ease-in-out">
                                        <Image src={dog3} alt="Dog 3" className="rounded-3xl object-cover h-36 md:h-48 lg:h-60 w-full" />
                                   </div>
                              </div>
                              <div className="overflow-hidden rounded-3xl relative group">
                                   <div className="transition-all duration-300 transform group-hover:scale-105 ease-in-out">
                                        <Image src={dog4} alt="Dog 4" className="rounded-3xl object-cover h-36 md:h-48 lg:h-60 w-full" />
                                   </div>
                              </div>
                         </div>
                    </div>

                    <div className="w-full md:w-1/2 bg-white rounded-3xl shadow-lg p-6 md:p-8">
                         <h3 className="text-xl sm:text-2xl md:text-4xl font-bold text-[#005944]">Keep me up to date!</h3>
                         <p className="text-[#474747] mt-2 sm:text-lg md:text-xl max-w-full md:max-w-[25rem]">Get the latest news and quick, simple actions you can take to help animals each week</p>

                         <form className="mt-6">
                              <label className="block font-medium text-gray-700">Email Address*</label>
                              <input type="email" className="mt-1 w-full p-2 border border-[#989494] rounded-lg" required />

                              <div className="grid grid-cols-2 gap-4 mt-4">
                                   <div>
                                        <label className="block font-medium text-gray-700">First name</label>
                                        <input type="text" className="mt-1 w-full p-2 border border-[#989494] rounded-lg" />
                                   </div>
                                   <div>
                                        <label className="block font-medium text-gray-700">Zip code</label>
                                        <input type="text" className="mt-1 w-full p-2 border border-[#989494] rounded-lg" />
                                   </div>
                              </div>

                              <label className="block font-medium text-gray-700 mt-4">Mobile number (optional)</label>
                              <input type="tel" className="mt-1 w-full p-2 border border-[#989494] rounded-lg" />

                              <div className="mt-4 flex items-center gap-4 bg-[#FAFAFA] p-3 rounded-lg w-[18rem] justify-between">
                                   <div className="flex items-center gap-4">
                                        <input type="checkbox" className="" style={{ width: 27, height: 25 }} />
                                        <span className="text-sm">i’m not robot</span>
                                   </div>
                                   <div className="flex flex-col items-center">
                                        <Image src={recaptcha} alt="reCAPTCHA" className="object-cover" style={{ width: 40, height: 47 }} />
                                        <span className="text-xs">Privacy Terms</span>
                                   </div>
                              </div>

                              <p className="text-sm text-[#3E3B3B] mt-4 max-w-[22rem]">
                                   By providing your mobile number, you agree to receive periodic text messages from Humane World for Animals with updates and ways you can help animals. Msg & data rates may apply. Text STOP to 77879 to opt out, HELP for info. <a href="#" className="text-[#005944] font-medium">Privacy Policy, Terms & Conditions</a>.
                              </p>

                              <button className="mt-6 w-full bg-[#009CEB] hover:bg-blue-600 text-white py-3 rounded-lg font-bold">Get Email Alerts</button>
                         </form>
                    </div>

               </div>
          </section>
     );
};   