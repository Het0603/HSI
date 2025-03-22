import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero2";
import Geofencing from "@/components/Geofencing";
import DataReview from "@/components/DataReview";
import DataReview2 from "@/components/DataReview2";
import hero3 from '../../../public/hero3.jpg';
import pmCatching2 from "../../../public/pm-catching2.jpg";
import catching1 from "../../../public/catching1.jpeg";
import catching2 from "../../../public/catching2.jpeg";
import catching3 from "../../../public/catching3.jpeg";
import release1 from "../../../public/release1.jpeg";
import release2 from "../../../public/release2.jpeg";
import release3 from "../../../public/release3.jpeg";
import SurveyFeature from "@/components/SurveyFeature";

export default function PopulationManagement() {
  return (
    <div>
      <Header />
      <Hero
        imageSrc={hero3}
        title="Population Management"
        subHeader='Humane Animal Population Control with Innovative Field Operations'
        description="The Population Management Program addresses the critical need for ethical and effective animal birth control measures. Our digital solutions facilitate humane capture, sterilization, recovery, and release processes, ensuring complete transparency and traceability throughout each step.​"
      />
      <Geofencing
        imageSrc={pmCatching2}
        title="How It Works"
        description={`
          <p><strong>Project Setup:</strong> Project Managers establish area-specific population control projects utilizing digital mapping and KML files.</p>
          <p><strong>Role Assignment:</strong> Field team members are designated roles such as Catch & Release Users and Clinical Users.</p>
          <p><strong>Humane Capture:</strong> Catch & Release Users safely capture animals and coordinate their transport to veterinary clinics.</p>
          <p><strong>Clinical Procedures:</strong> Clinical Users perform sterilization surgeries, monitor recovery, and manage the release of animals back to their original habitats.</p>
        `}
      />
      <DataReview
        imageSrc={catching1}
        imageSrc2={catching2}
        imageSrc3={catching3}
        title="Technology in Action"
        description={`
          <p><strong>RFID Tagging:</strong> Implementation of RFID technology for precise animal identification and tracking.</p>
          <p><strong>GPS Coordination:</strong> Utilization of GPS for accurate field assignments and activity monitoring.</p>
          <p><strong>Digital Clinic Management:</strong> Streamlined clinical workflows and recovery records through digital platforms.</p>
          <p><strong>Comprehensive Documentation:</strong> Detailed records of each animal's journey from capture to release.</p>
        `}
        multi={true}
      />
      <DataReview2
        imageSrc={release1}
        imageSrc2={release2}
        imageSrc3={release3}
        title="Impact Highlights"
        description={`
          <p><strong>Population Control:</strong> Achieving sustainable reductions in stray animal populations.</p>
          <p><strong>Ethical Practices:</strong> Ensuring humane treatment and care for all animals involved.</p>
          <p><strong>Transparency:</strong> Maintaining clear and accessible records for accountability and public trust.</p>
        `}
        multi={true}
      />
      <SurveyFeature
      imageSrc={catching3}
        description={`
          <p><strong>Our commitment ensures that every animal is treated with compassion and respect throughout the process.<strong></p>
        `}
      />
      <Footer />
    </div>
  );
}
