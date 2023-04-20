import React from "react";

const CurrentWork = () => {
  return (
    <section className="bg-gray-900 py-24">
      <div className="max-w-screen-xl px-4 py-8 mx-auto text-center lg:py-16 lg:px-6">
        <h1 className="mb-16 text-3xl font-extrabold text-gray-900 text-white md:text-5xl lg:text-6xl">
          What am I working on{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-500">
            currently?
          </span>{" "}
        </h1>

        <dl className="grid mx-auto  sm:grid-cols-3 text-white">
          <div className="mt-12 flex flex-col items-center justify-center">
            <div className="flex justify-center items-center mb-4 w-16 h-16 rounded-full bg-primary-100 bg-opacity-40  ">
              <h1 className="text-3xl font-bold">1</h1>
            </div>
            <dt className="mb-2 text-xl md:text-xl font-extrabold">
              IEEE WIE Official Website
            </dt>
            <span className="inline-block h-1 w-10 rounded bg-gray-700  mt-4 mb-4"></span>

            <dd className=" text-sm font-medium text-gray-500 text-gray-400">
              For my role as an IT Head
            </dd>
            <dd className="text-xs mt-2 font-regular text-cyan-500 text-cyan-400">
              Full Stack
            </dd>
            <div
              className="w-full bg-gray-200 rounded-full bg-gray-700 my-4"
              style={{ width: "50%" }}
            >
              <div
                className=" bg-yellow-600 text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full"
                style={{ width: "45%" }}
              >
                {" "}
              </div>
            </div>
          </div>
          <div className="mt-12 flex flex-col items-center justify-center">
            <div className="flex justify-center items-center mb-4 w-16 h-16 rounded-full bg-primary-100 bg-opacity-40 ">
              <h1 className="text-3xl font-bold">2</h1>
            </div>
            <dt className="mb-2 text-xl md:text-xl font-extrabold">
              Eventbrite Clone Project
            </dt>
            <span className="inline-block h-1 w-10 rounded bg-gray-700  mt-4 mb-4"></span>

            <dd className=" text-sm font-medium text-gray-500 text-gray-400">
              Software Engineering Course Project
            </dd>
            <dd className="text-xs mt-2 font-regular text-cyan-500 text-cyan-400">
              Front End
            </dd>
            <div
              className="w-full bg-gray-200 rounded-full bg-gray-700 my-4"
              style={{ width: "65%" }}
            >
              <div
                className="bg-yellow-600 text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full"
                style={{ width: "75%" }}
              >
                {" "}
              </div>
            </div>
          </div>
          <div className="mt-12 flex flex-col items-center justify-center">
            <div className="flex justify-center items-center mb-4 w-16 h-16 rounded-full bg-primary-100 bg-opacity-40  ">
              <h1 className="text-3xl font-bold">3</h1>
            </div>
            <dt className="mb-2 text-xl md:text-xl font-extrabold">
              Java Search Engine
            </dt>
            <span className="inline-block h-1 w-10 rounded bg-gray-700  mt-4 mb-4"></span>

            <dd className=" text-sm font-medium text-gray-500 text-gray-400">
              Adv. Programming Techniques Course Project
            </dd>
            <dd className="text-xs mt-2 font-regular text-cyan-500 text-cyan-400">
              Java
            </dd>
            <div
              className="w-full bg-gray-200 rounded-full bg-gray-700 my-4"
              style={{ width: "50%" }}
            >
              <div
                className="bg-yellow-600 text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full"
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
