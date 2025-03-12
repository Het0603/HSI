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

export default function MassVaccination() {
  return (
    <div>
      <Header />
      <Hero
        imageSrc={hero2}
        title="Mass Vaccination"
        description="Optimize mass vaccination efforts by leveraging technology with customized workflows. Organize large projects by deploying teams to smaller areas with geofences for vaccination and surveys. The Android field app streamlines data collection and increases team throughput while the web app ensures program managers meet their vaccination objectives." 
        />
      <Geofencing
        imageSrc={geofencing}
        title="Geofencing"
        description={`Divide and conquer large vaccination efforts by splitting teams into smaller areas. Setting up a geo-fence (virtual boundary) for each team will ensure no overlap in vaccination efforts. The app will keep users in their assigned area and warn them if they go outside the geo-fence.`}
      />
      <DataReview
        imageSrc={dataReviewImg}
        title="Real-time Dashboards & Data review"
        description={`he dashboard feature allows for realtime project status and decision making. Admin users can get a real-time bird’s-eye view of the Project on maps, monitoring areas or smaller streets that might be overlooked. These features increase team coordination and prevent potential missed areas.`}
      />
      <DataReview2
        imageSrc={dataReviewImg2}
        title="Reporting & Data Export"
        description={`The HSIApps Web application provides a dynamic reporting system with options to view pre-defined reports in PDF format and download data into CSV for custom analysis.`}
      />
      <SurveyFeature />
      <FieldData
        imageSrc={fieldDataImg}
        title="Field Data Gathering with Offline Sync"
        description={`Record animal’s picture, GPS location, and other information about each animal vaccinated. Offline/Sync feature enables smooth handling of connectivity issues.`}
      />
      <Footer />
    </div>
  );
}
