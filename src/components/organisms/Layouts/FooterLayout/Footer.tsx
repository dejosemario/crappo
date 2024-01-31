import { Heading } from "@/components/atom/Heading/Heading";
import { Links } from "@/components/atom/Link/Links";
import { NextImage } from "@/components/atom/NextImage/NextImage";
import { SocialLink } from "@/components/atom/SocialLink/SocialLink";
import Text from "@/components/atom/Text/Text";
import CrappoLogo from "@/components/molecules/Logo/CrappoLogo";
import Visa from "/src/public/images/visa.svg";
import MasterCard from "/src/public/images/mastercard.svg";
import Bitcoin from "/src/public/images/bitcoin.svg";

const Footer: React.FC = () => {
  const products = [
    { name: "Home", url: "#" },
    { name: "Products", url: "#" },
    { name: "About", url: "#" },
    { name: "Features", url: "#" },
    { name: "Contact", url: "#" },
  ];

  const Resources = [
    { name: "Downloadd Whitepaper", url: "#" },
    { name: "Smart Tooken", url: "#" },
    { name: "Blockchain Explorer", url: "#" },
    { name: "Crypto API", url: "#" },
    { name: "Interest", url: "#" },
  ];

  return (
    <footer className="flex flex-col w-full py-[80px] h-[522px] justify-between">
      <div className="flex w-full justify-between items-start flex-wrap">
        <div className="hidden md:flex">
          <CrappoLogo />
        </div>
        <div className="flex flex-col ">
          <Heading level={5}>Quick Link</Heading>
          <div className="flex flex-col pt-8 h-[190px] justify-between">
            {products.map((product, index) => (
              <Links
                key={index}
                url={product.url}
                className="text-gray-500 hover:opacity-50"
              >
                {product.name}
              </Links>
            ))}
          </div>
        </div>
        <div className="flex flex-col">
          <Heading level={5}>Resources</Heading>
          <div className="flex flex-col  pt-8  h-[190px] justify-between">
            {Resources.map((resource, index) => (
              <Links
                key={index}
                url={resource.url}
                className="text-gray-500 hover:opacity-50"
              >
                {resource.name}
              </Links>
            ))}
          </div>
        </div>
        <div className="flex flex-col w-[355px] gap-12  pt-8 md:pt-0">
          <Heading level={3}>We Accept following payment systems</Heading>
          <div className="flex justify-between">
            <NextImage imgUrl={Visa} alt={"visa"} width={96} height={64} />
            <NextImage imgUrl={MasterCard} alt={"mastercard"} />
            <NextImage imgUrl={Bitcoin} alt={"bitcoin"} />
          </div>
        </div>
      </div>

      <div className="flex w-full justify-between gap-4 md:gap-24 flex-col md:flex-row p-12 md:p-0">
        <Text className="md:text-base text-sm">
          &copy;2021 CRAPPO. All rights reserved
        </Text>
        <SocialLink />
      </div>
    </footer>
  );
};

export default Footer;
