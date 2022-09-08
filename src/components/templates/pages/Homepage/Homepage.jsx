import Button from "../../../atoms/Button";
import Links from "../../../atoms/Link";
import Text from "../../../atoms/Text";
import Heading  from "../../../atoms/Heading";
import NextImage from "../../../atoms/NextImage";
import SocialLink  from "../../../atoms/SocialLink";

export const HomePage = () => {
  return (
    <div className="container">
      <Heading level={2}>Welcome</Heading>
      <Button withIcon={true}>Try For FREE</Button>
      <Button withIcon={false}>Register</Button>
      <Links url="#">Click Here</Links>
      <Text>I am emeka</Text>
      <NextImage width="604px" height="586px" imgUrl="/images/flat-btc.svg" />
      <SocialLink name="instagram" url={"#"} />
    </div>
  );
};
