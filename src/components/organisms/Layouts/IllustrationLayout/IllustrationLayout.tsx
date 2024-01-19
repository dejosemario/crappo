import { Button } from "@/components/atom/Button/Button";
import { Heading } from "@/components/atom/Heading/Heading";
import { NextImage } from "@/components/atom/NextImage/NextImage";
import Text from "@/components/atom/Text/Text";
import Illustration from "/src/public/images/illustration.svg";
import Dgradient from "/src/public/images/d.svg";
import Ugradient from "/src/public/images/u.svg";

const IllustrationLayout = () => {
  return (
    <div className="flex justify-between mt-[160px] relative">
      <div className=" flex items-start">
        <NextImage imgUrl={Illustration} alt="Illustration-image" />
      </div>
      <div className="pt-20">
        <Heading level={2} className="max-w-[480px]">
          Why you should choose CRAPPO
        </Heading>
        <Text className="max-w-[408px] pb-8">
          Experience the next generation cryptocurrency platform. No financial
          borders, extra fees, and fake reviews.
        </Text>
        <Button>Learn More</Button>
      </div>
      <div className="absolute right-[-10vw] top-[-180px]">
        <NextImage imgUrl={Dgradient} alt="Dgradient" />
      </div>
      <div className="absolute right-[-10vw] top-[380px]">
        <NextImage imgUrl={Ugradient} alt="ugradient" />
      </div>
    </div>
  );
};

export default IllustrationLayout;
