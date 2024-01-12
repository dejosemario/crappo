import Link from 'next/link';

interface linksProp {
  url: string;
  children: React.ReactNode;
  className?: string;
  alt?: string;

}

export const Links = ({ url, children, className, alt }: linksProp) => {
  return (
    <Link href={url} passHref>
      {children}
    </Link>
  );
};
