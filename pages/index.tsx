import { Banner, Header } from "@components/index";
import type { NextPage } from "next";
import Head from "next/head";
import React from "react";
import axios from 'axios';

interface IHomeProps {
  exploreData: { img: string, location: string, distance: string }[]
}

const Home: NextPage<IHomeProps> = ({ exploreData }) => {
  return (
    <div className="">
      <Head>
        <title>Airbnb</title>
      </Head>
      <Header />
      <Banner />

      <main className="max-w-7xl mx-auto px-8 sm:px-16">
        <section className="pt-6">
          <h2 className="text-4xl font-semibold pb-5">Explore Nearby</h2>
        </section>
        {exploreData.map((exp) => <h1>{exp.location}</h1>)}
      </main>
    </div>
  );
};

export default Home;

export async function getStaticProps() {
  const exploreData = (await axios.get('https://www.jsonkeeper.com/b/4G1G')).data;

  return {
    props: {
      exploreData
    }
  }
}
