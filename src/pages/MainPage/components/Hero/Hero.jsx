import React, { useState, useEffect } from "react";

import Resume from "../../../../assets/Yousef_Gilany_Resume.pdf";
import { HashLink } from "react-router-hash-link";
import Typical from 'react-typical'
import ProfilePicture from "../../../../assets/yousef_gilany.webp"

const Hero = () => {
  const [range, setRange] = useState(85);
  const [count, setCount] = useState(0);
  const [message, setMessage] = useState(
    "قلل إحتمالية حصولي على تدريب و انظر ماذا سيحدث"
  );

  useEffect(() => {
    if (count == 0) {
      if (range < 50) {
        setMessage("ياساتر يارب! زود تاني بسرعة");
        setCount(1);
      }
    }

    if (count == 1) {
      if (range < 50) {
        setMessage("ياساتر يارب! زود تاني بسرعة");
      } else {
        setMessage("قشطة انا بحب كدة");
        setCount(2);
      }
    }

    if (count == 2) {
      if (range < 50) {
        setMessage("زود أرجوك مش قادر أتنفس");
      } else {
        setMessage("قشطة انا بحب كدة");
        setCount(2);
      }
    }
  }, [range]);

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
      <section className=" bg-gray-900 pt-12 md:pt-20 pb-15" id="section-one">
        <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
          <div className="mr-auto place-self-center lg:col-span-7">
       
            <Typical
            className="mb-4 text-5xl  font-extrabold tracking-tight leading-none  md:text-5xl lg:text-6xl text-gray-300"
              steps={['Ahlan!', 1000, 'Hey!', 1500, 'Hola!', 1500, 'Hallo!', 1000, 'Bonjour!', 1500]}
              loop={Infinity}
              wrapper="p"
            />
            <h1 className="mb-4 text-6xl font-extrabold tracking-tight leading-none md:text-5xl lg:text-8xl text-white">
              I'm{" "}
              <span className="text-transparent  bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-500">
                Yousef.
              </span>
            </h1>
            <h1 className="leading-relaxed md:mb-4 text-2xl font-bold tracking-tight  md:text-2xl lg:text-3xl text-white">
              I'm a {" "}
              <span className="text-transparent  bg-clip-text bg-gradient-to-r  from-pink-500 to-orange-400">
                Software Engineer.
              </span>
            </h1>


            <p className="max-w-2xl mb-6 font-light lg:mb-8 md:text-lg lg:text-xl text-gray-400">
              Are you looking for an Engineer with a sense of humor and a love for
              coding? Lucky you! You've found the perfect match.
            </p>
            <div className="flex flex-col mb-8 lg:mb-16 space-y-4 sm:flex-row sm:justify-left sm:space-y-0 sm:space-x-4">
              <a
                href="#"
                className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 focus:ring-primary-900"
              >
                <HashLink smooth to="/#section-four">
                  Who am I?
                </HashLink>
              </a>
              <a
                href={Resume}
                target="_blank"
                rel="noreferrer"
                className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-gray-900 rounded-lg border border-gray-300 hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 text-white border-gray-700 hover:bg-gray-700 focus:ring-gray-800"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="mr-2 -ml-1 w-5 h-5"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.625 1.5c-1.036 0-1.875.84-1.875 1.875v17.25c0 1.035.84 1.875 1.875 1.875h12.75c1.035 0 1.875-.84 1.875-1.875V12.75A3.75 3.75 0 0016.5 9h-1.875a1.875 1.875 0 01-1.875-1.875V5.25A3.75 3.75 0 009 1.5H5.625zM7.5 15a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5A.75.75 0 017.5 15zm.75 2.25a.75.75 0 000 1.5H12a.75.75 0 000-1.5H8.25z"
                    clipRule="evenodd"
                  />
                  <path d="M12.971 1.816A5.23 5.23 0 0114.25 5.25v1.875c0 .207.168.375.375.375H16.5a5.23 5.23 0 013.434 1.279 9.768 9.768 0 00-6.963-6.963z" />
                </svg>
                See my resume
              </a>
            </div>
            {/* <div className="grid grid-cols-3 grid-flow-row gap-4">
              <div className="col-span-2 ...">
                <label
                  htmlFor="default-range"
                  className="block mb-2 text-xl font-medium  text-white"
                >
                  {message}
                </label>
              </div>
              <div className="col-span-1 ... justify-self-end">
                <label
                  htmlFor="default-range"
                  className={`block mb-2 text-3xl font-bold text-gray-900 ${range > 50 ? "text-green-500" : "text-red-500"
                    }`}
                >
                  {range}%{" "}
                </label>
              </div>
            </div> */}

            {/* <input
              onChange={(e) => setRange(e.target.value)}
              id="medium-range"
              type="range"
              value={range}
              className="w-full h-2 mb-6 bg-gray-200 rounded-lg appearance-none cursor-pointer "
            /> */}
          </div>
          <div className=" lg:mt-0 lg:col-span-5 lg:flex">
            {range > 50 ? (
              <img
                src={ProfilePicture}
                alt="mockup"
                style={{
                  objectFit: "contain",
                  width: "100%",
                  height: " 100%",
                }}
              />
            ) : (
              <img
                src="https://i.imgur.com/jX3gujK.png"
                alt="mockup"
                style={{
                  objectFit: "contain",
                  width: "100%",
                  height: " 100%",
                }}
              />
            )}
          </div>

          <hr className="drop-shadow-xl w-48 h-1 mx-auto my-4 border-0 rounded md:my-10 bg-gray-700" />
        </div>
      </section>
    </>
  );
};

export default Hero;
