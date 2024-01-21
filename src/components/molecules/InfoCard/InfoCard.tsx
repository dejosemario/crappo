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
    <div className="mr-[231px] 2xl:w-[530px] self-center">
      <Heading level={3} className="max-w-[454px]  ">
        {intro}
      </Heading>
      <Text className="w-[408px] pt-6">{message}</Text>
      <div className="pt-8">
        <Button>{buttondetails}</Button>
      </div>
    </div>
  );
}
