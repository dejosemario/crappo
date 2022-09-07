export const Heading = ({ level, children, className }) => {
   switch (level) {
      case 1:
         return <h1 className={`font-bold text-[4rem] leading-[76px] ${className}`}>{children}</h1>;
      case 2:
         return <h2 className={`font-bold text-[40px] leading-[60px] ${className}`}>{children}</h2>;
      case 3:
         return <h3 className={`font-bold text-[32px] leading-[48px] ${className}`}>{children}</h3>;
      case 4:
         return <h4 className={`font-medium text-xl leading-[30px] ${className}`}>{children}</h4>;
      case 5:
         return <h5 className={`font-medium text-lg leading-[28px] ${className}`}>{children}</h5>;
      case 6:
         return <h6 className={`font-medium text-base leading-[26px] ${className}`}>{children}</h6>;
      default:
         break;
   }
};
