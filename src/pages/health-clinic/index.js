import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero2";
import Geofencing from "@/components/Geofencing";
import DataReview from "@/components/DataReview";
import DataReview2 from "@/components/DataReview2";
import SurveyFeature from "@/components/SurveyFeature";
import FieldData from "@/components/FieldData";
import hero2 from '../../../public/hero2.jpg'
import geofencing from "../../../public/geofencing.jpg";
import dataReviewImg from "../../../public/dataReview.png";
import dataReviewImg2 from "../../../public/dataReview2.jpg";
import fieldDataImg from "../../../public/fieldData.png";

export default function HealthClinic() {
  return (
    <div>
      <Header />
      <Hero
        imageSrc={hero2}
        title="Health Clinic"
        description="The Health Clinic Program is dedicated to enhancing the well-being of animals through routine and emergency medical care. Supported by Humane World Apps, our field teams conduct community-based veterinary interventions, ensuring that all animals receive the care they need." 
        />
      <Geofencing
        imageSrc={geofencing}
        title="Community-Based Interventions"
        description={`Our field teams work directly within communities to identify and address the medical needs of animals.`}
      />
      <DataReview
        imageSrc={dataReviewImg}
        title="Veterinary Care"
        description={`We offer both routine health check-ups and emergency medical services to ensure every animal is cared for at the right time.`}
      />
      <DataReview2
        imageSrc={dataReviewImg2}
        title="Accessible to All"
        description={`Our mission is to ensure that veterinary care is available to animals from all walks of life, regardless of location or financial means.`}
      />
      <SurveyFeature />
      <FieldData
        imageSrc={fieldDataImg}
        title="Technology-Driven"
        description={`Powered by Humane World Apps, we use innovative tools to streamline service delivery, track health records, and ensure that care is provided efficiently.`}
      />
      <Footer />
    </div>
  );
}
