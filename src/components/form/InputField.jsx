const InputField = ({ type = "text", label, ...argument }) => {
  return (
    <div className=" my-4">
      <label htmlFor={label} className="text-[#5A7184] text-base	 font-semibold">
        {label}
      </label>
      <input
        type={type}
        id={label}
        {...argument}
        className="w-full p-2 rounded-md text-sm placeholder:text-[#959EAD] text-dark-soft outline-none border-2 font-normal font-roboto border-[#C3CAD9]"
      />
    </div>
  );
};

export default InputField;
