import Image from "next/image";
import dog1 from '../../public/dog1.jpg';
import dog2 from '../../public/dog2.jpg';
import dog3 from '../../public/dog3.jpg';
import dog4 from '../../public/dog4.jpg';
import recaptcha from '../../public/recaptcha.png';
import { motion } from "framer-motion";
import { useState } from "react";

export default function NewsletterSection() {
     const [email, setEmail] = useState("");
     const [firstName, setFirstName] = useState("");
     const [zipCode, setZipCode] = useState("");
     const [mobile, setMobile] = useState("");
     const [isRobot, setIsRobot] = useState(false);
     const [error, setError] = useState("");

     const handleSubmit = (e) => {
          e.preventDefault();

          if (!email || !firstName || !zipCode || !isRobot) {
               setError("Please fill out all required fields and confirm you're not a robot.");
               return;
          }
          if (!/^\d+$/.test(zipCode)) {
               setError("Zip code should only contain numbers.");
               return;
          }

          // Store the data in localStorage
          const formData = {
               email,
               firstName,
               zipCode,
               mobile,
          };
          localStorage.setItem("newsletterData", JSON.stringify(formData));

          // Optionally, clear form fields
          setEmail("");
          setFirstName("");
          setZipCode("");
          setMobile("");
          setIsRobot(false);
          setError("");
          alert("Thank you for subscribing!");
     };

     return (
          <motion.section
               initial={{ opacity: 0, y: 50 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true, amount: 0.3 }}
               transition={{ duration: 0.8, ease: "easeOut" }} className="bg-[#005944] py-16 px-6 md:px-16 lg:px-24">
               <div className=" mx-auto flex flex-col md:flex-row items-center gap-12 md:gap-24">

                    <motion.div
                         initial={{ opacity: 0, x: -50 }}
                         whileInView={{ opacity: 1, x: 0 }}
                         viewport={{ once: true, amount: 0.3 }}
                         transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }} className="text-white w-full md:w-1/2">
                         <h2 className="text-2xl sm:text-4xl md:text-6xl font-bold mb-6">Humane World for Animals</h2>
                         <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-5 w-full w-125">
                              {[dog1, dog2, dog3, dog4].map((dog, index) => (
                                   <motion.div
                                        key={index}
                                        initial={{ opacity: 0, scale: 0.95 }}
                                        whileInView={{ opacity: 1, scale: 1 }}
                                        viewport={{ once: true, amount: 0.3 }}
                                        transition={{ duration: 0.8, delay: 0.2 + index * 0.1, ease: "easeOut" }}
                                        className="overflow-hidden rounded-3xl relative group"
                                   >
                                        <div className="transition-all duration-300 transform group-hover:scale-105 ease-in-out">
                                             <Image
                                                  src={dog}
                                                  alt={`Dog ${index + 1}`}
                                                  className="rounded-3xl object-cover h-36 md:h-48 lg:h-60 w-full"
                                             />
                                        </div>
                                   </motion.div>
                              ))}
                         </div>
                    </motion.div>

                    <motion.div
                         initial={{ opacity: 0, x: 20 }}
                         whileInView={{ opacity: 1, x: 0 }}
                         viewport={{ once: true, amount: 0.3 }}
                         transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }} className="w-full md:w-1/2 bg-white rounded-3xl shadow-lg p-6 md:p-8">
                         <h3 className="text-xl sm:text-2xl md:text-4xl font-bold text-[#005944]">Keep me up to date!</h3>
                         <p className="text-[#474747] mt-2 sm:text-lg md:text-xl max-w-full md:max-w-[25rem]">Get the latest news and quick, simple actions you can take to help animals each week</p>

                         {error && <p className="text-red-600 mt-4">{error}</p>}

                         <form onSubmit={handleSubmit} className="mt-6">
                              <label className="block font-medium text-gray-700">Email Address*</label>
                              <input
                                   type="email"
                                   className="mt-1 w-full p-2 border border-[#989494] rounded-lg"
                                   value={email}
                                   onChange={(e) => setEmail(e.target.value)}
                              />

                              <div className="grid grid-cols-2 gap-4 mt-4">
                                   <div>
                                        <label className="block font-medium text-gray-700">First name</label>
                                        <input
                                             type="text"
                                             className="mt-1 w-full p-2 border border-[#989494] rounded-lg"
                                             value={firstName}
                                             onChange={(e) => setFirstName(e.target.value)}
                                        />
                                   </div>
                                   <div>
                                        <label className="block font-medium text-gray-700">Zip code</label>
                                        <input
                                             type="text"
                                             className="mt-1 w-full p-2 border border-[#989494] rounded-lg"
                                             value={zipCode}
                                             onChange={(e) => setZipCode(e.target.value)}
                                        />
                                   </div>
                              </div>

                              <label className="block font-medium text-gray-700 mt-4">Mobile number (optional)</label>
                              <input
                                   type="tel"
                                   className="mt-1 w-full p-2 border border-[#989494] rounded-lg"
                                   value={mobile}
                                   onChange={(e) => setMobile(e.target.value)}
                              />

                              <div className="mt-4 flex items-center gap-4 bg-[#FAFAFA] p-3 rounded-lg w-[18rem] justify-between">
                                   <div className="flex items-center gap-4">
                                        <input
                                             type="checkbox"
                                             checked={isRobot}
                                             onChange={(e) => setIsRobot(e.target.checked)}
                                             style={{ width: 27, height: 25 }}
                                        />
                                        <span className="text-sm">I’m not a robot</span>
                                   </div>
                                   <div className="flex flex-col items-center">
                                        <Image src={recaptcha} alt="reCAPTCHA" className="object-cover" style={{ width: 40, height: 47 }} />
                                        <span className="text-xs">Privacy Terms</span>
                                   </div>
                              </div>

                              <p className="text-sm text-[#3E3B3B] mt-4 max-w-[22rem]">
                                   By providing your mobile number, you agree to receive periodic text messages from Humane World for Animals with updates and ways you can help animals. Msg & data rates may apply. Text STOP to 77879 to opt out, HELP for info. <a href="#" className="text-[#005944] font-medium">Privacy Policy, Terms & Conditions</a>.
                              </p>

                              <button type="submit" className="mt-6 w-full bg-[#009CEB] hover:bg-blue-600 text-white py-3 rounded-lg font-bold">Get Email Alerts</button>
                         </form>
                    </motion.div>

               </div>
          </motion.section>
     );
};   