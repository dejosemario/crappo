import Link from 'next/link';

interface linksProp {
  url?: string;
  children: React.ReactNode;
  className?: string;
  alt?: string;

}

export const Links = ({ url = "#", children, className, alt }: linksProp) => {
  const handleClick = (event: any) => {
    // Prevent the default navigation behavior if the URL is "#"
    if (url === "#") {
      event.preventDefault();
      console.log("Link clicked, but no navigation");
      // Add your custom logic here
    }
  };

  return (
    <Link href={url} passHref>
      {children}
    </Link>
  );
};
