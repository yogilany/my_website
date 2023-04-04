import React, { useState, useEffect } from "react";

import { motion } from "framer-motion";
import styled from "styled-components";
import { useInView } from "react-intersection-observer";
import { useAnimation } from "framer-motion";

const Hero = () => {
  const fields = [
    { id: 1, name: "Front-End Development", duration: 1000 },
    { id: 2, name: "Back-End Development", duration: 1000 },
    { id: 3, name: "Full-Stack Development", duration: 1000 },
  ];

  const letter = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  const sentence = {
    hidden: { opacity: 1 },
    visible: { opacity: 1, transition: { staggerChildren: 0.08, delay: 0.5 } },
  };

  const line = "Front End Development";

  return (
    <>
      <section class="bg-white dark:bg-gray-900 pt-20 pb-15">
        <div class="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
          <div class="mr-auto place-self-center lg:col-span-7">
            <h1 class="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
              Ahlan!
            </h1>

            <h1 class="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-8xl dark:text-white">
              I'm{" "}
              <span class="text-transparent  bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-500">
                Yousef.
              </span>
            </h1>
            <h1 class="mb-4 text-2xl font-medium tracking-tight leading-none text-gray-900 md:text-2xl lg:text-3xl dark:text-white">
              I'm looking for an internship in{"  "}
              <mark class="px-2 mx-1 text-white bg-gradient-to-br from-pink-500 to-orange-400 rounded ">
                Software Development.
              </mark>
            </h1>

            <p class="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
              Are you looking for an intern with a sense of humor and a love for
              coding? Lucky you! You've found the perfect match.
            </p>
            <div class="flex flex-col mb-8 lg:mb-16 space-y-4 sm:flex-row sm:justify-left sm:space-y-0 sm:space-x-4">
              <a
                href="#"
                class="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900"
              >
                Who am I?
              </a>
              <a
                href="#"
                class="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-gray-900 rounded-lg border border-gray-300 hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  class="mr-2 -ml-1 w-5 h-5"
                >
                  <path
                    fill-rule="evenodd"
                    d="M5.625 1.5c-1.036 0-1.875.84-1.875 1.875v17.25c0 1.035.84 1.875 1.875 1.875h12.75c1.035 0 1.875-.84 1.875-1.875V12.75A3.75 3.75 0 0016.5 9h-1.875a1.875 1.875 0 01-1.875-1.875V5.25A3.75 3.75 0 009 1.5H5.625zM7.5 15a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5A.75.75 0 017.5 15zm.75 2.25a.75.75 0 000 1.5H12a.75.75 0 000-1.5H8.25z"
                    clip-rule="evenodd"
                  />
                  <path d="M12.971 1.816A5.23 5.23 0 0114.25 5.25v1.875c0 .207.168.375.375.375H16.5a5.23 5.23 0 013.434 1.279 9.768 9.768 0 00-6.963-6.963z" />
                </svg>
                See my resume
              </a>
            </div>
          </div>
          <div class="hidden lg:mt-0 lg:col-span-5 lg:flex">
            <img src={require("../../../../assets/art3.png")} alt="mockup" />
          </div>
          <hr class="drop-shadow-xl w-48 h-1 mx-auto my-4 bg-gray-100 border-0 rounded md:my-10 dark:bg-gray-700" />
        </div>
      </section>
    </>
  );
};

export default Hero;
