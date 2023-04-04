import React from "react";
import Label from "../Elements/Label";
import SolidLabel from "../Elements/SolidLabel";

const MoreExp = () => {
  return (
    <section class="text-gray-400 bg-gray-800 body-font">
      <div class="container px-5 py-24 mx-auto">
        <div class="text-center mb-10">
          <h1 class="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
            I also have a{" "}
            <span class="text-blue-600 dark:text-blue-500">fair</span> amount of
            experience with{" "}
          </h1>
        </div>
        <div class="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
          <div class=" p-2 sm:w-1/6 w-full">
            <SolidLabel title={"C"} />
          </div>
          <div class="p-2 sm:w-1/6 w-full">
            <SolidLabel title={"C++"} />
          </div>
          <div class="p-2 sm:w-1/6 w-full">
            <SolidLabel title={"C#"} />
          </div>
          <div class="p-2 sm:w-1/6 w-full">
            <SolidLabel title={"Flutter"} />
          </div>
          <div class="p-2 sm:w-1/6 w-full">
            <SolidLabel title={"Python"} />
          </div>
          <div class="p-2 sm:w-1/6 w-full">
            <SolidLabel title={"Java"} />
          </div>
          <div class="p-2 sm:w-1/3 w-full">
            <SolidLabel title={"Object Oriented Programming"} />
          </div>
          <div class="p-2 sm:w-1/3 w-full">
            <SolidLabel title={"Algorithms"} />
          </div>
          <div class="p-2 sm:w-1/3 w-full">
            <SolidLabel title={"Data Structures"} />
          </div>
          <div class="p-2 sm:w-1/4 w-full">
            <SolidLabel title={"Microdoft SQL Server"} />
          </div>
          <div class="p-2 sm:w-1/4 w-full">
            <SolidLabel title={"Quartus"} />
          </div>
          <div class="p-2 sm:w-1/4 w-full">
            <SolidLabel title={"Logisim"} />
          </div>
          <div class="p-2 sm:w-1/4 w-full">
            <SolidLabel title={"Multisim"} />
          </div>
          <div class="p-2 sm:w-1/5 w-full">
            <SolidLabel title={"Microdoft Office"} />
          </div>
          <div class="p-2 sm:w-1/5 w-full">
            <SolidLabel title={"Adobe Illustrator"} />
          </div>
          <div class="p-2 sm:w-1/5 w-full">
            <SolidLabel title={"Adobe Photoshop"} />
          </div>
          <div class="p-2 sm:w-1/5 w-full">
            <SolidLabel title={"Adobe XD"} />
          </div>
          <div class="p-2 sm:w-1/5 w-full">
            <SolidLabel title={"Final Cut Pro X"} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default MoreExp;
