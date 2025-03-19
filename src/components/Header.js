import Link from "next/link";
import { FaBars, FaTimes, FaChevronDown } from "react-icons/fa";
import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import logo from "../../public/logo.svg";
import { useRouter } from "next/router";
import logo2 from "../../public/mobileAppLogoGreen1.png";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const router = useRouter();
  const drawerRef = useRef(null);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (drawerRef.current && !drawerRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [drawerRef]);

  return (
    <header>
      <nav className="mx-auto sm:px-6 md:px-6 lg:px-6 md:px-16 sm:px-24 flex justify-between items-center sm:py-4 md:py-4 lg:py-4 lg:py-0 bg-white shadow-md">
        <Link href="/" className="flex items-center pl-5">
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
            {isOpen ? <FaTimes size={26} color="#009CEB" /> : <FaBars size={26} color="#009CEB" />}
          </button>
          <button onClick={() => router.push('https://hsapps-rebranding.pages.dev/')} className="bg-[#E50913] hover:bg-green-800 text-white font-semibold px-6 py-5 sm:px-6 sm:py-2 md:px-6 md:py-2 text-sm sm:text-base md:text-lg sm:rounded-lg md:rounded-lg lg:rounded-lg shadow-lg">
            Login
          </button>
        </div>

        {/* Mobile Menu */}
        <div ref={drawerRef} className={`fixed top-15 sm:top-20 right-0 w-65 sm:w-72 md:w-80 h-full bg-white z-50 shadow-lg transform transition-transform duration-300 ${isOpen ? "translate-x-0" : "translate-x-full"}`}>
          <ul className="space-y-6 text-lg text-bold text-[#009CEB]" style={{ fontFamily: "SharpGrotesk" }}>
            <li><Link href="/" className="block hover:text-blue-500 pt-5 px-5">Home</Link><div className="border-b border-gray-300 my-2 w-full"></div></li>
            <li><Link href="/" className="block hover:text-blue-500 px-5">About us</Link><div className="border-b border-gray-300 my-2 w-full"></div></li>
            <li><Link href="/" className="block hover:text-blue-500 px-5">Training resources</Link><div className="border-b border-gray-300 my-2 w-full"></div></li>
            <li>
              <button onClick={() => setDropdownOpen(!dropdownOpen)} style={{ fontFamily: "SharpGrotesk" }} className="text-bold w-full text-left flex items-center px-5 gap-1 hover:text-blue-500 justify-between">
                Our Programs <FaChevronDown size={14} />
              </button>
              {dropdownOpen && (
                <ul className="mt-2 border-l mx-5 px-3" style={{ fontFamily: "SharpGrotesk" }}>
                  <li><Link href="/mass-vaccination" className="block py-2 hover:text-blue-500">Mass-Vaccination</Link></li>
                  <li><Link href="/population-management" className="block py-2 hover:text-blue-500">Population-Management</Link></li>
                  <li><Link href="/health-clinic" className="block py-2 hover:text-blue-500">Health-Clinic</Link></li>
                </ul>
              )}
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}