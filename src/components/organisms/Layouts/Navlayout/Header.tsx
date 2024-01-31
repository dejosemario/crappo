import CrappoLogo from "@/components/molecules/Logo/CrappoLogo";
import NavLayout from "@/components/molecules/Nav/Navlayout";
import NavMobile from "@/components/molecules/Nav/NavMobile";

const Header: React.FC = () => {
  return (
    <div className="fixed top-0 z-20 w-full bg-[#0D0D2B] shadow-xl py-6">
      <div className="container">
        <NavMobile />
        <NavLayout />
      </div>
    </div>
  );
};

export default Header;
