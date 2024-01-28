import {
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa";
import { Links } from "../Link/Links";

export const SocialLink = () => {
  const social_links = [
    {
      name: "facebook",
      url: "https://facebook.com",
      icon: <FaFacebook />,
      alt: "facebook-Icon",
    },
    {
      name: "instagram",
      url: "https://instagram.com",
      icon: <FaInstagram />,
      alt: "instagram-Icon",
    },
    {
      name: "youtube",
      url: "https://youtube.com",
      icon: <FaYoutube />,
      alt: "youtube-Icon",
    },
    {
      name: "twitter",
      url: "https://twitter.com",
      icon: <FaTwitter />,
      alt: "twitter-Icon",
    },
    {
      name: "linkedin",
      url: "https://linkedin.com",
      icon: <FaLinkedinIn />,
      alt: "linkedin-Icon",
    },
  ];
  return (
    <div className="flex flex-row items-center gap-4 md:gap-8">
      {social_links.map((social_link, index) => (
        <Links
          key={index}
          url={social_link.url}
          alt={social_link.alt}
          className="mr-4 text-[#3671E9] hover:opacity-50"
        >
          {social_link.icon}
        </Links>
      ))}
    </div>
  );
};
