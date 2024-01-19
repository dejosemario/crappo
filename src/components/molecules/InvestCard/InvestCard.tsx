import { Button } from "@/components/atom/Button/Button";
import { Heading } from "@/components/atom/Heading/Heading";
import { NextImage } from "@/components/atom/NextImage/NextImage";
import Bitcoin from "/src/public/images/bitconLogo.svg";
import WaterLevel from "/src/public/images/water-level.svg";
import Text from "@/components/atom/Text/Text";

export default function InvestCard() {
  return (
    <div className="w-full flex justify-between mt-[100px]">
      <div className="flex flex-col gap-y-6">
        <Heading level={3}>Invest Smart</Heading>
        <Text className="max-w-[408px]">
          Get full statistic information about the behaviour of buyers and
          sellers will help you to make the decision.{" "}
        </Text>
        <div className="pt-8">
          <Button>Learn More</Button>
        </div>
      </div>
      <div className="flex flex-col bg-[#35068C] w-[580px] h-[298px] rounded-2xl p-[40px]">
        <div className="flex justify-between mb-6">
          <div className="flex gap-4">
            <div>
              <NextImage
                imgUrl={Bitcoin}
                alt={"bitcoin-logo"}
                width={40}
                height={40}
              />
            </div>
            <div className="gap-y-1">
              <div className="flex items-center justify-center gap-2">
                <Heading level={5} className="text-[24px]">
                  Bitcoin
                </Heading>
                <div className="text-gray-400 text-[16px] font-medium ">
                  BTC
                </div>
              </div>
              <div className="text-gray-400 text-[14px] font-normal ">
                0.00080 BTC
              </div>
            </div>
          </div>
          <Text className="text-sm text-[#42FFFF]">+125%</Text>
        </div>
        <div>
          <NextImage imgUrl={WaterLevel} alt={"bitcoin-logo"} />
        </div>
      </div>
    </div>
  );
}
