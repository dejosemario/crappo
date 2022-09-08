import Button from "../../../atoms/Button"
// import { AiOutlineRight } from "react-icons/ai";
import Links from "../../../atoms/Link";
import Text from "../../../atoms/Text";
import Heading  from "../../../atoms/Heading";

export const HomePage = () => {
  return (
    <div className="container">
      <Heading level={2}>Welcome</Heading>
      <Button withIcon={true}>Login</Button>
      <Links url="#">Click Here</Links>
      <Text>I am emeka</Text>
    </div>
  );
};
