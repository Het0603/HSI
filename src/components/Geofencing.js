import Image from "next/image";
import geofencing from "../../public/geofencing.jpg";

export default function Geofencing() {
  return (
    <section className="flex flex-col-reverse md:flex-row items-center justify-between py-24 bg-gray-100 gap-8 px-6 md:px-16 lg:px-24">
      <div className="md:w-1/2">
        <div className="overflow-hidden rounded-4xl relative group">
          <div className="transition-all duration-300 transform group-hover:scale-105 ease-in-out">
            <Image
              src={geofencing}
              alt="Map with Geofencing"
              className="rounded-4xl w-full h-[24rem]"
            />
          </div>
        </div>
      </div>
      <div className="md:w-1/2 p-4">
        <h1 className="text-2xl md:text-4xl lg:text-7xl font-semibold text-[#005944]">Geofencing</h1>
        <p className="mt-4 sm:text-xl md:text-2xl max-w-[29rem]">
          Divide and conquer large vaccination efforts by splitting teams into smaller areas. Setting up a geo-fence (virtual boundary) for each team will ensure no overlap in vaccination efforts. The app will keep users in their assigned area and warn them if they go outside the geo-fence.
        </p>
      </div>
    </section>
  );
};