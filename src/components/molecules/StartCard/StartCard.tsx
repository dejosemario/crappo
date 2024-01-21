"use client";

import { Button } from "@/components/atom/Button/Button";
import { Heading } from "@/components/atom/Heading/Heading";
import { useState } from "react";
import InputText from "@/components/atom/InputText/InputText";
import Text from "@/components/atom/Text/Text";
import React from "react";

export default function StartCard() {
  const [email, setEmail] = useState("");
  return (
    <div
      className={`bg-gradient-to-b from-[#2B076E] via-transparent to-[#0D0D2B] text-white p-[99px] w-full relative`}
    >
      <div className="container flex justify-between items-center pt-[48px] bg-[#3671E9] rounded-2xl pb-12">
        <div className="flex flex-col gap-y-2">
          <Heading level={3}>Start mining now</Heading>
          <Text className="w-[348px]">
            Join now with CRAPPO to get the latest news and start mining now
          </Text>
        </div>
        <div className="flex gap-10 items-center">
          <InputText
            placeholder="Enter your hash rate"
            className="mb-[16px] w-[402px] border-gray-400 placeholder-white"
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
      </div>
      <div className=""></div>
    </div>
  );
}
