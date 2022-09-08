import {
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaLinkedinIn,
  FaYoutube,
} from 'react-icons/fa';
import Links from '../Link';

export const SocialLink = ({ name, url }) => {
  switch (name) {
    case 'facebook':
      return (
        <Links url={url}>
          <FaFacebook />
        </Links>
      );
    case 'instagram':
      return (
        <Links url={url}>
          <FaInstagram />
        </Links>
      );

    case 'youtube':
      return (
        <Links url={url}>
          <FaYoutube />
        </Links>
      );
    case 'twitter':
      return (
        <Links url={url}>
          <FaTwitter />
        </Links>
      );
    case 'linkedin':
      return (
        <Links url={url}>
          <FaLinkedinIn />
        </Links>
      );
    default:
      break;
  }
};
