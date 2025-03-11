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

export default function Home() {
  return (
    <>
      <Header />
      <Hero1 />
      <Carousel />
      <MissionSection />
      <CampaignSection />
      <DonationSection />
      <BlogSection />
      <VideoSection />
      <NewsletterSection />
      <Footer />
    </>
  );
}
