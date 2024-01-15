import { NextImage } from "@/components/atom/NextImage/NextImage";
import Flatbtc from "/src/public/images/flat-btc.svg";
import Line1 from "/src/public/images/line1.png";
import Line2 from "/src/public/images/line2.png";
import { Button } from "@/components/atom/Button/Button";
import Text from "@/components/atom/Text/Text";
import { Heading } from "@/components/atom/Heading/Heading";
import Ivcard from "@/components/molecules/IvCard/IvCard";

const HeroLayout: React.FC = () => {
  return (
    <div className="relative">
      <div className="flex mt-[32px] w-full justify-between ">
        <div className="flex-1">
          <div className="flex bg-white-10 w-[365px] pr-[11px] pl-1 py-1 rounded-[32px] gap-4 items-center mt-[100px]">
            <Button outlined>75% SAVE</Button>
            <Text>For the Black Friday weekend</Text>
          </div>
          <div className="max-w-[588px]">
            <Heading level={1} className="pt-8">
              Fastest & Secure Platform to invest in crypto
            </Heading>
          </div>
          <Text className="max-w-[435px]">
            Buy and sell cryptocurrencies, trusted by 10M wallets with over $30
            billion in transactions.
          </Text>
          <div className="mt-8">
            <Button withIcon>Try for FREE</Button>
          </div>
        </div>
        <div className="w-full flex-1 justify-center flex">
          <NextImage imgUrl={Flatbtc} alt="Bitcon-hero-logo" />
        </div>
      </div>
      <div className="absolute top-[370px] z-[-1]   ">
        <NextImage imgUrl={Line1} alt="Bitcon-hero-log" />
      </div>
      <div className="absolute top-[250px] left-[700px]  right-[-200px] z-[-1] ">
        <NextImage imgUrl={Line2} alt="Bitcon-hero-log" />
      </div>
      <Ivcard />
    </div>
  );
};

export default HeroLayout;
