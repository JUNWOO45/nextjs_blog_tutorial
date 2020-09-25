import "../styles/global.css";

export default function App({ Component, pageProps }) {
  return (
    <>
      <h1> hi</h1>
      <Component {...pageProps} />;
    </>
  );
}
