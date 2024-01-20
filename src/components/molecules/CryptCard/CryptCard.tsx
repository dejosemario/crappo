import { Button } from "@/components/atom/Button/Button";
import { Heading } from "@/components/atom/Heading/Heading";
import { NextImage } from "@/components/atom/NextImage/NextImage";
import Text from "@/components/atom/Text/Text";
import bitcoin from "@/public/images/bitconLogo.svg";
import ethereum from "@/public/images/ethereumLogo.svg";
import litecoin from "@/public/images/litcoinLogo.svg";
import { AiOutlineRight } from "react-icons/ai";

const cryptDatas = [
  {
    color: "bg-[#2B076E]",
    textColor: "text-white",
    title: "Bitcoin",
    imgUrl: bitcoin,
    imgAlt: "Bitcoin-Logo",
    sub: "BTC",
    description:
      "Digital currency in which a record of transactions is maintained.",
    button: true,
  },
  {
    color: "bg-[#FFF]",
    title: "Ethereum",
    imgUrl: ethereum,
    imgAlt: "Bitcoin-Logo",
    sub: "ETH",
    description:
      "Digital currency in which a record of transactions is maintained.",
  },
  {
    color: "bg-[#FFF]",
    title: "Litecoin",
    imgUrl: litecoin,
    imgAlt: "Litecoin-Logo",
    sub: "LTC",
    description:
      "Digital currency in which a record of transactions is maintained.",
  },
];

export default function CryptCard() {
  return (
    <div className="flex justify-between w-full mt-[64px] flex-wrap">
      {cryptDatas?.map(
        (
          { color, title, imgUrl, imgAlt, sub, description, button, textColor },
          idx
        ) => (
          <div
            className={`w-[370px] h-[433px] rounded-2xl ${color} ${
              textColor ? textColor : "text-black"
            } flex items-center flex-col  px-[14px] pt-0 justify-center`}
            key={idx}
          >
            <div className="pb-12">
              <NextImage imgUrl={imgUrl} alt={imgAlt} />
            </div>
            <div className="flex items-center gap-2">
              <Heading level={3}>{title}</Heading>
              <sub className="text-gray-400 text-[18px] font-medium ">
                {sub}
              </sub>
            </div>
            <Text
              className={`mt-4 text-center ${
                textColor ? textColor : "text-gray-500"
              }`}
            >
              {description}
            </Text>
            <div className="pt-[25px]">
              {button ? (
                <Button withIcon className="py-4">
                  Start mining
                </Button>
              ) : (
                <div
                  className={
                    "border p-1 ml-4 rounded-full text-[#3671E9] w-[64px] h-[64px] flex items-center justify-center cursor-pointer"
                  }
                >
                  <AiOutlineRight />
                </div>
              )}
            </div>
          </div>
        )
      )}
    </div>
  );
}
