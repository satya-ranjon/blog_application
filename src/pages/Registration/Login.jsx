import Form from "../../components/Form/Form";
import Header from "../../components/Header";

const SignUp = () => {
  return (
    <>
      <Header />
      <div className="container mx-auto p-2  flex flex-col justify-center items-center h-[90vh] ">
        <h1 className=" text-center text-dark-soft text-3xl font-bold font-roboto ">
          Login
        </h1>
        <Form />
      </div>
    </>
  );
};

export default SignUp;
