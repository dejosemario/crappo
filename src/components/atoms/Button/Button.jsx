import { AiOutlineRight } from "react-icons/ai";
export const Button = ({
  children,
  url,
  bgColor,
  withIcon = false,
  outlined = false,
  hover = true,
  className,
  spanClass,
}) => {
  return (
    <button
      className={`${className} ${bgColor || "bg-blue-100"} ${
        outlined
          ? "bg-transparent text-black outline outline-1 outline-dark"
          : "text-white"
      } py-4 pl-8 pr-8 rounded-full flex flex-row items-center`}
    >
      <span className={`${hover && "hover:opacity-100"} ${spanClass}`}>
        {children}
      </span>
      {withIcon && <AiOutlineRight className="ml-6  bg-white rounded-full text-blue-100 -mr-4 my-[10px] mx-[10px]"/>}
    </button>
  );
};
