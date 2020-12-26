import Head from "next/head";
import "../styles/tailwind.css";
import "../node_modules/highlight.js/styles/an-old-hope.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Attia Blog 1</title>
      </Head>
      <div className="flex flex-col min-h-screen">
        <header className="w-full h16 border-b border-purple-500 flex items-center justify-center px-3 py-2">
          <h2 className="text-2xl text-purple-500 flex-1">Attia Blog</h2>
          <nav>
            <a href="/blog">Blog</a>
          </nav>
        </header>
        <main className="w-11/12 md:w-full max-w-2xl mx-auto my-8 flex-grow">
          <Component {...pageProps} />
        </main>
        <foot className="flex flex-col items-center w-full h-24 border-t border-purple-500">
          <div className="w-11/12 md:w-full max-w-3xl m-auto flex flex-row items-center justify-center">
            Copyrights © Attia
          </div>
        </foot>
      </div>
    </>
  );
}

export default MyApp;
