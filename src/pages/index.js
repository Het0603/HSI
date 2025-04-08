'use client';
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Carousel from "@/components/Carousel";
import Hero1 from "@/components/Hero1";
import MissionSection from "@/components/MissionSection";
import CampaignSection from "@/components/CampaignSection";
import DonationSection from "@/components/DonationSection";
import BlogSection from "@/components/BlogSection";
import VideoSection from "@/components/VideoSection";
import NewsletterSection from "@/components/NewsletterSection";
import mission from "../../public/LindaPataRat.png";
import hero2 from "../../public/LindaPataRat1.png";
import FirstTimeModal from "@/components/FirstTimeModal";

export default function Home() {
  return (
    <>
      <Header />
      <FirstTimeModal />
      <Hero1 />
      <Carousel />
      <CampaignSection />
      <DonationSection />
      <MissionSection
        title="Humane World for Animals"
        subtitle="Who We Are"
        description={`For over 70 years, Humane World for Animals, formerly called the Humane Society of the United States and Humane Society International, has worked around the globe to tackle the root causes of animal cruelty and suffering to create permanent change.<br>
        Driving toward the greatest global impact, we aim to achieve the vision behind our name: a more humane world.`}
        buttonText="Find Out"
        imageSrc={hero2}
        bgColor="bg-[#f8f8f8]"
        alignment="md:flex-row-reverse"
        textColor="text-black"
        headingColor="text-[#00352C]"
        buttonBgColor="bg-[#00352C] transition duration-300 ease-in-out transform hover:bg-white hover:text-[#00352C] border border-[#00352C]"
        url={'https://www.humaneworld.org/en/about-us/our-history'}
      />
      <MissionSection
        title="Bold work, global mission"
        subtitle="What We Do"
        description={`With millions of supporters and work happening in over 50 countries, we address the most deeply entrenched forms of animal cruelty and suffering by working on the biggest problems and creating long-term solutions for lasting change.<br>
        As the leading voice in the animal protection space, we work to end the cruelest practices, care for animals in crisis and build a stronger animal protection movement. Together, we can end animal cruelty.`}
        buttonText="Find Out"
        imageSrc={mission}
        bgColor="bg-[#00352C]"
        alignment="md:flex-row"
        textColor="text-white"
        headingColor="text-[#5EC9FF]"
        imageMargin="ml-auto"
        buttonBgColor="bg-[#009CEB] transition duration-300 ease-in-out transform hover:bg-white hover:text-[#009CEB] border border-[#009CEB]"
        url={'https://www.humaneworld.org/en/our-mission-and-impact'}
      />
      <VideoSection />
      <BlogSection />
      <NewsletterSection />
      <Footer />
    </>
  );
}
