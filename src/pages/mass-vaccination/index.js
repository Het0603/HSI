import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero2";
import Geofencing from "@/components/Geofencing";
import DataReview from "@/components/DataReview";
import DataReview2 from "@/components/DataReview2";
import SurveyFeature from "@/components/SurveyFeature";
import hero2 from '../../../public/hero2.jpg'
import geofencing from "../../../public/geofencing.jpg";
import dataReviewImg from "../../../public/dataReview.jpeg";
import dataReviewImg2 from "../../../public/dataReview2.jpeg";

export default function MassVaccination() {
  return (
    <div>
      <Header />
      <Hero
        imageSrc={hero2}
        title="Mass Vaccination"
        subHeader="Optimize mass vaccination efforts by leveraging technology with customized workflows."
        description="Humane World's Mass Vaccination Program helps prevent deadly diseases like rabies in community animals. With advanced tools, our teams run organized, trackable, and high-impact vaccination campaigns." 
        />
      <Geofencing
        imageSrc={geofencing}
        title="How It Works"
        description={`
          <p><strong>Project Initiation:</strong> Project Managers launch vaccination projects by defining specific geographical zones using intuitive KML tools.</p>
          <p><strong>Team Assignment:</strong> Designated areas are assigned to field team members with roles as Surveyors and Vaccinators.</p>
          <p><strong>Survey and Data Collection:</strong> Surveyors perform initial assessments to document the number of vaccinated and unvaccinated animals within the target areas.</p>
          <p><strong>Vaccination Drives:</strong> Vaccinators execute systematic vaccination efforts in their assigned zones, ensuring comprehensive coverage.</p>
        `}        
      />
      <DataReview
        imageSrc={dataReviewImg}
        title="Technology in Action"
        description={`
          <p><strong>Digital Mapping:</strong> Accurate delineation of campaign areas using advanced mapping tools.</p>
          <p><strong>Real-Time Data Tracking:</strong> Continuous monitoring of vaccination statuses through integrated data systems.</p>
          <p><strong>Mobile Field Reporting:</strong> Field teams utilize mobile applications for immediate data entry and reporting.</p>
          <p><strong>Analytical Dashboards:</strong> Project performance is analyzed through comprehensive web-based dashboards, facilitating informed decision-making.</p>
        `}   
        multi={false}     
      />
      <DataReview2
        imageSrc={dataReviewImg2}
        title="Impact Highlights"
        description={`
          <p><strong>Disease Prevention:</strong> Significant reduction in the risk of zoonotic disease outbreaks.</p>
          <p><strong>Resource Optimization:</strong> Enhanced allocation and utilization of resources for maximum efficiency.</p>
          <p><strong>Data-Driven Strategies:</strong> Empowered planning and execution of future campaigns based on empirical data.</p>
        `} 
        multi={false}       
      />
      <SurveyFeature 
      description={`
        <p><strong>Together, we are fostering safer environments for both animals and communities.</strong></p>
      `}
      />
      <Footer />
    </div>
  );
}
