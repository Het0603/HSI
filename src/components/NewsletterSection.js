import Image from "next/image";
import dog1 from '../../public/dog1.jpg';
import dog2 from '../../public/dog2.jpg';
import dog3 from '../../public/dog3.jpg';
import dog4 from '../../public/dog4.jpg';
import { motion } from "framer-motion";
import { useState } from "react";
import axios from "axios";

export default function NewsletterSection() {
     const [email, setEmail] = useState("");
     const [orgName, setOrgName] = useState("");
     const [firstName, setFirstName] = useState("");
     const [lastName, setLastName] = useState("");
     const [mobile, setMobile] = useState("");
     const [city, setCity] = useState("");
     const [country, setCountry] = useState("");
     const [error, setError] = useState("");
     const [successMessage, setSuccessMessage] = useState("");

     const handleSubmit = async (e) => {
          e.preventDefault();

          if (!email || !orgName || !city || !country) {
               let errorMessage = "Please fill out the required fields: ";
               if (!email) errorMessage += "Email, ";
               if (!orgName) errorMessage += "Organization name, ";
               if (!city) errorMessage += "City, ";
               if (!country) errorMessage += "Country.";
               setError(errorMessage);
               return;
          }

          try {
               await axios.post('/api/enroll', {
                    email,
                    orgName,
                    firstName,
                    lastName,
                    city,
                    country,
                    mobile,
               });

               setSuccessMessage("Thank you for subscribing!");
               setError("");

               setEmail("");
               setOrgName("");
               setFirstName("");
               setLastName("");
               setCity("");
               setCountry("");
               setMobile("");
          } catch (error) {
               setError("Something went wrong. Please try again later.");
          }
     };

     return (
          <motion.section
               initial={{ opacity: 0, y: 50 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true, amount: 0.3 }}
               transition={{ duration: 0.8, ease: "easeOut" }} id="aboutUs" className="bg-[#00352C] py-16 px-6 md:px-16 lg:px-24">
               <div className=" mx-auto flex flex-col md:flex-row items-center gap-12 md:gap-24">

                    <motion.div
                         initial={{ opacity: 0, x: -50 }}
                         whileInView={{ opacity: 1, x: 0 }}
                         viewport={{ once: true, amount: 0.3 }}
                         transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }} className="text-white w-full md:w-1/2">
                         <h2 className="text-2xl sm:text-4xl md:text-6xl font-bold mb-6">Humane World Apps</h2>
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
                         transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }} className="w-full md:w-1/2 bg-[#f8f8f8] rounded-3xl shadow-lg p-6 md:p-8">
                         <h3 className="text-xl sm:text-2xl md:text-4xl font-bold text-[#00352C]">Enroll now for the App Access</h3>
                         <p className="text-[#474747] mt-2 sm:text-lg md:text-xl max-w-full md:max-w-[25rem]">Get the latest news and quick, simple actions you can take to help animals each week</p>

                         {error && <p className="text-red-600 mt-4">{error}</p>}
                         {successMessage && <p className="text-green-600 mt-4">{successMessage}</p>}

                         <form onSubmit={handleSubmit} className="mt-6">
                              <label className="block font-medium text-gray-700">Email Address*</label>
                              <input
                                   type="email"
                                   className="mt-1 w-full p-2 border border-[#989494] rounded-lg"
                                   value={email}
                                   onChange={(e) => setEmail(e.target.value)}
                              />

                              <label className="block font-medium text-gray-700 mt-4">Organisation name*</label>
                              <input
                                   type="text"
                                   className="mt-1 w-full p-2 border border-[#989494] rounded-lg"
                                   value={orgName}
                                   onChange={(e) => setOrgName(e.target.value)}
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
                                        <label className="block font-medium text-gray-700">Last name</label>
                                        <input
                                             type="text"
                                             className="mt-1 w-full p-2 border border-[#989494] rounded-lg"
                                             value={lastName}
                                             onChange={(e) => setLastName(e.target.value)}
                                        />
                                   </div>
                              </div>

                              <div className="grid grid-cols-2 gap-4 mt-4">
                                   <div>
                                        <label className="block font-medium text-gray-700">City*</label>
                                        <input
                                             type="text"
                                             className="mt-1 w-full p-2 border border-[#989494] rounded-lg"
                                             value={city}
                                             onChange={(e) => setCity(e.target.value)}
                                        />
                                   </div>
                                   <div>
                                        <label className="block font-medium text-gray-700">Country*</label>
                                        <input
                                             type="text"
                                             className="mt-1 w-full p-2 border border-[#989494] rounded-lg"
                                             value={country}
                                             onChange={(e) => setCountry(e.target.value)}
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

                              <p className="text-sm text-[#3E3B3B] mt-4">
                                   By providing your mobile number, you agree to receive periodic text messages from Humane World for Animals with updates and ways you can help animals. Msg & data rates may apply. Text STOP to 77879 to opt out, HELP for info. <a href="/privacy-policy" className="text-[#00352C] font-medium">Privacy Policy, Terms & Conditions</a>.
                              </p>

                              <button type="submit" className="mt-6 w-full bg-[#009CEB] hover:bg-blue-600 text-white py-3 rounded-lg font-bold">Enroll Now</button>
                         </form>
                    </motion.div>

               </div>
          </motion.section>
     );
};   