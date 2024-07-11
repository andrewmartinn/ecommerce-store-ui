import Hero from "../../../assets/hero.jpg";

const HeroSection = () => {
  return (
    <section className="lg:bg-none bg-cover bg-center bg-mobile-bg saturate-50 lg:filter-none h-[700px]">
      <div className="flex flex-col lg:flex-row ">
        <div className="w-full lg:[60%] h-[720px]">
          <div className="flex flex-col justify-start py-[16rem] items-center h-full text-center lg:justify-center lg:bg-hero-bg lg:bg-cover bg-no-repeat lg:grayscale ">
            <p className="text-3xl font-bold text-white lg:text-6xl lg:font-mono">
              New Autum / Winter
            </p>
            <br />
            <p className="text-3xl font-bold text-white lg:text-6xl lg:font-mono">
              Collection 2024
            </p>
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
