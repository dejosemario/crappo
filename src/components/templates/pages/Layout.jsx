import Head from "next/head";

export const Layout = ({ children, ...customMeta }) => {
  const meta = {
    title: "Crappo",
    type: "website",
    description: "Crappo - It's a cryptocurrency site",
    ...customMeta,
  };
  return (
    <div>
      <Head>
        <title>{meta.title} | A Free CryptoCurrency Website</title>
        <meta content={meta.description} name="description" />
        <meta property="og:type" content={meta.type} />
        <meta
          property="og:site_name"
          content="Crappo, Fastest &amp; Secure Platform To Invest In Cypto"
        />
        <meta property="og:description" content={meta.description} />
        <meta property="og:title" content={meta.title} />
        <meta property="og:image" content={meta.image} />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        {/* <link rel="preload" as="image" href="/images/brand-logo.svg"></link> */}
        <main>{children}</main>
      </Head>
    </div>
  );
};
