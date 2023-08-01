import {
  Banner,
  Footer,
  Header,
  LargeCard,
  MediumCard,
  SmallCard,
} from "@components/index";
import axios from "axios";
import type { NextPage } from "next";
import Head from "next/head";
import React from "react";

interface IHomeProps {
  cardsData: { img: string; title: string }[];
  exploreData: { img: string; location: string; distance: string }[];
}

const Home: NextPage<IHomeProps> = ({ cardsData, exploreData }) => {
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
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {exploreData.map((exp) => (
              <SmallCard
                key={exp.img}
                image={exp.img}
                distance={exp.distance}
                location={exp.location}
              />
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-4xl font-semibold py-8">Live Anywhere</h2>
          <div className="flex space-x-3 overflow-scroll scrollbar-hide p-3">
            {cardsData.map((card) => (
              <MediumCard key={card.img} image={card.img} title={card.title} />
            ))}
          </div>
        </section>

        <LargeCard
          image="https://a0.muscache.com/im/pictures/2da67c1c-0c61-4629-8798-1d4de1ac9291.jpg?im_w=1440"
          title="The Greatest Outdoor"
          description="Wishlists curated by Airbnb"
          buttonText="Get Inspired"
        />
      </main>

      <Footer />
    </div>
  );
};

export default Home;

export async function getStaticProps() {
  const exploreData = (await axios.get("https://www.jsonkeeper.com/b/4G1G"))
    .data;

  const cardsData = (await axios.get("https://www.jsonkeeper.com/b/VHHT")).data;

  return {
    props: {
      exploreData,
      cardsData,
    },
  };
}
