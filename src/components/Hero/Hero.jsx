import React from "react";
import heroImage1 from "../../assets/hero-img01.jpg";
import video from "../../assets/hero-video.mp4";
import SearchBar from "../SearchBar/SearchBar";
const Hero = () => {
  return (
    <div className="flex flex-col md:flex-row md:items-center gap-5 justify-between">
      <div className="flex flex-col gap-5 md:w-1/2">
        <span className="bg-secondary w-fit px-5 rounded-full text-white py-2 text-sm">
          Know Before You Go
        </span>
        <h1 className="text-3xl md:text-4xl text-heading font-bold">
          Travelling opens the door to creating new{" "}
          <span className="text-secondary">memories</span>
        </h1>
        <p className="text-sm md:text-md text-text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Exercitationem accusantium temporibus pariatur reiciendis consequuntur
          recusandae ipsum. Autem animi temporibus reprehenderit deleniti
          repudiandae minima accusamus odio culpa quos doloribus, dolorum neque?
        </p>
        <SearchBar />
      </div>
      <div className="flex flex-col gap-4  md:flex-row   md:gap-5 items-center md:w-1/2">
        <img
          src={heroImage1}
          alt="travel"
          className="h-72 w-full  md:h-96 md:w-60 rounded-xl border object-cover"
        />
        <video
          loop
          autoPlay
          muted
          src={video}
          alt="travel"
          className="hidden md:block h-72 w-full md:h-96 md:w-60 rounded-xl border object-cover md:mt-10"
        />
      </div>
    </div>
  );
};

export default Hero;
