import About from "../components/About";
import HeroImg from "../components/HeroImg";
import HomeTitle from "../components/HomeTitle";

const HomePage = () => {
  // prettier-ignore
  return (
    <div className="flex flex-col items-center p-8 w-full ">
    <HomeTitle></HomeTitle>
    <HeroImg></HeroImg>
    <About></About>
    </div>

  );
};

export default HomePage;
