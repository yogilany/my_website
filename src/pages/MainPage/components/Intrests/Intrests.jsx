import React from "react";

const Intrests = () => {
  return (
    <section
      class="py-24 bg-gradient-to-r from-pink-500 to-orange-400  "
      id="section-three"
    >
      <div class="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
        <div class="max-w-screen-md mb-8 lg:mb-16">
          <h2 class="mb-4 text-6xl md:text-8xl tracking-tight font-extrabold text-gray-900 dark:text-white">
            Don't hesitate to contact me
          </h2>
          {/* <p class="text-gray-500 sm:text-xl dark:text-gray-400">
            Here at Flowbite we focus on markets where technology, innovation,
            and capital can unlock long-term value and drive economic growth.
          </p> */}
        </div>
        <div class="space-y-8 md:grid md:grid-cols-2 lg:grid-cols-4 md:gap-32 md:space-y-0">
          <div class="grid grid-cols-2 ">
            {" "}
            <div class="flex justify-center items-center mb-4 w-20 h-20 rounded-full bg-primary-100 bg-opacity-40 lg:h-20 lg:w-20 ">
              <svg
                fill="currentColor"
                class="w-10 h-10 text-primary-600 lg:w-10 lg:h-10 dark:text-white"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <path d="M3 4a2 2 0 00-2 2v1.161l8.441 4.221a1.25 1.25 0 001.118 0L19 7.162V6a2 2 0 00-2-2H3z"></path>
                <path d="M19 8.839l-7.77 3.885a2.75 2.75 0 01-2.46 0L1 8.839V14a2 2 0 002 2h14a2 2 0 002-2V8.839z"></path>
              </svg>
            </div>
            <div>
              {" "}
              <h3 class="mb-2 text-xl font-bold dark:text-white">Email</h3>
              <p class="text-lg  dark:text-white">yogilany@gmail.com</p>
            </div>
          </div>
          <div class="grid grid-cols-2 ">
            {" "}
            <div class="flex justify-center items-center mb-4 w-20 h-20 rounded-full bg-primary-100 bg-opacity-40 lg:h-20 lg:w-20 ">
              <svg
                fill="currentColor"
                class="w-10 h-10 text-primary-600 lg:w-10 lg:h-10 dark:text-white"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <path d="M8 16.25a.75.75 0 01.75-.75h2.5a.75.75 0 010 1.5h-2.5a.75.75 0 01-.75-.75z"></path>
                <path
                  clip-rule="evenodd"
                  fill-rule="evenodd"
                  d="M4 4a3 3 0 013-3h6a3 3 0 013 3v12a3 3 0 01-3 3H7a3 3 0 01-3-3V4zm4-1.5v.75c0 .414.336.75.75.75h2.5a.75.75 0 00.75-.75V2.5h1A1.5 1.5 0 0114.5 4v12a1.5 1.5 0 01-1.5 1.5H7A1.5 1.5 0 015.5 16V4A1.5 1.5 0 017 2.5h1z"
                ></path>
              </svg>
            </div>
            <div>
              {" "}
              <h3 class="mb-2 text-xl font-bold dark:text-white">Phone</h3>
              <p class="text-lg  dark:text-white">+201159746101</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Intrests;
