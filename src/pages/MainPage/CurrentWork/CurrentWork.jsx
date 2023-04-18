import React from "react";

const CurrentWork = () => {
  return (
    <section class="bg-white dark:bg-gray-900 py-24">
      <div class="max-w-screen-xl px-4 py-8 mx-auto text-center lg:py-16 lg:px-6">
        <h1 class="mb-16 text-3xl font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-6xl">
          What am I working on{" "}
          <span class="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-500">
            currently?
          </span>{" "}
        </h1>

        <dl class="grid mx-auto text-gray-900 sm:grid-cols-3 dark:text-white">
          <div class="flex flex-col items-center justify-center">
            <dt class="mb-2 text-xl md:text-xl font-extrabold">
              IEEE WIE Official Website
            </dt>
            <span class="inline-block h-1 w-10 rounded bg-gray-700  mt-4 mb-4"></span>

            <dd class=" text-sm font-medium text-gray-500 dark:text-gray-400">
              For my role as an IT Head
            </dd>
            <dd class="text-xs mt-2 font-regular text-cyan-500 dark:text-cyan-400">
              Full Stack
            </dd>
            <div
              class="w-full bg-gray-200 rounded-full dark:bg-gray-700 my-4"
              style={{ width: "50%" }}
            >
              <div
                class="bg-yellow-600 text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full"
                style={{ width: "45%" }}
              >
                {" "}
              </div>
            </div>
          </div>
          <div class="flex flex-col items-center justify-center">
            <dt class="mb-2 text-xl md:text-xl font-extrabold">
              Eventbrite Clone Project
            </dt>
            <span class="inline-block h-1 w-10 rounded bg-gray-700  mt-4 mb-4"></span>

            <dd class=" text-sm font-medium text-gray-500 dark:text-gray-400">
              Software Engineering Course Project
            </dd>
            <dd class="text-xs mt-2 font-regular text-cyan-500 dark:text-cyan-400">
              Front End
            </dd>
            <div
              class="w-full bg-gray-200 rounded-full dark:bg-gray-700 my-4"
              style={{ width: "65%" }}
            >
              <div
                class="bg-yellow-600 text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full"
                style={{ width: "45%" }}
              >
                {" "}
              </div>
            </div>
          </div>
          <div class="flex flex-col items-center justify-center">
            <dt class="mb-2 text-xl md:text-xl font-extrabold">
              Java Search Engine
            </dt>
            <span class="inline-block h-1 w-10 rounded bg-gray-700  mt-4 mb-4"></span>

            <dd class=" text-sm font-medium text-gray-500 dark:text-gray-400">
              Adv. Programming Techniques Course Project
            </dd>
            <dd class="text-xs mt-2 font-regular text-cyan-500 dark:text-cyan-400">
              Java
            </dd>
            <div
              class="w-full bg-gray-200 rounded-full dark:bg-gray-700 my-4"
              style={{ width: "50%" }}
            >
              <div
                class="bg-yellow-600 text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full"
                style={{ width: "20%" }}
              >
                {" "}
              </div>
            </div>
          </div>
        </dl>
      </div>
    </section>
  );
};

export default CurrentWork;
