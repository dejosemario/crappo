import { NextImage } from "@/components/atom/NextImage/NextImage";
import Flatbtc from "/src/public/images/flat-btc.svg";
import Line1 from "/src/public/images/Ambient/line1.png";
import Line2 from "/src/public/images/Ambient/line2.png";
import { Button } from "@/components/atom/Button/Button";
import Text from "@/components/atom/Text/Text";
import { Heading } from "@/components/atom/Heading/Heading";
import Ivcard from "@/components/molecules/IvCard/IvCard";

const HeroLayout: React.FC = () => {
  return (
    <div className="relative">
      <div className="flex mt-[2rem] w-full flex-col md:flex-row">
        <div className="md:flex-1 w-full">
          <div className="flex bg-white-10 md:w-[22.813rem] pr-[0.6875rem] md:pl-0.0625rem py-0.0625rem rounded-[2rem] gap-4 items-center mt-[4rem] md:mt-[6.25rem] cursor-pointer">
            <Button outlined className="text-sm md:text-base">
              75% SAVE
            </Button>
            <Text className="text-sm  md:text-base">
              For Black Friday weekend
            </Text>
          </div>
          <div className="w-full md:w-[36.75rem] mt-6">
            <Heading level={1} className="pt-0.5rem">
              Fastest & Secure Platform to invest in crypto
            </Heading>
          </div>
          <Text className="max-w-[27.188rem] mt-6">
            Buy and sell cryptocurrencies, trusted by 10M wallets with over $30
            billion in transactions.
          </Text>
          <div className="mt-[2rem]">
            <Button withIcon>Try for FREE</Button>
          </div>
        </div>
        <div className=" md:flex-1 justify-center flex mt-4 md:mt-0">
          <NextImage imgUrl={Flatbtc} alt="Bitcon-hero-logo" priority />
        </div>
      </div>
      <div className="absolute top-[23.125rem] z-[-1] hidden md:flex">
        <NextImage
          imgUrl={Line1}
          alt="Bitcon-hero-log"
          width="auto"
          height="auto"
        />
      </div>
      <div className="absolute top-[15.625rem] left-[43.75rem] hidden md:flex right-[-12.5rem] z-[-1] ">
        <NextImage imgUrl={Line2} alt="Bitcon-hero-log" />
      </div>
      <Ivcard />
    </div>
  );
};

export default HeroLayout;
