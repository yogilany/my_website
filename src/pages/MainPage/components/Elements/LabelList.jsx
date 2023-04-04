import React from "react";

const LabelList = ({ title, items, color }) => {
  return (
    <>
      {title ? (
        <h2 class="font-medium title-font tracking-widest text-white mb-4 text-sm text-center sm:text-left">
          {String(title).toUpperCase()}
        </h2>
      ) : null}
      <nav class="flex flex-col sm:items-start sm:text-left text-center items-center -mb-1 space-y-2">
        {items.map((item) => {
          return (
            <a>
              <span
                class={`bg-gray-800 ${color} w-4 h-4 mr-2 rounded-full inline-flex items-center justify-center`}
              >
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="3"
                  class="w-3 h-3"
                  viewBox="0 0 24 24"
                >
                  <path d="M20 6L9 17l-5-5"></path>
                </svg>
              </span>
              {item}
            </a>
          );
        })}
      </nav>
    </>
  );
};

export default LabelList;
