import React from "react";

const SolidLabel = ({ title }) => {
  return (
    <div className=" bg-gray-700 rounded flex p-4 h-full items-center">
      <span className="mx-auto title-font font-medium text-white">{title}</span>
    </div>
  );
};

export default SolidLabel;
