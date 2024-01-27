import EthereumLogo from "/src/public/images/ethereumLogo2.svg";
import BitcoinLogo from "/src/public/images/bitconLogo.svg";
import litcoinLogo from "/src/public/images/litcoinLogo.svg";
import { NextImage } from "@/components/atom/NextImage/NextImage";
import { Heading } from "@/components/atom/Heading/Heading";
import Text from "@/components/atom/Text/Text";

interface BitcoinCardProps {
  bitCard: "bitcoin" | "ethereum" | "litcoin";
}

export default function BitcoinCard({ bitCard }: BitcoinCardProps) {
  switch (bitCard) {
    case "ethereum":
      return (
        <div className="flex gap-4">
          <NextImage imgUrl={EthereumLogo} alt="ethereum-logo" className="" />
          <div className="flex flex-col">
            <Heading level={5} className="leading-none">
              ETH
            </Heading>
            <Text className="font-normal">Ethereum</Text>
          </div>
        </div>
      );
    case "bitcoin":
      return (
        <div className="flex gap-4">
          <NextImage imgUrl={BitcoinLogo} alt="bitcoin-logo" width={40} height={40}/>
          <div className="flex flex-col">
            <Heading level={5} className="leading-none">
              BTC
            </Heading>
            <Text className="font-normal">Bitcoin</Text>
          </div>
        </div>
      );

    case "litcoin":
      return (
        <div className="flex gap-4">
          <NextImage imgUrl={litcoinLogo} alt="litcoin-logo" width={40} height={40}/>
          <div className="flex flex-col">
            <Heading level={5} className="leading-none">
              LTC
            </Heading>
            <Text className="font-normal">Litcoin</Text>
          </div>
        </div>
      );
    default:
      break;
  }
}
