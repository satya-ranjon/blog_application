import { images } from "../../../constants";
import Search from "../../../components/Search";
import Tags from "../../../components/Tags";
import { popularTags } from "../../../data/tags";

const HeroSection = () => {
  return (
    <div className="container flex flex-col px-4 sm:px-20 lg:px-5 xl:px-0 mx-auto  py-5 lg:flex-row justify-center lg:justify-between items-center text-center lg:text-left mt-10 sm:mt-16">
      <div className=" max-w-[539px]">
        <>
          <h1 className="text-2xl font-bold sm:text-5xl lg:text-[2.85rem] xl:text-[56px] m-auto  text-dark-soft">
            Read the most interesting articles
          </h1>
          <p className="text-base sm:text-xl text-dark-light py-4 ">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua
          </p>
        </>
        <Search />
        <Tags heading="Popular Tags" tags={popularTags} />
      </div>
      <div className=" hidden lg:block max-w-[700px] ">
        <img
          src={images.headerThump}
          alt="header thumbed"
          className="w-full "
        />
      </div>
    </div>
  );
};

export default HeroSection;
