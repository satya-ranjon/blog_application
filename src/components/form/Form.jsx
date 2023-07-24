import InputField from "./InputField";
import { Link, useLocation } from "react-router-dom";

const Form = () => {
  const { pathname } = useLocation();
  const isLoginFm = pathname === "/login";

  return (
    <div className=" w-full sm:w-[50%]  lg:w-[40%] xl:w-[30%]">
      <form>
        {!isLoginFm && <InputField label="Name" placeholder="Enter name" />}
        <InputField label="Email address" placeholder="Enter email" />
        <InputField label="Password" placeholder="Enter password" />
        <Link to="/" className=" font-normal text-xs text-sky-500 my-4 block">
          Forgot password?
        </Link>
        <button className=" font-bold text-sm w-full p-2 bg-sky-600 text-white my-4 rounded-md block">
          {isLoginFm ? "Login" : "Register"}
        </button>
      </form>
      <p className=" text-sm text-dark-light ">
        You have {isLoginFm ? " no " : " an "} account ?
        <Link
          to={isLoginFm ? "/sign-up" : "/login"}
          className=" text-sky-500 font-semibold  text-base pl-3">
          {isLoginFm ? "Register now" : "  Login now"}
        </Link>
      </p>
    </div>
  );
};

export default Form;
