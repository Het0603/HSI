import Image from "next/image";
import logo from "../../public/logo.svg";
import snap from "../../public/snap.svg";
import facebook from "../../public/facebook.svg";
import instagram from "../../public/instagram.svg";
import linkdin from "../../public/linkdin.svg";
import youtube from "../../public/youtube.svg";
import xIcon from "../../public/xIcon.svg";

export default function Footer() {
  return (
    <footer className="bg-white border-gray-200">
      <div className="md:px-16 lg:px-24 mx-auto py-4 md:py-6 lg:py-12 px-6 flex flex-col md:flex-row md:justify-between md:items-center space-y-6 md:space-y-0">
        <div className="flex items-center space-x-4 flex-col items-start space-y-5">
          <Image src={logo} alt="Logo" style={{ width: 200, height: 100 }} />
          <p className="text-black sm:text-lg max-w-[26rem]">Humane World for Animals is registered as
            a 501(c)(3) nonprofit organization. Contributions
            to the Humane World for Animals are tax-deductible
            to the extent permitted by law. The Humane World
            for Animals tax identification number is 53-0225390.</p>
          <div className="flex gap-4">
            <Image src={snap} alt="Snapchat" />
            <Image src={instagram} alt="Instagram" />
            <Image src={xIcon} alt="X" />
            <Image src={facebook} alt="Facebook" />
            <Image src={linkdin} alt="Linkdin" />
            <Image src={youtube} alt="Youtube" />
          </div>
        </div>

        <div className="flex flex-col text-center text-left space-y-6">
          <a href="/about" className="hover:text-[#009CEB] transition sm:text-lg md:text-xl">About us</a>
          <a href="#" className="hover:text-[#009CEB] transition sm:text-lg md:text-xl">Diversity & Inclusion</a>
          <a href="#" className="hover:text-[#009CEB] transition sm:text-lg md:text-xl">Governance</a>
          <a href="#" className="hover:text-[#009CEB] transition sm:text-lg md:text-xl">Financials</a>
          <a href="#" className="hover:text-[#009CEB] transition sm:text-lg md:text-xl">Privacy and Cookie Policy</a>
        </div>

        <div className="md:flex flex-col text-center items-center space-y-4 hidden">
          <button className="border-[#009CEB] border-2 md:text-lg lg:text-2xl font-semibold text-[#009CEB] md:px-2 lg:px-4 py-3 rounded-lg transition md:w-[8rem] lg:w-[13rem]">Media Room</button>
          <button className="border-[#009CEB] border-2 md:text-lg lg:text-2xl font-semibold text-[#009CEB] md:px-2 lg:px-4 py-3 rounded-lg transition md:w-[8rem] lg:w-[13rem]">Careers</button>
          <button className="border-[#009CEB] border-2 md:text-lg lg:text-2xl font-semibold text-[#009CEB] md:px-2 lg:px-4 py-3 rounded-lg transition md:w-[8rem] lg:w-[13rem]">Donate</button>
          <button className="bg-[#005944] md:text-lg lg:text-2xl font-semibold text-white md:px-2 lg:px-4 py-3 rounded-lg transition md:w-[8rem] lg:w-[13rem]">Contact Us</button>
        </div>
      </div>

      <div className="text-center py-4 border-t border-gray-200 text-gray-600 sm:text-lg md:text-xl">
        <p>
          © Copyright {new Date().getFullYear()} <a href="#" className="text-[#009CEB] font-semibold">Humane Society International</a>
        </p>
      </div>
    </footer>
  );
}
