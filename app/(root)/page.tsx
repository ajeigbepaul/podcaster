import React from "react";
import Podcast from "@/components/Podcast";

const Home = () => {
  return (
    <div className="mt-9 flex flex-col gap-9">
      <section className="flex flex-col gap-5">
        <h1 className="text-20 font-bold text-white-1">Trending Podcast</h1>
        <Podcast />
      </section>
    </div>
  );
};

export default Home;
