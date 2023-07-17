import { images } from "../constants";

const HeaderContent = () => {
  return (
    <div className="container mx-auto flex justify-between ">
      <div className=" w-{539}">
        <h1 className=" text-6xl font-semibold">
          Read the most interesting articles
        </h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua
        </p>
        <div>
          <input type="text" placeholder="Search article" />
          <button
            className=" bg-blue-500 py-1 px-4 text-sm text-white font-semibold rounded-md border-2 border-blue-500 hover:bg-white hover:text-blue-500 transition-colors duration-300
          ">
            Search
          </button>
        </div>
        <div>
          <h6>Popular Tags :</h6>
          <span>Design</span>
          <span>User Experience</span>
          <span>User Interfaces</span>
        </div>
      </div>
      <div>
        <img src={images.headerThump} alt="header thumbed" />
      </div>
    </div>
  );
};

export default HeaderContent;
