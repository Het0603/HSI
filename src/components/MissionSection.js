import Image from "next/image";
import mission from "../../public/mission.jpg"; // Update the correct image path

export default function missionSection() {
  return (
    <section className="bg-[#005944] text-white py-10 px-4 sm:px-12 md:px-16 lg:px-24 mt-16">
      <div className="flex flex-col md:flex-row items-center md:items-start gap-8 items-center">
        <div className="md:w-1/2 text-center md:text-left">
          <p className="text-[#FFC701] font-semibold">What We Do</p>
          <h2 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl text-[#5EC9FF] font-bold mt-2">
            Bold work, global mission
          </h2>
          <p className="mt-4 sm:text-lg leading-relaxed max-w-[33rem]">
            For more than 70 years, Humane World for Animals — previously called the Humane Society of the United States and Humane Society International — has been a leader of the animal protection movement.
          </p>
          <p className="mt-4 sm:text-lg max-w-[31rem]">
            Discover what we’re doing to stop animal cruelty and suffering for good.
          </p>
          <button className="mt-6 bg-[#009CEB] px-5 sm:px-6 py-2 rounded-lg sm:rounded-xl text-white text-base sm:text-lg md:text-xl">
            Find out
          </button>
        </div>

        <div className="md:w-1/2">
          <div className="overflow-hidden relative group" style={{ clipPath: "ellipse(60% 70% at 50% 50%)" }}>
            <div className="transition-all duration-300 transform group-hover:scale-105 ease-in-out">
              <Image
                src={mission}
                alt="Mission Image"
                className="object-cover"
                // style={{ clipPath: "ellipse(60% 70% at 50% 50%)" }}
              />
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
