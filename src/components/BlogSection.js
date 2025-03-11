import Image from "next/image";
import blog1 from '../../public/blog1.jpg';
import blog2 from '../../public/blog2.jpg';
import blog3 from '../../public/blog3.jpg';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

export default function BlogSection() {
     const blogs = [
          {
               id: 1,
               title: "Helping captive wildlife",
               description:
                    "New audit knocks persistent USDA dog breeder inspection deficiencies",
               content:
                    "The bar is low for dog breeder inspections and getting lower",
               image: blog1,
          },
          {
               id: 2,
               title: "Ending animal fighting",
               description:
                    "Kansas raid cuts to the heart of cockfighting’s cruelty, and the need for action",
               content:
                    "Let’s give cockfighting no quarter in Kansas or anywhere else.",
               image: blog2,
          },
          {
               id: 3,
               title: "Helping captive wildlife",
               description:
                    "In insult to animals and customers, Target breaks its animal welfare promises",
               content:
                    "Commitments to improve the quality of life for animals shouldn’t be empty promises. Since Target",
               image: blog3,
          },
     ];

     const sliderSettings = {
          dots: true,
          infinite: true,
          speed: 500,
          slidesToShow: 1,
          slidesToScroll: 1,
          responsive: [
               {
                    breakpoint: 639,
                    settings: {
                         slidesToShow: 1,
                         slidesToScroll: 1,
                         dots: true,
                    },
               },
          ],
     };

     return (
          <section className="py-12 relative w-full px-6 sm:px-12 md:px-16 lg:px-24 mx-auto">
               <h1 className="text-[#005944] text-2xl sm:text-4xl md:text-5xl font-bold mb-8">
                    A Humane World Blog
               </h1>

               <div className="relative block sm:hidden">
                    <Slider {...sliderSettings}>
                         {blogs.map((blog) => (
                              <div
                                   key={blog.id}
                                   className="bg-[#FAFAFA] rounded-xl overflow-hidden"
                              >
                                   <div className="overflow-hidden rounded-2xl relative group">
                                        <div className="transition-all duration-300 transform group-hover:scale-105 ease-in-out">
                                             <Image
                                                  src={blog.image}
                                                  alt={blog.title}
                                                  className="rounded-2xl w-full h-[200px] sm:h-[250px] lg:h-[300px] object-cover"
                                             />
                                        </div>
                                   </div>
                                   <div className="p-5">
                                        <h3 className="text-xl md:text-2xl font-semibold text-[#005944]">
                                             {blog.title}
                                        </h3>
                                        <p className="text-[#1A5CC7] md:text-lg mt-1">{blog.description}</p>
                                        <p className="text-[#616060] mt-2 text-sm sm:text-base">{blog.content}</p>
                                   </div>
                              </div>
                         ))}
                    </Slider>
               </div>

               {/* Desktop Grid */}
               <div className="hidden sm:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {blogs.map((blog) => (
                         <div
                              key={blog.id}
                              className="bg-[#FAFAFA] rounded-xl overflow-hidden"
                         >
                              <div className="overflow-hidden rounded-2xl relative group">
                                   <div className="transition-all duration-300 transform group-hover:scale-105 ease-in-out">
                                        <Image
                                             src={blog.image}
                                             alt={blog.title}
                                             className="rounded-2xl w-full h-[200px] sm:h-[250px] lg:h-[300px] object-cover"
                                        />
                                   </div>
                              </div>
                              <div className="p-5">
                                   <h3 className="text-2xl font-semibold text-[#005944]">
                                        {blog.title}
                                   </h3>
                                   <p className="text-[#1A5CC7] text-lg mt-1">{blog.description}</p>
                                   <p className="text-[#616060] mt-2 text-sm sm:text-base">{blog.content}</p>
                              </div>
                         </div>
                    ))}
               </div>

               <div className="flex justify-center text-center mt-12">
                    <button className="bg-[#005944] hover:bg-green-800 text-white font-semibold px-6 py-3 rounded-lg shadow-lg flex items-center justify-center gap-2">
                         Read the blog →
                    </button>
               </div>
          </section>
     );
};
