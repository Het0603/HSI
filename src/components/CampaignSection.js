import Image from "next/image";
import Bolivia from '../../public/Bolivia.jpg';
import CostaRica from '../../public/CostaRica.Jpg';
import India from '../../public/India.jpg';
import SouthAfrica from '../../public/South-africa.jpg';
import Chile from '../../public/Chile.jpg';
import Vietnam from '../../public/Vietnam.jpg';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { motion } from "framer-motion";

const campaignAreas = [
  { id: 1, image: Bolivia, location: "Bolivia" },
  { id: 2, image: Chile, location: "Chile" },
  { id: 3, image: SouthAfrica, location: "South Africa" },
  { id: 4, image: India, location: "India" },
  { id: 5, image: CostaRica, location: "Costa Rica" },
  { id: 6, image: Vietnam, location: "Viet Nam" },
];

export default function CampaignSection() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, ease: "easeOut" }} className="relative w-full px-4 sm:px-12 md:px-16 lg:px-24 mx-auto py-12 bg-[#f8f8f8]">
      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }} style={{ fontFamily: "SharpGrotesk" }} className="text-[#00352C] text-3xl sm:text-4xl md:text-5xl font-bold mb-8">
        Programs using Humane World Apps
      </motion.h2>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }} className="relative block sm:hidden">
        <Slider {...settings}>
          {campaignAreas.map((area) => (
            <div key={area.id} className="text-center">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }} className="overflow-hidden rounded-3xl relative group">
                <div className="transition-all duration-300 transform group-hover:scale-100 ease-in-out">
                  <Image
                    src={area.image}
                    alt={area.location}
                    className="h-[288px] sm:h-[356px] object-cover rounded-3xl w-full"
                  />
                </div>
              </motion.div>
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: 0.6, ease: "easeOut" }} className="mt-3 text-lg font-semibold text-[#00352C]">{area.location}</motion.p>
            </div>
          ))}
        </Slider>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }} className="hidden sm:grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {campaignAreas.map((area, index) => (
          <motion.div
            key={area.id}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.1 * index, ease: "easeOut" }} className="text-center">
            <div className="overflow-hidden rounded-2xl relative group">
              <div className="transition-all duration-300 transform group-hover:scale-105 ease-in-out">
                <Image
                  src={area.image}
                  alt={area.location}
                  className="w-full h-[215px] md:h-[175px] lg:h-[283px] object-cover rounded-2xl"
                />
              </div>
            </div>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: 0.1 * index + 0.2, ease: "easeOut" }} className="mt-3 text-lg font-semibold text-[#00352C]">{area.location}</motion.p>
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  );
}