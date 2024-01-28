import { Rubik } from "next/font/google";

interface HeadingProps {
  children: React.ReactNode;
  level: 1 | 2 | 3 | 4 | 5 | 6;
  className?: string;
}

export const Heading = ({ children, level, className }: HeadingProps) => {
  switch (level) {
    case 1:
      return (
        <h1 className={`font-bold text-[3rem] md:text-[4rem]  leading-normal ${className}`}>
          {children}
        </h1>
      );
    case 2:
      return (
        <h2 className={`font-bold text-[2.5rem] leading-15 ${className}`}>
          {children}
        </h2>
      );
    case 3:
      return (
        <h3 className={`font-bold text-[2rem] leading-12 ${className}`}>
          {children}
        </h3>
      );
    case 4:
      return (
        <h4 className={`font-normal text-[1.25rem] leading-normal ${className}`}>
          {children}
        </h4>
      );
    case 5:
      return (
        <h5 className={`font-normal font-semibold text-[1rem] leading-7 ${className}`}>
          {children}
        </h5>
      );
    case 6:
      return (
        <h6 className={`font-normal text-[1.125rem] leading-9 ${className}`}>
          {children}
        </h6>
      );
    default:
      break;
  }
};
