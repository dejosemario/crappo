import { NextImage } from "@/components/atom/NextImage/NextImage";
import Barchart from "/src/public/images/barchart.svg";
import People from "/src/public/images/people.svg";
import Earth from "/src/public/images/earth.svg";
import Text from "@/components/atom/Text/Text";
import { Heading } from "@/components/atom/Heading/Heading";

const Ivcard = () => {
  const Ivdatas = [
    {
      imgUrl: Barchart,
      alt: "Digit-currencey-Icon",
      heading: "$30B",
      text: "Digital Currency Exchanged",
    },
    {
      imgUrl: People,
      alt: "Digit-currencey-Icon",
      heading: "10M+",
      text: "Trusted Wallets Investor",
    },
    {
      imgUrl: Earth,
      alt: "Digit-currencey-Icon",
      heading: "195",
      text: "Countries Supported",
    },
  ];

  return (
    <div className="flex justify-between pt-[239px] flex-wrap">
      {Ivdatas.map(({imgUrl, alt, heading, text}, idx) => (
        <div className="flex gap-6 items-center" key={idx}>
          <div>
            <NextImage imgUrl={imgUrl} alt={alt} />
          </div>
          <div>
            <Heading level={2}>{heading}</Heading>
            <Text>{text}</Text>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Ivcard;
