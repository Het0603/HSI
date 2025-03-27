import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero2";
import Geofencing from "@/components/Geofencing";
import DataReview from "@/components/DataReview";
import DataReview2 from "@/components/DataReview2";
import hero2 from '../../../public/hero2.jpg'
import HealthClinicImg from "../../../public/healthClinic.jpg";
import healthClinicImg1 from "../../../public/healthClinicImg1.jpeg";
import healthClinicImg2 from "../../../public/healthClinicImg2.jpeg";

export default function HealthClinic() {
  return (
    <div>
      <Header />
      <Hero
        imageSrc={hero2}
        title="Health Clinic"
        subHeader='Delivering Essential Medical Care to Community Animals'
        description="The Health Clinic Program is dedicated to enhancing the well-being of animals through routine and emergency medical care. Supported by Humane World Apps, our field teams conduct community-based veterinary interventions, ensuring that all animals receive the care they need." 
        />
      <Geofencing
        imageSrc={HealthClinicImg}
        title="How It Works"
        description={`
          <p><strong>Campaign Launch:</strong> Project Managers initiate health campaigns and assign specific tasks to field users within targeted communities.</p>
          <p><strong>Field Interventions:</strong> Field teams provide medical services, including deworming, vaccinations, treatments, and other clinical interventions.</p>
          <p><strong>Real-Time Documentation:</strong> Each medical activity is recorded in real-time using mobile applications, ensuring accuracy and accountability.</p>
        `}        
      />
      <DataReview
        imageSrc={healthClinicImg1}
        title="Technology in Action"
        description={`
          <p><strong>Community Mapping:</strong> Identification and prioritization of areas requiring medical attention.</p>
          <p><strong>Mobile Data Capture:</strong> Efficient and accurate data entry by field teams through user-friendly mobile interfaces.</p>
          <p><strong>Health Monitoring:</strong> Continuous tracking of animal health records and treatment outcomes.</p>
          <p><strong>Outcome Analysis:</strong> Utilization of visual dashboards to assess program effectiveness and areas for improvement.</p>
        `}     
        multi={false}   
      />
      <DataReview2
        imageSrc={healthClinicImg2}
        title="Impact Highlights"
        description={`
          <p><strong>Enhanced Health:</strong> Improved overall health and quality of life for community animals.</p>
          <p><strong>Preventive Care:</strong> Early detection and treatment of diseases, reducing the spread within populations.</p>
          <p><strong>Empowered Teams:</strong> Field teams equipped with advanced tools to deliver effective and compassionate care.</p>
        `} 
        multi={false}       
      />
      <Footer />
    </div>
  );
}
