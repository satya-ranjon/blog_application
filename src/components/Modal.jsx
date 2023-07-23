import ReactDOM from "react-dom";

const Modal = ({ isOpen = false, onClose, children }) => {
  if (!isOpen) return null;

  return ReactDOM.createPortal(
    <div className="w-full  h-full fixed top-0 left-0 overflow-hidden flex justify-center items-center bg-[#000000c4]">
      <div className="relative top-[-20%] w-[50%] bg-white p-5 border-gray-500  shadow-[rgba(50,50,93,0.25)_0px_6px_12px_-2px,_rgba(0,0,0,0.3)_0px_3px_7px_-3px] ">
        <button
          className="absolute top-2 right-2 w-10 h-10 rounded-lg bg-red-100 text-red-400 flex justify-center items-center cursor-pointer hover:bg-red-200 hover:text-red-500 duration-100 -z-0"
          onClick={onClose}
          aria-label="Close Modal">
          X
        </button>
        <div className=" mt-8 p-3">{children}</div>
      </div>
    </div>,
    document.body
  );
};

export default Modal;

// bg-[#000000c4]
