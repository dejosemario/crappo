"use client";

import { Button } from "@/components/atom/Button/Button";
import { Heading } from "@/components/atom/Heading/Heading";
import { useState } from "react";
import InputText from "@/components/atom/InputText/InputText";
import Text from "@/components/atom/Text/Text";
import React from "react";
import { NextImage } from "@/components/atom/NextImage/NextImage";
import Vector from "/src/public/images/Ambient/vector1.png";
import BitconShade from "/src/public/images/Ambient/bitcoinShade.png";
import Line3 from "/src/public/images/Ambient/line3.png";
import Line4 from "/src/public/images/Ambient/line4.png";

export default function StartCard() {
  const [email, setEmail] = useState("");
  return (
    <div
      className={`bg-gradient-to-b from-[#2B076E] via-transparent to-[#0D0D2B] text-white md:p-[99px] w-full relative`}
    >
      <div className="container flex md:justify-between items-center w-full md:pt-[48px] bg-[#3671E9] rounded-2xl pb-12 relative flex-col md:flex-row">
        <div className="flex flex-col gap-y-2 pt-10 md:pt-0">
          <Heading level={3}>Start mining now</Heading>
          <Text className="md:w-[348px]">
            Join now with CRAPPO to get the latest news and start mining now
          </Text>
        </div>
        <div className="flex gap-10 items-center md:flex-row flex-col md:w-fit w-full ">
          <InputText
            placeholder="Enter your email"
            className="mb-[16px] md:w-[402px] w-full border-gray-400 placeholder-white "
            Value={email}
            type="text"
            required={true}
            onChange={(e) => setEmail(e.target.value)}
          />
          <div className="text-black">
            <Button outlined className="font-medium">
              Subscribe
            </Button>
          </div>
        </div>
        <div className="absolute top-0 left-[5vw]">
          <NextImage imgUrl={Vector} alt="vector1" />
        </div>
        <div className="absolute right-[4.5vw] bottom-0 ">
          <NextImage imgUrl={BitconShade} alt="bitcoin-shade" />
        </div>
      </div>
      <div className="absolute bottom-0 left-[5vw]">
        <NextImage imgUrl={Line4} alt="line-4" />
      </div>
      <div className="absolute right-[20vw] bottom-0">
        <NextImage imgUrl={Line3} alt="line-3" />
      </div>
    </div>
  );
}
