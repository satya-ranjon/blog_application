import { images } from "../../../constants";

const Search = () => {
  return (
    <div className=" sm:bg-white  flex flex-col gap-2 sm:flex-row shadow-xl shadow-slate-200 sm:p-2">
      <div className="p-1 bg-white sm:bg-none flex gap-1 items-center justify-start sm:w-full shadow-md sm:shadow-none shadow-gray-200">
        <img src={images.search} alt="" className="p-1 w-6 h-6" />
        <input
          className="placeholder:text-[#959EAD] placeholder:font-bold outline-none p-1 w-full bg-transparent"
          type="text"
          placeholder="Search article"
        />
      </div>
      <button
        className="w-full sm:w-24 bg-blue-500 py-2 px-4 text-sm text-white font-semibold rounded-md border-2 border-blue-500 hover:bg-white hover:text-blue-500 transition-colors duration-300
          ">
        Search
      </button>
    </div>
  );
};

export default Search;
