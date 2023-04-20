import React from "react";
import wie from "../../../../assets/wie.png";
import ep from "../../../../assets/ep.png";
import curt from "../../../../assets/curt.png";
import cufe from "../../../../assets/cufe.png";
import ieee from "../../../../assets/ieee.png";
import teens from "../../../../assets/teens.png";

import Divider from "../../Elements/Divider";

const Activites = () => {
  return (
    <section class="bg-gray-800 pb-12">
      <div class="py-8 lg:py-16 mx-auto max-w-screen-xl px-4">
        <hr className="drop-shadow-xl w-56 md:w-96 h-1 mx-auto my-4 border-0 rounded md:my-10 bg-gray-600" />

        <h2 class="pt-24 py-16 md:py-0 lg:mb-16 text-4xl font-extrabold tracking-tight leading-tight text-center text-white md:text-6xl">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-500">
            Student Activites & NGOs
          </span>{" "}
          I've worked with
        </h2>
        <div class="grid grid-cols-2 gap-8 text-gray-500 sm:gap-12 md:grid-cols-3 lg:grid-cols-6 dark:text-gray-400">
          <a
            href="https://www.facebook.com/WIECairo?mibextid=LQQJ4d"
            target="blank"
            class="flex justify-center items-center"
          >
            <img
              class="w-32 h-32 p-1 rounded-full ring-2 ring-gray-300 dark:ring-gray-500"
              src={wie}
              alt="Bordered avatar"
            />
          </a>
          <a
            href="https://www.facebook.com/IEEECUSB/?mibextid=LQQJ4d"
            target="blank"
            class="flex justify-center items-center"
          >
            <img
              class="w-32 h-32 p-1 rounded-full ring-2 ring-gray-300 dark:ring-gray-500"
              src={ieee}
              alt="Bordered avatar"
            />
          </a>
          <a
            href="https://www.facebook.com/curt.fs?mibextid=LQQJ4d"
            target="blank"
            class="flex justify-center items-center"
          >
            <img
              class="w-32 h-32 p-1 rounded-full ring-2 ring-gray-300 dark:ring-gray-500"
              src={curt}
              alt="Bordered avatar"
            />
          </a>

          <a
            href="https://www.facebook.com/CUFESTCLUB?mibextid=LQQJ4d"
            target="blank"
            class="flex justify-center items-center"
          >
            <img
              class="w-32 h-32 p-1 rounded-full ring-2 ring-gray-300 dark:ring-gray-500"
              src={cufe}
              alt="Bordered avatar"
            />
          </a>
          <a
            href="https://www.facebook.com/Energia.Powered?mibextid=LQQJ4d"
            target="blank"
            class="flex justify-center items-center"
          >
            <img
              class="w-32 h-32 p-1 rounded-full ring-2 ring-gray-300 dark:ring-gray-500"
              src={ep}
              alt="Bordered avatar"
            />
          </a>
          <a
            href="https://www.facebook.com/teensclub.eg?mibextid=LQQJ4d"
            target="blank"
            class="flex justify-center items-center"
          >
            <img
              class="w-32 h-32 p-1 rounded-full ring-2 ring-gray-300 dark:ring-gray-500"
              src={teens}
              alt="Bordered avatar"
            />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Activites;
