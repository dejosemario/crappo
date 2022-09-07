import Link from 'next/link';

export const Links = ({ url, children, className }) => {
  return (
    <Link href={url} passHref>
      <a className={className}>{children}</a>
    </Link>
  );
};
