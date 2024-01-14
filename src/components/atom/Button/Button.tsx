import { AiOutlineRight } from "react-icons/ai";

interface ButtonProps {
  children: React.ReactNode;
  withIcon?: boolean | false;
  outlined?: boolean;
  hover?: boolean | true;
}

export const Button = ({
  children,
  withIcon,
  outlined,
  hover,
}: ButtonProps) => {
  return (
    <button
      className={` ${
        outlined ? " text-black bg-white" : "text-white"
      } py-2 px-4 rounded-full flex flex-row items-center bg-[#3671E9]`}
    >
      <span className={`${hover && "hover:opacity-100"} `}>{children}</span>
      {withIcon && (
        <span className={"bg-white p-1 ml-4 rounded-full text-[#3671E9] "}>
          <AiOutlineRight />
        </span>
      )}
    </button>
  );
};
