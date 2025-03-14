import Image from "next/image";
import logo from "../../public/logo.svg";
import instagram from "../../public/instagram.svg";
import youtube from "../../public/youtube.svg";
import { motion } from "framer-motion";
import logo2 from "../../public/mobileAppLogoGreen1.png";

export default function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }} className="bg-[#f8f8f8] border-gray-200">
      <div className="md:px-16 lg:px-24 mx-auto py-4 md:py-6 lg:py-12 px-6 flex flex-col md:flex-row md:justify-between md:items-center space-y-6 md:space-y-0">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }} className="flex items-center space-x-4 flex-col items-start space-y-5">
          <div className="flex flex rows items-center"> 
          <Image src={logo} alt="Logo" style={{ width: 200, height: 100 }} />
          <div className="w-[2px] h-15 md:h-25 bg-gray-500 mx-4"></div>
          <Image src={logo2} width={160} height={60} alt="Logo" className="w-16 sm:w-18 h-auto md:w-20 lg:w-20" />
          <span className=" text-xs md:text-xs lg:text-2xl font-bold text-gray-900 w-[20rem] ml-2">Humane World Apps</span>
          </div>
          <p className="text-black sm:text-lg max-w-[26rem]">Humane World for Animals is registered as
            a 501(c)(3) nonprofit organization. Contributions
            to the Humane World for Animals are tax-deductible
            to the extent permitted by law. The Humane World
            for Animals tax identification number is 53-0225390.</p>
          <motion.div
            className="flex gap-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }} >
            <Image src={instagram} alt="Instagram" />
            <Image src={youtube} alt="Youtube" />
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.5 }} className="flex flex-col text-center text-left space-y-6">
          <a href="/" className="hover:text-[#009CEB] transition sm:text-lg md:text-xl">About us</a>
          <a href="#" className="hover:text-[#009CEB] transition sm:text-lg md:text-xl">Privacy and Cookie Policy</a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.7 }} className="md:flex flex-col text-center items-center space-y-4 hidden">
          <button className="border-[#009CEB] border-2 md:text-lg lg:text-2xl font-semibold text-[#009CEB] md:px-2 lg:px-4 py-3 rounded-lg transition md:w-[8rem] lg:w-[13rem]">Media Room</button>
          <button className="border-[#009CEB] border-2 md:text-lg lg:text-2xl font-semibold text-[#009CEB] md:px-2 lg:px-4 py-3 rounded-lg transition md:w-[8rem] lg:w-[13rem]">Careers</button>
          <button className="border-[#009CEB] border-2 md:text-lg lg:text-2xl font-semibold text-[#009CEB] md:px-2 lg:px-4 py-3 rounded-lg transition md:w-[8rem] lg:w-[13rem]">Donate</button>
          <button className="bg-[#005944] md:text-lg lg:text-2xl font-semibold text-white md:px-2 lg:px-4 py-3 rounded-lg transition md:w-[8rem] lg:w-[13rem]">Contact Us</button>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }} className="text-center py-4 border-t border-gray-200 text-gray-600 sm:text-lg md:text-xl">
        <p>
          © Copyright {new Date().getFullYear()} <a href="#" className="text-[#009CEB] font-semibold">Humane World for Animals</a>
        </p>
      </motion.div>
    </motion.footer>
  );
}
