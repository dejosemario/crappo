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
    { name: "Home", url: "/home" },
    { name: "Products", url: "/products" },
    { name: "About", url: "/about" },
    { name: "Features", url: "/features" },
    { name: "Contact", url: "/contact" },
  ];

  const Resources = [
    { name: "Downloadd Whitepaper", url: "#" },
    { name: "Smart Tooken", url: "#" },
    { name: "Blockchain Explorer", url: "#" },
    { name: "Crypto API", url: "#" },
    { name: "Interest", url: "#" },
  ];

  return (
    <footer className="flex flex-col w-full border">
      <div className="flex w-full justify-between items-start">
        <CrappoLogo />
        <div className="flex flex-col ">
          <Heading level={6}>Quick Link</Heading>
          <div className="flex flex-col">
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
          <Heading level={6}>Resources</Heading>
          <div className="flex flex-col">
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
        <div className="flex flex-col w-[355px]">
          <Heading level={3}>We Accept following payment systems</Heading>
          <div className="flex">
            <NextImage imgUrl={Visa} alt={"visa"} width={96} height={64} />
            <NextImage imgUrl={MasterCard} alt={"mastercard"} />
            <NextImage imgUrl={Bitcoin} alt={"bitcoin"} />
          </div>
        </div>
      </div>

      <div className="flex w-full justify-between gap-24">
        <Text>&copy;2021 CRAPPO. All rights reserved</Text>
        <SocialLink />
      </div>
    </footer>
  );
};

export default Footer;
