import { NextImage } from "@/components/atom/NextImage/NextImage";
import Flatbtc from "/src/public/images/flat-btc.svg";
import { Button } from "@/components/atom/Button/Button";
import Text from "@/components/atom/Text/Text";
import { Heading } from "@/components/atom/Heading/Heading";

const HeroLayout: React.FC = () => {
  return (
    <div className="flex mt-[32px] ">
      <div>
        <div className="flex bg-white-10 w-[365px] pr-[11px] pl-1 py-1 rounded-[32px] gap-4 items-center mt-[100px]">
          <Button outlined>75% SAVE</Button>
          <Text>For the Black Friday weekend</Text>
        </div>
        <div className="w-[588px]">
          <Heading level={1} className="pt-8">
            Fastest & Secure Platform to invest in crypto
          </Heading>
        </div>
        <Text className="w-[435px]">
          Buy and sell cryptocurrencies, trusted by 10M wallets with over $30
          billion in transactions.
        </Text>
        <div className="mt-8">
          <Button withIcon>Try for FREE</Button>
        </div>
      </div>
      <NextImage imgUrl={Flatbtc} alt="Bitcon-hero-logo" />
    </div>
  );
};

export default HeroLayout;
