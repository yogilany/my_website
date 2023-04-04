import React from "react";

const Label = ({ title, icon }) => {
  return (
    <div class="bg-gray-700 rounded flex p-4 h-full items-center">
      {icon}

      <span class="title-font font-medium text-white">{title}</span>
    </div>
  );
};

export default Label;
