import Text from "@/components/atom/Text/Text";
import { Button } from "@/components/atom/Button/Button";
import { Heading } from "@/components/atom/Heading/Heading";

interface InfoCardProps {
  intro: string;
  message: string;
  buttondetails: string;
}

export default function InfoCard({
  intro,
  message,
  buttondetails,
}: InfoCardProps) {
  return (
    <div className="md:mr-[231px] 2xl:w-[530px] self-center px-8 md:px-0 ">
      <Heading level={3} className="2xl:w-[454px] xl:w-[300px] leading-normal">
        {intro}
      </Heading>
      <Text className="md:max-w-[408px] md:pt-6">{message}</Text>
      <div className="pt-8">
        <Button>{buttondetails}</Button>
      </div>
    </div>
  );
}
