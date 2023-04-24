import React from "react";
import Label from "../../Elements/Label";
import SolidLabel from "../../Elements/SolidLabel";

const MoreExp = () => {
  return (
    <section className="text-gray-400 bg-gray-800 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="sm:text-left md:text-center mb-10">
          <h1 className="mb-4 text-5xl font-extrabold leading-none tracking-tight md:text-5xl lg:text-6xl text-white">
            I also have a <span className=" text-blue-500">decent</span> amount
            of experience with{" "}
          </h1>
        </div>
        
        <div className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
          <div className=" p-2  md:w-1/6 ">
            <SolidLabel title={"C/C++"} />
          </div>
          <div className="p-2  md:w-1/6 ">
            <SolidLabel title={"C#"} />
          </div>
          <div className="p-2 md:w-1/6 ">
            <SolidLabel title={"Flutter"} />
          </div>
          <div className="p-2 md:w-1/6 ">
            <SolidLabel title={"Python"} />
          </div>
          <div className="p-2 md:w-1/6 ">
            <SolidLabel title={"Java"} />
          </div>
          <div className="p-2 md:w-1/6 ">
            <SolidLabel title={"VHDL"} />
          </div>
          <div className="p-2 md:w-1/3">
            <SolidLabel title={"Object Oriented Programming"} />
          </div>
          <div className="p-2 md:w-1/3">
            <SolidLabel title={"Algorithms"} />
          </div>
          <div className="p-2 md:w-1/3 ">
            <SolidLabel title={"Data Structures"} />
          </div>
          <div className="p-2 md:w-1/5 ">
            <SolidLabel title={"Microsoft SQL Server"} />
          </div>
          <div className="p-2 md:w-1/5 ">
            <SolidLabel title={"Quartus"} />
          </div>
          <div className="p-2 md:w-1/5 ">
            <SolidLabel title={"Logisim"} />
          </div>
          <div className="p-2 md:w-1/5 ">
            <SolidLabel title={"Multisim"} />
          </div>
          <div className="p-2 md:w-1/5 ">
            <SolidLabel title={"Modelsim"} />
          </div>
      
          <div className="p-2 md:w-1/5 ">
            <SolidLabel title={"Microsoft Office"} />
          </div>
          <div className="p-2 md:w-1/5 ">
            <SolidLabel title={"Adobe Illustrator"} />
          </div>
          <div className="p-2 md:w-1/5 ">
            <SolidLabel title={"Adobe Photoshop"} />
          </div>
          <div className="p-2 md:w-1/5 ">
            <SolidLabel title={"Adobe XD"} />
          </div>
          <div className="p-2 md:w-1/5 ">
            <SolidLabel title={"Final Cut Pro X"} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default MoreExp;
