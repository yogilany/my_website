import React from "react";

const Label = ({ title, icon }) => {
  return (
    <div className="bg-gray-700 rounded flex p-4 mt-10 md:mt-2 mb-4 items-center">
      {icon}

      <span className="title-font font-medium text-white">{title}</span>
    </div>
  );
};

export default Label;
