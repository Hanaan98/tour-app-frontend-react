import Hero from "../components/Hero/Hero";
import FeaturedTours from "../components/FeaturedTours/FeaturedTours";
import Gallery from "../components/Gallery/Gallery";

const Home = () => {
  return (
    <div className="section_margin flex flex-col gap-10">
      <Hero />
      <FeaturedTours />
    </div>
  );
};

export default Home;
