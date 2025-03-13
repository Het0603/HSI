import Image from "next/image";
import campaign1 from '../../public/campaign1.jpg';
import campaign2 from '../../public/campaign2.jpg';
import campaign3 from '../../public/campaign3.jpg';
import campaign4 from '../../public/campaign4.jpg';
import campaign5 from '../../public/campaign5.jpg';
import campaign6 from '../../public/campaign6.jpg';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { motion } from "framer-motion";

const campaignAreas = [
  { id: 1, image: campaign1, location: "Bolivia" },
  { id: 2, image: campaign2, location: "Chile" },
  { id: 3, image: campaign3, location: "South Africa" },
  { id: 4, image: campaign4, location: "India" },
  { id: 5, image: campaign5, location: "Philippines" },
  { id: 6, image: campaign6, location: "Vietnam" },
];

export default function CampaignSection() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
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
        transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }} className="text-[#005944] text-2xl sm:text-4xl md:text-5xl font-bold mb-8">
        Programs Using Humane World App
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
                    className="h-auto object-cover rounded-3xl"
                  />
                </div>
              </motion.div>
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: 0.6, ease: "easeOut" }} className="mt-3 text-lg font-semibold text-[#005944]">{area.location}</motion.p>
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
                  className="w-full h-auto object-cover rounded-2xl"
                />
              </div>
            </div>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: 0.1 * index + 0.2, ease: "easeOut" }} className="mt-3 text-lg font-semibold text-[#005944]">{area.location}</motion.p>
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  );
}