import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta name="description" content="Fast-paced Solana coin flipping game" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#3FE0D0" />
      </Head>
      <body className="bg-[#0C0D12] text-white">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
