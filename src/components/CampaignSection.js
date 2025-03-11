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

const campaignAreas = [
  { id: 1, image: campaign1, location: "Vadadora, India" },
  { id: 2, image: campaign2, location: "Dharwad, India" },
  { id: 3, image: campaign3, location: "Cebu City, Philippines" },
  { id: 4, image: campaign4, location: "Dharwad, India" },
  { id: 5, image: campaign5, location: "Vadadora, India" },
  { id: 6, image: campaign6, location: "Jaipur, India" },
];

export default function CampaignSection() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
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
    <section className="relative w-full px-4 sm:px-12 md:px-16 lg:px-24 mx-auto py-12">
      <h1 className="text-[#005944] text-2xl sm:text-4xl md:text-5xl font-bold mb-8">
        Recent Campaign Areas
      </h1>

      <div className="relative block sm:hidden">
        <Slider {...settings}>
          {campaignAreas.map((area) => (
            <div key={area.id} className="text-center">
              <div className="overflow-hidden rounded-3xl relative group">
                <div className="transition-all duration-300 transform group-hover:scale-100 ease-in-out">
                  <Image
                    src={area.image}
                    alt={area.location}
                    className="h-auto object-cover rounded-3xl"
                  />
                </div>
              </div>
              <p className="mt-3 text-lg font-semibold text-[#005944]">{area.location}</p>
            </div>
          ))}
        </Slider>
      </div>

      <div className="hidden sm:grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
        {campaignAreas.map((area) => (
          <div key={area.id} className="text-center">
            <div className="overflow-hidden rounded-2xl relative group">
              <div className="transition-all duration-300 transform group-hover:scale-105 ease-in-out">
                <Image
                  src={area.image}
                  alt={area.location}
                  className="w-full h-auto object-cover rounded-2xl"
                />
              </div>
            </div>
            <p className="mt-3 text-lg font-semibold text-[#005944]">{area.location}</p>
          </div>
        ))}
      </div>
    </section>
  );
}