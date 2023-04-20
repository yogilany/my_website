import React from "react";

const Story = () => {
  return (
    <section class=" dark:bg-gray-900 py-24  md:py-12">
      <div class="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
        <div class="font-light  sm:text-lg dark:text-gray-400">
          <h2 class="leading-12 mb-12 text-4xl tracking-tight font-extrabold  dark:text-white">
            <mark class="px-2 text-white  rounded dark:bg-blue-500">
              So far
            </mark>{" "}
            I have had only <span class=" dark:text-blue-500">one</span>{" "}
            internship opportunity,
            <small class="ml-2 font-semibold dark:text-gray-400">
              and it was in{" "}
              <a
                href="https://cech.uc.edu/schools/it/centers/itsolutionscenter.html"
                target={"_blank"}
                rel={"noreferrer"}
                class="inline-flex items-center font-medium text-blue-600 dark:text-blue-500 hover:underline"
              >
                ITSC
                <svg
                  aria-hidden="true"
                  class="w-5 h-5 ml-1"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </a>{" "}
              in the United States.
            </small>
          </h2>
          <p class="mb-4 ">
            From{" "}
            <span class="font-semibold text-gray-900  dark:text-white decoration-blue-500">
              July 11, 2022
            </span>{" "}
            to{" "}
            <span class="font-semibold text-gray-900  dark:text-white decoration-blue-500">
              September 30, 2022
            </span>{" "}
            for a total of{" "}
            <span class="font-semibold text-gray-900  dark:text-white decoration-blue-500">
              480 hours,
            </span>{" "}
            I have learned and practiced full stack software development in the
            full software project life cycle. I worked on a project to develop
            enhancements to the Risk Assessment software product that assists
            probation officers in assessing client's risk. The software is an
            applied research project with the University of Cincinnati
            Corrections Institute.
          </p>
          <p>
            I worked with undergraduate and graduate students on a daily basis
            and participated in cultural events at the University and the City
            of Cincinnati.
          </p>
        </div>
        <div class="grid grid-cols-2 gap-4 mt-8">
          <img
            class="w-fit h-96 object-cover  rounded-lg"
            src="https://i.imgur.com/bfWQiZZ.jpg"
            alt="office content 1"
          />
          <img
            class="mt-4 w-full object-cover h-96 lg:mt-10 rounded-lg"
            src="https://i.imgur.com/F0tjcJ4.jpg"
            alt="office content 2"
          />
        </div>
      </div>
    </section>
  );
};

export default Story;
