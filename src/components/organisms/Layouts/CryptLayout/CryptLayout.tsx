"use client";

import React from "react";
import { useState } from "react";
import InputText from "@/components/atom/InputText/InputText";
import Text from "@/components/atom/Text/Text";
import { Button } from "@/components/atom/Button/Button";
import { Heading } from "@/components/atom/Heading/Heading";

const CryptLayout = () => {
  const [hashRate, setHashRate] = useState("");
  const [power, setPower] = useState("");

  return (
    <div className={`bg-white h-[6023px] text-black`}>
      <div className="container flex justify-center items-center flex-col pt-[184px] ">
        <Text className="max-w-[622px] text-center text-gray-200 text-[18px] pb-[64px]">
          Let’s check your hash rate to see how much you will earn today,
          Exercitation veniam consequat sunt nostrud amet.
        </Text>
        <div className="flex justify-evenly w-[942px] items-center">
          <InputText
            placeholder="Enter your hash rate"
            className="mb-[16px] w-[402px]"
            Value={hashRate}
            type="text"
            required={true}
            onChange={(e) => setHashRate(e.target.value)}
          />
          <InputText
            placeholder="TH/s"
            className="mb-[16px] w-[200px]"
            Value={power}
            type="number"
            required={true}
            onChange={(e) => setPower(e.target.value)}
          />
          <div>
            <Button>Calculate</Button>
          </div>
        </div>
        <div className="w-[942px] max-w-[942px] shadow h-[216px] mt-[55px] p-12">
          <Heading
            className="font-medium leading-relaxed tracking-wider text-[#3671E9]"
            level={6}
          >
            ESTIMATED 24 HOUR REVENUE:
          </Heading>
          <Heading level={3} className="pt-4">
            0.055 130 59 ETH ($1275)
          </Heading>
          <Text className="text-gray-400">
            {" "}
            Revenue will change based on mining difficulty and Ethereum price.
          </Text>
        </div>
        <Heading className="max-w-[741px] text-center mt-[100px]" level={2}>
          Trade securely and market the high growth cryptocurrencies.
        </Heading>
      </div>
    </div>
  );
};

export default CryptLayout;
