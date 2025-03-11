import Link from "next/link";
import { FaSearch, FaBars, FaTimes } from "react-icons/fa";
import { useState } from "react";
import Image from "next/image";
import logo from "../../public/logo.svg";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header>
      <div className="font-sans">
        {/* Top Bar */}
        <div className="bg-[#009CEB] text-white text-center py-2 px-4 text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl sm:px-8 md:px-12 lg:px-16">
          We've grown from a Humane Society into a Humane World. One name, one global mission.{" "}
          <a href="#" className="underline">
            Learn More
          </a>
        </div>

        <nav className="mx-auto px-6 md:px-16 sm:px-24 flex justify-between items-center py-4 bg-white shadow-md">
          <Link href="/" className="flex items-center">
            <Image src={logo} width={160} height={60} alt="Logo" className="w-28 h-auto md:w-38 lg:w-42" />
          </Link>

          <ul className="hidden lg:flex items-center space-x-6 text-gray-700 md:w-[100rem] md:justify-end pr-5">
            <li><Link href="/about" className="hover:text-blue-500">About us</Link></li>
            <li><Link href="#" className="hover:text-blue-500">Where We Work</Link></li>
            <li><Link href="#" className="hover:text-blue-500">Issues</Link></li>
            <li><Link href="#" className="hover:text-blue-500">Take Action</Link></li>
            <li><Link href="#" className="hover:text-blue-500">Get Informed</Link></li>
            <li><FaSearch className="text-gray-600 cursor-pointer" /></li>
          </ul>

          <div className="block flex items-center gap-5">
            <button onClick={toggleMenu} className="lg:hidden text-gray-700 focus:outline-none">
              {isOpen ? <FaTimes size={26} /> : <FaBars size={26} />}
            </button>
            <FaSearch className="lg:hidden text-gray-600 cursor-pointer text-xl sm:text-2xl md:text-3xl" />
            <button className="bg-[#005944] hover:bg-green-800 text-white font-semibold px-4 py-2 sm:px-6 sm:py-2 md:px-6 md:py-2 text-sm sm:text-base md:text-lg rounded-lg shadow-lg">
              Login
            </button>
          </div>

          <div
            className={`fixed top-0 right-0 w-64 sm:w-72 md:w-80 h-full bg-white z-50 shadow-lg transform transition-transform duration-300 ${isOpen ? "translate-x-0" : "translate-x-full"
              } p-6`}
          >
            <button onClick={toggleMenu} className="absolute top-4 right-4 text-gray-700">
              <FaTimes size={26} />
            </button>

            <ul className="space-y-6 text-gray-700 mt-10">
              <li><Link href="/about" className="block hover:text-blue-500">About us</Link></li>
              <li><Link href="#" className="block hover:text-blue-500">Where We Work</Link></li>
              <li><Link href="#" className="block hover:text-blue-500">Issues</Link></li>
              <li><Link href="#" className="block hover:text-blue-500">Take Action</Link></li>
              <li><Link href="#" className="block hover:text-blue-500">Get Informed</Link></li>
            </ul>
          </div>
        </nav>
      </div>
    </header>
  );
}
