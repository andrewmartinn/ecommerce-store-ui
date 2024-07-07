import { GoPlus } from "react-icons/go";
import Hero from "../../../assets/hero.jpg";

const HeroSection = () => {
  return (
    <section className="lg:bg-none bg-cover bg-center bg-mobile-bg saturate-50 lg:filter-none h-[700px]">
      <div className="flex flex-col lg:flex-row ">
        <div className="w-full lg:[60%] h-[720px]">
          <div className="flex flex-col justify-start py-[10rem] items-center h-full text-center lg:justify-center lg:bg-hero-bg lg:bg-cover bg-no-repeat lg:grayscale ">
            <p className="text-3xl font-bold text-white lg:text-6xl  lg:font-mono">
              New Autum / Winter
            </p>
            <br />
            <p className="text-3xl font-bold text-white lg:text-6xl  lg:font-mono">
              Collection 2024
            </p>
            <button className="uppercase flex items-center gap-2 px-6 py-2 bg-zinc-700 text-white mt-8">
              Explore <GoPlus />
            </button>
          </div>
        </div>
        <div className="hidden lg:block lg:w-[40%] h-[720px]">
          <img
            src={Hero}
            alt="hero image"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  );
};
export default HeroSection;
