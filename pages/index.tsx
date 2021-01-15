import Head from "next/head";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>SellerSpot</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>Sellerspot landing app!</main>
    </div>
  );
}
