import CrappoLogo from "@/components/molecules/Logo/CrappoLogo";
import NavLayout from "@/components/molecules/Nav/Navlayout";

const Header: React.FC = () => {
  return (
    <div className="flex flex-row items-center justify-between w-full">
      <CrappoLogo />
      <NavLayout />
    </div>
  );
};

export default Header;
