import { images } from "../../../constants";

const CTA = () => {
  return (
    <>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
        className="w-full h-auto max-h-40"
        viewBox="0 0 1440 175"
        fill="none">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M1440 175H0V0C240 53.3333 480 80 720 80C960 80 1200 53.3333 1440 0V175Z"
          fill="#0D2436"
        />
      </svg>
      <section className=" px-4 sm:px-20 lg:px-5 xl:px-0 bg-dark-hard">
        <div className="container mx-auto">
          <div className="w-[95%] lg:pb-24 flex  flex-col-reverse justify-center items-center lg:flex-row lg:justify-between lg:gap-5 ">
            <div>
              <h1 className="text-2xl sm:text-center font-bold	text-white font-roboto sm:text-4xl pt-8">
                Get our stories delivered From us to your inbox weekly.
              </h1>
              <div className=" flex gap-4 flex-col sm:flex-row py-5 font-opensans">
                <input
                  type="text"
                  placeholder="Email"
                  className=" w-full outline-none placeholder:text-dark-light font-normal text-base p-4 rounded-md "
                />
                <button
                  className="w-full sm:w-56 bg-blue-500 p-4 text-base text-white font-bold rounded-md border-2 border-blue-500 hover:bg-white hover:text-blue-500 transition-colors duration-300
          ">
                  Get started
                </button>
              </div>
              <p className=" font-opensans text-[#5A7184] py-10 sm:text-center">
                <span className="font-bold text-[#B3BAC5] sm:font-normal sm:text-[#5A7184]">
                  Get a response tomorrow
                </span>
                if you submit by 9pm today. If we received after 9pm will get a
                reponse the following day.
              </p>
            </div>

            <div className="relative z-10 hidden  sm:block">
              <div className="max-w-[466px] p-2 rounded-md bg-white hidden sm:block ">
                <img src={images.fb} alt="fb-ms" />
                <h1 className=" text-2xl text-dark-soft font-bold p-2 my-2">
                  The best aticles every week
                </h1>
                <p className=" text-lg text-dark-light font-normal p-2 my-2">
                  Our insurance plans offers are priced the same everywhere
                  else.
                </p>
              </div>
              <div className=" w-[250px] h-[200px] rounded-md bg-red-500 absolute top-10 -right-12 -z-10"></div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CTA;
