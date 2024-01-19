import { Heading } from "@/components/atom/Heading/Heading";
import InvestCard from "@/components/molecules/InvestCard/InvestCard";
import React from "react";

export default function MarketLayout() {
  return (
    <div className={`bg-[#2B076E] text-white pb-[100px]`}>
      <div className="container flex justify-center items-center flex-col pt-[184px] ">
        <Heading level={2} className="text-center max-w-[758px]">
          Market sentiments, portfolio, and run the infrastructure of your
          choice
        </Heading>
        <InvestCard />
      </div>
    </div>
  );
}
