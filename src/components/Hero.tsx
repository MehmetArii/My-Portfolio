"use client";

import React from "react";
import Image from "next/image";

const Hero = () => {
  return (
    <section
      className="relative h-screen w-full bg-cover bg-center flex items-center justify-center"
      style={{ backgroundImage: "url('/bg.jpg')" }}
    >
      <div className="absolute inset-0 bg-black/50"></div>

      <div className="relative flex items-center justify-between flex-col md:flex-row z-10 px-6 md:px-12">
        <div className="text-white max-w-xl">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">
            Hi, I’m <span className="text-orange-500">Mehmet Arı</span>
          </h1>
          <p className="text-lg md:text-2xl mb-6">
            A Frontend Developer passionate about building interactive websites
          </p>
          <a
            href="#contact"
            className="inline-block bg-orange-500 text-white px-6 py-3 rounded-full font-medium hover:bg-orange-600 transition"
          >
            Contact Me
          </a>
        </div>

        <div className="mt-10 md:mt-0">
          <Image
            src="/me.jpg"
            alt="Hero Image"
            width={400}
            height={400}
            className="rounded-full shadow-2xl border-4 border-orange-500"
            priority
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
