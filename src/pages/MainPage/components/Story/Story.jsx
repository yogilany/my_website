import React from "react";

const Story = () => {
  return (
    <section className=" bg-gray-900 py-24  md:py-12">
      <div className="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
        <div className="font-light  sm:text-lg text-gray-400">
          <h2 className="leading-12 mb-12 text-4xl tracking-tight font-extrabold  text-white">
            {/* <mark className="px-2 text-white  rounded bg-blue-500">So far</mark>{" "} */}
            My first internship opportunity was at{" "}
            {/* <span className=" text-blue-500">one</span>{" "} */}
            <small className="ml-2 font-semibold text-gray-400">
              <a
                href="https://cech.uc.edu/schools/it/centers/itsolutionscenter.html"
                target={"_blank"}
                rel={"noreferrer"}
                className="inline-flex items-center font-medium text-blue-600 text-blue-500 hover:underline"
              >
                <mark className="px-2 text-white font-bold  rounded bg-blue-500">ITSC</mark>{" "}


                {/* <svg
                  aria-hidden="true"
                  className="w-5 h-5 ml-1"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  ></path>
                </svg> */}
              </a>{" "}
              in the United States.
            </small>
          </h2>
          <p className="mb-4 ">
            From{" "}
            <span className="font-semibold text-gray-900  text-white decoration-blue-500">
              July 11, 2022
            </span>{" "}
            to{" "}
            <span className="font-semibold text-gray-900  text-white decoration-blue-500">
              September 30, 2022
            </span>{" "}
            for a total of{" "}
            <span className="font-semibold text-gray-900  text-white decoration-blue-500">
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
          <a
            data-tooltip-target="tooltip3"

            href="https://drive.google.com/file/d/1syTdFqln2jjiiqA57w3JSTN3sZ448wQl/view?usp=sharing"
            target="_blank"
            className="mt-5 inline-flex items-center mb-5 justify-center p-3 text-base font-medium text-gray-500 rounded-lg bg-gray-50 hover:text-gray-900 hover:bg-gray-700 text-gray-400 bg-gray-800 hover:bg-blue-700 hover:text-white"
            rel="noreferrer"
          >
            <span className="w-full">Check out my internship report</span>
            <svg
              aria-hidden="true"
              className="w-6 h-6 ml-3"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                clipRule="evenodd"
              ></path>
            </svg>
          </a>

        </div>

        <div className="grid grid-cols-2 gap-4 mt-8">
          <img
            className="w-fit h-96 object-cover  rounded-lg"
            src="https://i.imgur.com/bfWQiZZ.jpg"
            alt="office content 1"
          />
          <img
            className="mt-4 w-full object-cover h-96 lg:mt-10 rounded-lg"
            src="https://i.imgur.com/F0tjcJ4.jpg"
            alt="office content 2"
          />
        </div>
      </div>
    </section>
  );
};

export default Story;
