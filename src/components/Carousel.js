"use client";
import React from "react";
import Image from "next/image";
import slider1 from "../../public/slider1.png";
import slider2 from "../../public/slider2.png";
import slider3 from "../../public/slider3.jpg";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const applications = [
     {
          title: "App Platform",
          description:
               "HSIApps is an application platform similar to Google's suite of office apps (Docs, Sheets, Slides) enabling sharing of teams/assets across all projects.",
          imgSrc: slider1,
     },
     {
          title: "Mass Vaccination",
          description:
               "The Mass Vaccination app streamlines administering large number of vaccinations in the field to ensure resources are optimally deployed.",
          imgSrc: slider2,
     },
     {
          title: "Population Management",
          description:
               "The Population Management app streamlines administering large number of sterilizations.",
          imgSrc: slider3,
     },
     {
          title: "Population Management",
          description:
               "The Population Management app streamlines administering large number of sterilizations.",
          imgSrc: slider1,
     },
     {
          title: "Population Management",
          description:
               "The Population Management app streamlines administering large number of sterilizations.",
          imgSrc: slider2,
     },
];

const Carousel = () => {
     const settings = {
          dots: false,
          infinite: true,
          speed: 500,
          slidesToShow: 3,
          slidesToScroll: 1,
          arrows: true,
          nextArrow: <NextArrow />,
          prevArrow: <PrevArrow />,
          responsive: [
               {
                    breakpoint: 1024,
                    settings: { slidesToShow: 3, slidesToScroll: 1 },
               },
               {
                    breakpoint: 768,
                    settings: { slidesToShow: 2, slidesToScroll: 1 },
               },
               {
                    breakpoint: 480,
                    settings: { slidesToShow: 1, slidesToScroll: 1 },
               },
          ],
     };

     return (
          <div className="relative w-full px-4 sm:px-12 md:px-16 lg:px-24 mx-auto">
               <h1 className="text-[#005944] text-2xl sm:text-4xl md:text-5xl font-bold p-4">Applications</h1>
               <Slider {...settings}>
                    {applications.map((app, index) => (
                         <div key={index} className="p-4">
                              <div className="bg-white rounded-lg overflow-hidden relative group shadow-md">
                                   <div className="overflow-hidden rounded-lg relative group">
                                        <div className="transition-all duration-300 transform group-hover:scale-105 ease-in-out">
                                             <Image
                                                  src={app.imgSrc}
                                                  alt={app.title}
                                                  className="rounded-lg w-full h-[170px] sm:h-[210px] md:h-[250px] object-cover"
                                             />
                                        </div>
                                   </div>
                                   <div className="p-4">
                                        <h2 className="text-lg font-medium pb-3 text-[#005944] text-center">{app.title}</h2>
                                        <p className="text-gray-600 text-center sm:h-40 md:h-50 lg:h-30">{app.description}</p>
                                        <div className="mt-4 flex gap-3 justify-between">
                                             <button className="bg-[#009CEB] text-white px-4 py-2 rounded w-full sm:w-40">
                                                  Login
                                             </button>
                                             <button className="bg-transparent border border-[#009CEB] w-full sm:w-40 text-[#009CEB] px-4 py-2 rounded">
                                                  Know More
                                             </button>
                                        </div>
                                   </div>
                              </div>
                         </div>
                    ))}
               </Slider>
               <div className="flex justify-center text-center mt-4">
                    <button className="bg-[#005944] text-center block text-white px-5 py-2 rounded">View all →</button>
               </div>
          </div>
     );
};

const NextArrow = ({ onClick }) => (
     <button
          onClick={onClick}
          className="absolute right-0 top-1/2 transform -translate-y-1/2 item-start w-12 h-12 flex justify-center border-2 border-[#009CEB] text-[#009CEB] text-3xl rounded-full bg-white shadow-lg hover:bg-[#009CEB] hover:text-white transition"
     >
          ›
     </button>
);

const PrevArrow = ({ onClick }) => (
     <button
          onClick={onClick}
          className="absolute left-0 top-1/2 transform -translate-y-1/2 w-12 h-12 flex justify-center border-2 border-[#009CEB] text-[#009CEB] text-3xl rounded-full bg-white shadow-lg hover:bg-[#009CEB] hover:text-white transition z-10"
     >
          ‹
     </button>
);

export default Carousel;