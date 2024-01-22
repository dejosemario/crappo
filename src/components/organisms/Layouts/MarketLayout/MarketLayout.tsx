import { Heading } from "@/components/atom/Heading/Heading";
import { NextImage } from "@/components/atom/NextImage/NextImage";
import InvestCard from "@/components/molecules/InvestCard/InvestCard";
import Statistic from "/src/public/images/statistic.svg";
import InfoCard from "@/components/molecules/InfoCard/InfoCard";
import ArrowDown from "/src/public/images/arrow-down.svg";
import ArrowUp from "/src/public/images/arrow-up.svg";
import SemiCircle from "/src/public/images/Ambient/semi-circle.png";
import SideCirclePost from "/src/public/images/Ambient/o.png";
import BitcoinCard from "@/components/molecules/BitcoinCard/BitcoinCard";
import Text from "@/components/atom/Text/Text";

const MarketHeading: string[] = ["Price", "Change", "Volume(24h)"];

export default function MarketLayout() {
  return (
    <div className={`bg-[#2B076E] text-white pb-[80px] relative`}>
      <div className="container flex justify-center items-center flex-col pt-[100px] ">
        <Heading level={2} className="text-center max-w-[758px]">
          Market sentiments, portfolio, and run the infrastructure of your
          choice
        </Heading>
        <InvestCard />
      </div>
      <div className="flex justify-between w-full pb-[130px] ">
        <div>
          <NextImage imgUrl={Statistic} alt="statistic-img" />
        </div>
        <InfoCard
          intro="Detailed Statistics"
          message="View all mining related information in realtime, at any point at any location and decide which polls you want to mine in."
          buttondetails=" Learn More"
        />
      </div>
      <div className="container flex justify-center items-center flex-col flex-wrap">
        <div className="flex w-full justify-between wrap">
          <InfoCard
            intro="Grow your profit and track your investments"
            message="Use advanced analytical tools. Clear TradingView charts let you track current and historical profit investments."
            buttondetails=" Learn More"
          />
          <div className="bg-[#35068C] w-[610px] h-[334px] rounded-2xl relative flex  flex-col justify-between py-10 pl-10  z-10">
            <div className="flex justify-between ml-[171px] mr-[49px] ">
              {MarketHeading.map((heading, index) => (
                <Heading
                  key={index}
                  level={6}
                  className="text-sm font-semibold"
                >
                  {heading}
                </Heading>
              ))}
            </div>
            <div className="flex mr-[49px] justify-between items-center">
              <BitcoinCard bitCard="bitcoin" />
              <Text>$156.83</Text>
              <div className="flex gap-2">
                <NextImage imgUrl={ArrowUp} alt="arrow-up" />
                <Text className="text-[#8FFFBE]">+7.3%</Text>
              </div>
              <Text>$3420214</Text>
            </div>
            <div className="bg-[#4610AD] w-full rounded-2xl ml-[-72px] h-[79px] flex items-center px-[40px] justify-between">
              <BitcoinCard bitCard="ethereum" />
              <Text>$156.83</Text>
              <div className="flex gap-2">
                <NextImage imgUrl={ArrowDown} alt="arrow-down" />
                <Text className="text-[#FF7676]">-0.9%</Text>
              </div>
              <Text>$1812350</Text>
            </div>
            <div className="flex mr-[49px] justify-between items-center">
              <BitcoinCard bitCard="litcoin" />
              <Text>$8535</Text>
              <div className="flex gap-2">
                <NextImage imgUrl={ArrowUp} alt="arrow-up" />
                <Text className="text-[#8FFFBE]">+8.2%</Text>
              </div>
              <Text>$5820399</Text>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute top-0 left-[12vw] 2xl:left-[20vw]">
        <NextImage imgUrl={SemiCircle} alt="circle" />
      </div>{" "}
      <div className="absolute right-0 bottom-0 2xl:hidden">
        <NextImage imgUrl={SideCirclePost} alt="side-circle" />
      </div>
    </div>
  );
}
