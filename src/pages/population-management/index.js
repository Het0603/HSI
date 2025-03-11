import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero2";
import Geofencing from "@/components/Geofencing";
import DataReview from "@/components/DataReview";
import DataReview2 from "@/components/DataReview2";
import hero3 from '../../../public/hero3.jpg';
import pmCatching2 from "../../../public/pm-catching2.jpg";
import dataReviewImg3 from "../../../public/dataReview3.png";
import dataReviewImg4 from "../../../public/dataReview4.jpg";
import fieldDataImg2 from "../../../public/fieldDataImg2.png";

export default function PopulationManagement() {
  return (
    <div>
      <Header />
      <Hero
        imageSrc={hero3}
        title="Population Management"
        description="Streamline population management efforts by optimizing workflow throughout the catch, neuter & release process.  Field users gather field & clinical data for program monitoring using a mobile app while administrators setup projects and analyze results through a web app."
      />
      <Geofencing
        imageSrc={pmCatching2}
        title="Field Data Gathering with Offline Sync"
        description={`Record animal picture,  GPS location,  and other information about each animal captured.<br><br>
                Offline/Sync feature enables smooth handling of connectivity issues.<br><br>
                Designed for field work, the app has been designed to work with poor internet connectivity — data is cached to sync later when better connectivity is restored. This feature ensures tamper-proof data and improves standardization.<br>`}
      />
      <DataReview
        imageSrc={dataReviewImg3}
        title="Release Map & GPS “lock”"
        description={`Optimally route plan releasing animals by mapping all target release destinations<br>
                The GPS lock feature requires the field team to release an animal within 15M of where it was picked up ensuring the animal isn’t stressed by having to find a new home and pack`}
      />
      <DataReview2
        imageSrc={dataReviewImg4}
        title="Clinic records management"
        description={`From capture to clinic care to release, a built-in health records system captures all the details of the sterilization procedure as well as exams or other treatments while the animal is in-care at the clinic<br><br>
                A sister phone app facilitates RFID barcode scanning.  Both the web app and phone app are designed to handle spotty internet connections caching data until connections are restored.`}
      />
      <DataReview
        imageSrc={fieldDataImg2}
        title="Reporting & Data Export"
        description={`The HSIApps Web application provides a dynamic reporting system with options to view pre-defined reports and download data into CSV for custom analysis.`}
      />
      <Footer />
    </div>
  );
}
