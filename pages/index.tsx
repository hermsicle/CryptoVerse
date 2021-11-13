import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.scss";
import HomeLayout from '../layouts/Home'

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>CrytoVerse V2</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <HomeLayout />
    </div>
  );
};

export default Home;
