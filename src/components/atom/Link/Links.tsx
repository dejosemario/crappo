import Link from 'next/link';

interface linksProp {
  url: string;
  children: React.ReactNode;
  className?: string;
}

export const Links = ({ url, children, className }: linksProp) => {
  return (
    <Link href={url} passHref>
      <a className={className}>{children}</a>
    </Link>
  );
};
