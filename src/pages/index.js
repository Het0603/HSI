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
        description={`formerly known as the Humane Society of the United States (HSUS) and Humane World Apps, we have been champions for animal welfare since 1954.<br>
        Our mission is to confront and eliminate cruelty to animals worldwide, addressing issues ranging from factory farming and the fur trade to wildlife conservation and companion animal protection.`}
        buttonText="Find out"
        imageSrc={hero2}
        bgColor="bg-[#f8f8f8]"
        alignment="md:flex-row-reverse"
        textColor="text-black"
        headingColor="text-[#00352C]"
        buttonBgColor="#00352C"
      />
      <MissionSection
        title="Bold work, global mission"
        subtitle="What We Do"
        description={`For more than 70 years, Humane World for Animals — previously called the Humane Society of the United States and Humane Society International — has been a leader of the animal protection movement.<br>
        Discover what we’re doing to stop animal cruelty and suffering for good.`}
        buttonText="Find out"
        imageSrc={mission}
        bgColor="bg-[#00352C]"
        alignment="md:flex-row"
        textColor="text-white"
        headingColor="text-[#5EC9FF]"
        imageMargin="ml-auto"
      />
      <VideoSection />
      <BlogSection />
      <NewsletterSection />
      <Footer />
    </>
  );
}
