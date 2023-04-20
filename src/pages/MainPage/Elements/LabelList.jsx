import React from "react";

const LabelList = ({ title, items, color }) => {
  return (
    <>
      {title ? (
        <h2 className="font-medium title-font tracking-widest text-white mb-4 text-sm text-center sm:text-left">
          {String(title).toUpperCase()}
        </h2>
      ) : null}
      <nav className="flex flex-col sm:items-start sm:text-left  -mb-1 space-y-2">
        {items.map((item, index) => {
          return (
            <div key={index}>
              <span
                className={`bg-gray-800 ${color} w-4 h-4 mr-2 rounded-full inline-flex  justify-center`}
              >
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="3"
                  className="w-3 h-3"
                  viewBox="0 0 24 24"
                >
                  <path d="M20 6L9 17l-5-5"></path>
                </svg>
              </span>
              {item}
            </div>
          );
        })}
      </nav>
    </>
  );
};

export default LabelList;
