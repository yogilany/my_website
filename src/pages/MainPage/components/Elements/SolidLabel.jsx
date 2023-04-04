import React from "react";

const SolidLabel = ({ title }) => {
  return (
    <div class=" bg-gray-700 rounded flex p-4 h-full items-center">
      <span class="mx-auto title-font font-medium text-white">{title}</span>
    </div>
  );
};

export default SolidLabel;
