import { Heading } from "@/components/atom/Heading/Heading";
import { NextImage } from "@/components/atom/NextImage/NextImage";
import Logo from "/src/public/logo.svg"
import React from "react";

const CrappoLogo: React.FC = () => {
  return (
    <div className="flex items-center gap-4 cursor-pointer">
      <NextImage
        imgUrl={Logo}
        alt={"crappo-logo"}
        priority={true}
      />
      <Heading level={4} className="font-inter font-semi-bold text-[1rem] md:text-[1.25rem] ">CRAPPO</Heading>
    </div>
  );
};

export default CrappoLogo;
