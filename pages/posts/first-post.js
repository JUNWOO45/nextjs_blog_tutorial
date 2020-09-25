import Link from "next/link";
import Head from "next/head";
import Layout from "../components/layout";

export default function FirstPost() {
  return (
    <>
      <Layout>
        <Head>
          <title>First Posts title </title>
        </Head>
        <h1>This is First Post!</h1>
        <Link href="/">Go to home</Link>
      </Layout>
    </>
  );
}
