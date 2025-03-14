import Link from "next/link";
import { FaBars, FaTimes, FaChevronDown } from "react-icons/fa";
import { useState } from "react";
import Image from "next/image";
import logo from "../../public/logo.svg";
import { useRouter } from "next/router";
import logo2 from "../../public/mobileAppLogoGreen1.png";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const router = useRouter();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header>
      <div className="font-sans">
        <nav className="mx-auto px-6 md:px-16 sm:px-24 flex justify-between items-center py-4 lg:py-0 bg-white shadow-md">
          <Link href="/" className="flex items-center">
            <Image src={logo} width={160} height={60} alt="Logo" className="w-26 h-auto sm:w-25 md:w-38 lg:w-42" />
          </Link>
          <div className="w-[1px] h-8 md:h-14 bg-gray-500 mx-2"></div>
          <Link href="/" className="flex items-center">
            <Image src={logo2} width={160} height={60} alt="Logo" className="w-7 h-auto sm:w-10 md:w-15 lg:w-10" />
            <span className=" text-xs md:text-xs lg:text-sm font-bold text-gray-900 lg:w-[12rem] ml-2">Humane World Apps</span>
          </Link>

          <ul className="hidden lg:flex items-center space-x-6 text-gray-700 md:w-[100rem] md:justify-end pr-5">
            <li><Link href="/" className="hover:text-blue-500">Home</Link></li>
            <li><Link href="/" className="hover:text-blue-500">About us</Link></li>
            <li><Link href="/" className="hover:text-blue-500">Training resources</Link></li>
            <li
              className="relative group"
              onMouseEnter={() => setDropdownOpen(true)}
              onMouseLeave={() => setDropdownOpen(false)}
            >
              <Link href="#" className="flex items-center gap-1 hover:text-blue-500 my-7">Our programs <FaChevronDown size={14} /></Link>
              {dropdownOpen && (
                <ul className="absolute top-full left-0 w-55 bg-white shadow-lg border rounded-md z-10">
                  <li><Link href="/mass-vaccination" className="block px-4 py-2 hover:rounded-md hover:bg-gray-100">Mass-Vaccination</Link></li>
                  <li><Link href="/population-management" className="block px-4 py-2 hover:rounded-md hover:bg-gray-100">Population-Management</Link></li>
                  <li><Link href="/health-clinic" className="block px-4 py-2 hover:rounded-md hover:bg-gray-100">Health-Clinic</Link></li>
                </ul>
              )}
            </li>
          </ul>

          <div className="block flex items-center gap-5">
            <button onClick={toggleMenu} className="lg:hidden text-gray-700 focus:outline-none">
              {isOpen ? <FaTimes size={26} /> : <FaBars size={26} />}
            </button>
            <button onClick={() => router.push('https://web.hsapps.org/login')} className="bg-[#005944] hover:bg-green-800 text-white font-semibold px-4 py-2 sm:px-6 sm:py-2 md:px-6 md:py-2 text-sm sm:text-base md:text-lg rounded-lg shadow-lg">
              Login
            </button>
          </div>

          {/* Mobile Menu */}
          <div className={`fixed top-0 right-0 w-64 sm:w-72 md:w-80 h-full bg-white z-50 shadow-lg transform transition-transform duration-300 ${isOpen ? "translate-x-0" : "translate-x-full"} p-6`}>
            <button onClick={toggleMenu} className="absolute top-4 right-4 text-gray-700">
              <FaTimes size={26} />
            </button>

            <ul className="space-y-6 text-gray-700 mt-10">
              <li><Link href="/" className="block hover:text-blue-500">Home</Link></li>
              <li><Link href="/" className="block hover:text-blue-500">About us</Link></li>
              <li><Link href="/" className="block hover:text-blue-500">Training resources</Link></li>
              <li>
                <button onClick={() => setDropdownOpen(!dropdownOpen)} className="w-full text-left flex items-center gap-1 hover:text-blue-500">
                  Our Programs <FaChevronDown size={14} />
                </button>
                {dropdownOpen && (
                  <ul className="mt-2 pl-4 border-l">
                    <li><Link href="/mass-vaccination" className="block py-2 hover:text-blue-500">Mass-Vaccination</Link></li>
                    <li><Link href="/population-management" className="block py-2 hover:text-blue-500">Population-Management</Link></li>
                    <li><Link href="/health-clinic" className="block py-2 hover:text-blue-500">Health-Clinic</Link></li>
                  </ul>
                )}
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </header>
  );
}