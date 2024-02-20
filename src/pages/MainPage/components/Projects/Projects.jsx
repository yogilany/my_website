import React from "react";

const Projects = () => {
  return (
    <section className=" bg-gray-800 py-12 px-3 ">
      <hr className="drop-shadow-xl w-56 md:w-96 h-1 mx-auto my-4 border-0 rounded md:my-10 bg-gray-600" />

      <div className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">

        <h1 className="mt-12 text-3xl font-extrabold  text-white md:text-5xl lg:text-6xl">
          Some{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-500">
            Previous
          </span>{" "}
          Projects
        </h1>
        <h1 className="mb-16 text-3xl font-extrabold  text-white md:text-5xl lg:text-6xl">
          <small className=" font-semibold  text-gray-400">
            but I am eager to take on more.
          </small>
        </h1>

        <ol className="relative border-l  border-gray-700">
        <li className="mb-10 ml-6">
            <span className="absolute flex items-center justify-center w-6 h-6 rounded-full -left-3 ring-8  ring-gray-900 bg-blue-900">
              <svg
                aria-hidden="true"
                className="w-3 h-3 text-blue-300"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </span>
            <h3 className="mb-1 text-lg font-semibold  text-white">
              Tashkeel - Arabic Diacritic Prediction
              <small className="ml-2 font-semibold  text-gray-400">
                <br />
                Jan 2024
              </small>
            </h3>

            <time className="block mb-2 text-sm font-normal leading-normal text-blue-300 ">
              A fourth-year college project. <br />
              NLP course project.
            </time>
            <p className="font-normal  text-gray-400">
              Description: Developed Arabic diacritic prediction system using LSTM neural networks. Utilized one-hot encoding, dropout layers for enhanced performance. Conducted thorough preprocessing of Arabic text data for model training. Achieved 90.4% accuracy in diacritic prediction.
            </p>
            <p className="mb-4 font-normal  text-gray-400">
              Tools and Technologies: Python, Tensorflow, Kaggle. 
            </p>
            {/* <a
              href="#"
              className="inline-flex items-center px-4 py-2 text-sm font-medium  bg-white border border-gray-200 rounded-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-200 focus:text-blue-700 bg-gray-800 text-gray-400 border-gray-600 hover:text-white hover:bg-gray-700 focus:ring-gray-700"
            >
              <svg
                className="w-4 h-4 mr-2"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M6 2a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V7.414A2 2 0 0015.414 6L12 2.586A2 2 0 0010.586 2H6zm5 6a1 1 0 10-2 0v3.586l-1.293-1.293a1 1 0 10-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 11.586V8z"
                  clipRule="evenodd"
                ></path>
              </svg>{" "}
              Download ZIP
            </a> */}
          </li>
        <li className="mb-10 ml-6">
            <span className="absolute flex items-center justify-center w-6 h-6 rounded-full -left-3 ring-8  ring-gray-900 bg-blue-900">
              <svg
                aria-hidden="true"
                className="w-3 h-3 text-blue-300"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </span>
            <h3 className="mb-1 text-lg font-semibold  text-white">
            Speed Sign Detection System 
                          <small className="ml-2 font-semibold  text-gray-400">
                <br />
                Jan 2024
              </small>
            </h3>

            <time className="block mb-2 text-sm font-normal leading-normal text-blue-300 ">
              A fourth-year college project. <br />
              Image Processing course project.
            </time>
            <p className="font-normal  text-gray-400">
              Description: Developed speed sign detection system using classical image processing techniques Including noise removal, edge detection, morphology, and color detection. Extracted digits, and performed OCR using KNN and SVM. Enhanced monitoring with a robust real-time or pre-recorded video input system.

            </p>
            <p className="mb-4 font-normal  text-gray-400">
              Tools and Technologies: Python, OpenCV, React.js, Flask. 
            </p>
            {/* <a
              href="#"
              className="inline-flex items-center px-4 py-2 text-sm font-medium  bg-white border border-gray-200 rounded-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-200 focus:text-blue-700 bg-gray-800 text-gray-400 border-gray-600 hover:text-white hover:bg-gray-700 focus:ring-gray-700"
            >
              <svg
                className="w-4 h-4 mr-2"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M6 2a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V7.414A2 2 0 0015.414 6L12 2.586A2 2 0 0010.586 2H6zm5 6a1 1 0 10-2 0v3.586l-1.293-1.293a1 1 0 10-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 11.586V8z"
                  clipRule="evenodd"
                ></path>
              </svg>{" "}
              Download ZIP
            </a> */}
          </li>
          <li className="mb-10 ml-6">
            <span className="absolute flex items-center justify-center w-6 h-6 rounded-full -left-3 ring-8  ring-gray-900 bg-blue-900">
              <svg
                aria-hidden="true"
                className="w-3 h-3 text-blue-300"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </span>
            <h3 className="mb-1 text-lg font-semibold  text-white">
            Masalat Moltaheba Game                            <small className="ml-2 font-semibold  text-gray-400">
                <br />
                Jan 2024
              </small>
            </h3>

            <time className="block mb-2 text-sm font-normal leading-normal text-blue-300 ">
              A fourth-year college project. <br />
              Graphics course project.
            </time>
            <p className="font-normal  text-gray-400">
              Description: "Masalat Moltaheba" is a game that immerses players in a thrilling escape through perilous landscapes using keyboard controls while managing limited credits to survive encounters with dangerous Masaslat. With strategic jumps and quick reflexes, navigate to the endpoint without losing all your credits.
            </p>
            <p className="mb-4 font-normal  text-gray-400">
              Tools and Technologies: OpenGl 3, C++.
            </p>
            {/* <a
              href="#"
              className="inline-flex items-center px-4 py-2 text-sm font-medium  bg-white border border-gray-200 rounded-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-200 focus:text-blue-700 bg-gray-800 text-gray-400 border-gray-600 hover:text-white hover:bg-gray-700 focus:ring-gray-700"
            >
              <svg
                className="w-4 h-4 mr-2"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M6 2a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V7.414A2 2 0 0015.414 6L12 2.586A2 2 0 0010.586 2H6zm5 6a1 1 0 10-2 0v3.586l-1.293-1.293a1 1 0 10-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 11.586V8z"
                  clipRule="evenodd"
                ></path>
              </svg>{" "}
              Download ZIP
            </a> */}
          </li>
          <li className="mb-10 ml-6">
            <span className="absolute flex items-center justify-center w-6 h-6 rounded-full -left-3 ring-8  ring-gray-900 bg-blue-900">
              <svg
                aria-hidden="true"
                className="w-3 h-3 text-blue-300"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </span>
            <h3 className="mb-1 text-lg font-semibold  text-white">
              Eventbrite application clone
              <small className="ml-2 font-semibold  text-gray-400">
                <br />
                May 2023
              </small>
            </h3>

            <time className="block mb-2 text-sm font-normal leading-normal text-blue-300 ">
              A third-year college project. <br />
              Software Engineering course project.
            </time>
            <p className=" text-base font-normal  text-gray-400">
              Description: The project aims to design and implement a software
              product using state-of-the-art tools and technologies in the
              software industry. I am the subteam leader of the frontend team.
            </p>
            <p className="mb-4 text-base font-normal  text-gray-400">
              Tools and Technologies: React, Redux Toolkit, React-Router, Axios, React Bootstrap, Jest, Tailwind
            </p>
            {/* <a
              href="#"
              className="inline-flex items-center px-4 py-2 text-sm font-medium  bg-white border border-gray-200 rounded-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-200 focus:text-blue-700 bg-gray-800 text-gray-400 border-gray-600 hover:text-white hover:bg-gray-700 focus:ring-gray-700"
            >
              <svg
                className="w-4 h-4 mr-2"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M6 2a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V7.414A2 2 0 0015.414 6L12 2.586A2 2 0 0010.586 2H6zm5 6a1 1 0 10-2 0v3.586l-1.293-1.293a1 1 0 10-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 11.586V8z"
                  clipRule="evenodd"
                ></path>
              </svg>{" "}
              Download ZIP
            </a> */}
          </li>
      
          <li className="mb-10 ml-6">
            <span className="absolute flex items-center justify-center w-6 h-6 rounded-full -left-3 ring-8  ring-gray-900 bg-blue-900">
              <svg
                aria-hidden="true"
                className="w-3 h-3 text-blue-300"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </span>
            <h3 className="mb-1 text-lg font-semibold  text-white">
              Abeelo w Edeelo Search Engine
              <small className="ml-2 font-semibold  text-gray-400">
                <br />
                May 2023
              </small>
            </h3>

            <time className="block mb-2 text-sm font-normal leading-normal text-blue-300 ">
              A third-year college project. <br />
              Advanced Programming Techniques course project.
            </time>
            <p className=" text-base font-normal  text-gray-400">
              Description: The project aimed to develop a simple Crawler- based search engine that demonstrates the main 		features of a search engine (web crawling, indexing and ranking) and the interaction between them.

            </p>
            <p className="mb-4 text-base font-normal  text-gray-400">
              Tools and Technologies: Java, Spring Boot, React, MongoDB
            </p>
            {/* <a
              href="#"
              className="inline-flex items-center px-4 py-2 text-sm font-medium  bg-white border border-gray-200 rounded-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-200 focus:text-blue-700 bg-gray-800 text-gray-400 border-gray-600 hover:text-white hover:bg-gray-700 focus:ring-gray-700"
            >
              <svg
                className="w-4 h-4 mr-2"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M6 2a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V7.414A2 2 0 0015.414 6L12 2.586A2 2 0 0010.586 2H6zm5 6a1 1 0 10-2 0v3.586l-1.293-1.293a1 1 0 10-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 11.586V8z"
                  clipRule="evenodd"
                ></path>
              </svg>{" "}
              Download ZIP
            </a> */}
          </li>
          <li className="mb-10 ml-6">
            <span className="absolute flex items-center justify-center w-6 h-6 rounded-full -left-3 ring-8  ring-gray-900 bg-blue-900">
              <svg
                aria-hidden="true"
                className="w-3 h-3 text-blue-300"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </span>
            <h3 className="mb-1 text-lg font-semibold  text-white">
              Warehouse Management System
              <small className="ml-2 font-semibold  text-gray-400">
                <br />
                Jan 2022{" "}
              </small>
            </h3>

            <time className="block mb-2 text-sm font-normal leading-normal text-blue-300 ">
              A second-year college project. <br></br>Database Management course
              project.
            </time>
            <p className="text-base font-normal  text-gray-400">
              Description: The system is designed for a warehouse with multiple
              storefronts. It enables the workers to monitor the availability
              and location of all goods, tracks orders from suppliers, and
              adding analytic tools for top managers
            </p>
            <p className="text-base font-normal  text-gray-400">
              Tools and Technologies: C#, Microsoft SQL Server Management,
              MySQL.
            </p>
          </li>
          <li className="ml-6 mb-10 ">
            <span className="absolute flex items-center justify-center w-6 h-6 rounded-full -left-3 ring-8  ring-gray-900 bg-blue-900">
              <svg
                aria-hidden="true"
                className="w-3 h-3 text-blue-300"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </span>
            <h3 className="mb-1 text-lg font-semibold  text-white">
              Mars Exploration
              <small className="ml-2 font-semibold  text-gray-400">
                <br />
                Jan 2022{" "}
              </small>
            </h3>
            <time className="block mb-2 text-sm font-normal leading-normal text-blue-300 ">
              A second-year college project. <br /> Data Structures and
              Algorithms course project.
            </time>
            <p className="text-base font-normal  text-gray-400">
              Description: A simple command-line simulator for a hypothetical
              Mars exploaration mission. It gets from the user information about
              the rovers and the missions required, Then it will simulates the
              mission assignment process
            </p>
            <p className="text-base font-normal  text-gray-400">
              Tools and Technologies: C++, Data Structures, Microsoft Visual
              Studio 2019
            </p>
          </li>
          <li className="ml-6 mb-10 ">
            <span className="absolute flex items-center justify-center w-6 h-6 rounded-full -left-3 ring-8  ring-gray-900 bg-blue-900">
              <svg
                aria-hidden="true"
                className="w-3 h-3 text-blue-300"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </span>
            <h3 className="mb-1 text-lg font-semibold  text-white">
              Paint For Kids Game App
              <small className="ml-2 font-semibold  text-gray-400">
                <br />
                Jun 2021{" "}
              </small>
            </h3>
            <time className="block mb-2 text-sm font-normal leading-normal text-blue-300 ">
              A first-year college project. <br /> Programming Techniques course
              project.
            </time>
            <p className="text-base font-normal  text-gray-400">
              Description: Applying object oriented programming concepts. we
              built a simple application that enables kids to draw fancy shapes
              and also play some simple games with those shapes
            </p>
            <p className="text-base font-normal  text-gray-400">
              Tools and Technologies: C++, object oriented programming,
              Microsoft Visual Studio 2019
            </p>
          </li>
          <li className="ml-6 mb-10 ">
            <span className="absolute flex items-center justify-center w-6 h-6 rounded-full -left-3 ring-8  ring-gray-900 bg-blue-900">
              <svg
                aria-hidden="true"
                className="w-3 h-3 text-blue-300"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </span>
            <h3 className="mb-1 text-lg font-semibold  text-white">
              The Processor Simulation Game
              <small className="ml-2 font-semibold  text-gray-400">
                <br />
                Jan 2022{" "}
              </small>
            </h3>
            <time className="block mb-2 text-sm font-normal leading-normal text-blue-300 ">
              A second-year college project. <br /> Microprocessors-1 course
              project.
            </time>
            <p className="text-base font-normal  text-gray-400">
              Description: A two-player processor simulation where each player
              tries to prevent their opponent from reaching a specific value in
              one of their registers. The players communicate with each other
              using serial communications.
            </p>
            <p className="text-base font-normal  text-gray-400">
              Tools and Technologies: Intel x86 Assembly, DOSBox, MASM.
            </p>
          </li>
          <li className="ml-6 mb-10 ">
            <span className="absolute flex items-center justify-center w-6 h-6 rounded-full -left-3 ring-8  ring-gray-900 bg-blue-900">
              <svg
                aria-hidden="true"
                className="w-3 h-3 text-blue-300"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </span>
            <h3 className="mb-1 text-lg font-semibold  text-white">
              Operating System Scheduler simulator
              <small className="ml-2 font-semibold  text-gray-400">
                <br />
                Jan 2023{" "}
              </small>
            </h3>
            <time className="block mb-2 text-sm font-normal leading-normal text-blue-300 ">
              A third-year college project.
              <br />
              Operating Systems.
            </time>
            <p className="text-base font-normal  text-gray-400">
              Description: A CPU scheduler determines an order for the execution
              of its processes according to a chosen scheduling algorithms:
              Highest Priority First, Shortest Time Remaining Next, Round Robin,
              and Multi Level Queue
            </p>
            <p className="text-base font-normal  text-gray-400">
              Tools and Technologies: C, Linux, Docker
            </p>
          </li>
        </ol>
      </div>
    </section>
  );
};

export default Projects;
