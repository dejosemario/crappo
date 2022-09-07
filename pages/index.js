import Button from "../src/components/atoms/Button";
import { AiOutlineRight } from "react-icons/ai";
import Links from "../src/components/atoms/Link";


export default function Home() {
  return (
    <div>

      <Button withIcon={true}>
        Login
      </Button>
      <Links url="#">Click Here</Links>

      </div>
    
  );
}
