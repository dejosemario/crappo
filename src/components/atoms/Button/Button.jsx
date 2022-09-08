import { AiOutlineRight } from "react-icons/ai";
export const Button = ({
  children,
  bgColor = "bg-blue-100",
  withIcon = false,
  outlined = false,
  hover = true,
  className="",
  spanClass="",
}) => {
  return (
    <button
      className={`${bgColor} ${className} ${outlined
        ? "bg-transparent text-black outline outline-1 outline-dark"
        : "text-white"
        } py-1 px-4 rounded-full flex flex-row items-center`}
    >
      <span className={`${hover && "hover:opacity-100"} ${spanClass}`}>
        {children}
      </span>
      {withIcon && <span className={"bg-white p-2 ml-4 rounded-full text-blue-100 "}><AiOutlineRight /></span>}
    </button>
  );
};
