import Button from "../src/components/atoms/Button";
import { AiOutlineRight } from "react-icons/ai";
import Links from "../src/components/atoms/Link";
import Text from "../src/components/atoms/Text";
import { Heading } from "../src/components/atoms/Heading/Heading";

export default function Home() {
  return (
    <div className="section">
      <div className="container">
        <div className="container">
          <Heading level={2}>Welcome</Heading>
          <Button withIcon={true}>Login</Button>
          <Links url="#">Click Here</Links>
          <Text>I am emeka</Text>
        </div>
      </div>
    </div>
  );
}
