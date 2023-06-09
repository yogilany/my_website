import React from "react";
import coone from "../../../../assets/co-1.png";
import cotwo from "../../../../assets/co-2.png";
import cothree from "../../../../assets/co-3.png";

const Contact = () => {
  return (
    <>
      <section className=" bg-gray-900   py-12" id="section-three">
        <div className="max-w-screen-xl px-4 py-8 mx-auto text-center lg:py-16 lg:px-6">
          <h1 className="  mb-12 text-5xl font-extrabold  text-white md:text-5xl lg:text-8xl">
            {" "}
            <span className="underline underline-offset-3 decoration-8 decoration-blue-400 decoration-blue-600">
              {" "}
              After all ...
            </span>
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="mx-auto">
              <figure className="relative max-w-sm ">
                <img
                  className="h-auto max-w-full rounded-lg"
                  src={coone}
                  alt=""
                />
                <figcaption className="absolute px-4 text-lg text-bold text-white bottom-6">
                  <h1 className="font-bold text-gray-900 text-white md:text-2xl shadow">
                    You need workforce
                  </h1>
                </figcaption>
              </figure>
            </div>
            <div className="mx-auto">
              <figure className="relative max-w-sm ">
                <img
                  className="h-auto max-w-full rounded-lg"
                  src={cotwo}
                  alt=""
                />
                <figcaption className="absolute px-4 text-lg text-bold text-white bottom-6">
                  <h1 className="font-bold text-gray-900 text-white md:text-2xl shadow">
                    I need experience
                  </h1>
                </figcaption>
              </figure>
            </div>
            <div className="mx-auto">
              <figure className="relative max-w-sm shadow-gray-800">
                <img
                  className="h-auto max-w-full rounded-lg "
                  src={cothree}
                  alt=""
                />
                <figcaption className="absolute px-4 text-lg text-bold text-white bottom-6 ">
                  <h1 className="font-bold text-gray-900 text-white md:text-2xl shadow">
                    So it sounds like a match
                  </h1>
                </figcaption>
              </figure>
            </div>
          </div>
        </div>
      </section>
      <section className=" bg-gray-700 py-12">
        <div className="max-w-screen-xl px-4 py-8 mx-auto text-center lg:py-16 lg:px-6">
          <dl className="grid max-w-screen-md gap-8 mx-auto text-gray-900 sm:grid-cols-3 text-white">
            <div className="flex flex-col items-center justify-center">
              <dt className="mb-2 text-3xl md:text-4xl font-extrabold">
                EMAIL ME
              </dt>
              <dd className="font-light text-gray-500 text-gray-400">
                <p className="text-gray-500 text-gray-400">
                  <a
                    href="mailto: yogilany@gmail.com"
                    className="inline-flex items-center font-medium text-blue-600 text-blue-500 hover:underline"
                  >
                    yogilany@gmail.com
                    <svg
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
                    </svg>
                  </a>
                </p>
              </dd>
            </div>

            <div className="flex flex-col items-center justify-center">
              <dt className="mb-2 text-3xl md:text-4xl font-extrabold">
                CALL ME
              </dt>
              <dd className=" font-medium text-blue-600 text-blue-500  ">
                +201159746101
              </dd>
            </div>
            <span className="inline-flex mx-auto sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
              <a
                className="text-gray-400"
                href="https://www.facebook.com/profile.php?id=100006069935995"
                target="_blank"
                rel="noreferrer"
              >
                <svg
                  fill="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="w-12 h-12"
                  viewBox="0 0 24 24"
                >
                  <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                </svg>
              </a>
              <a
                className="ml-3 text-gray-400"
                href="https://www.instagram.com/theyousefgilany/"
                target="_blank"
                rel="noreferrer"
              >
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="w-12 h-12"
                  viewBox="0 0 24 24"
                >
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
                </svg>
              </a>
              <a
                className="ml-3 text-gray-400"
                href="https://www.linkedin.com/in/yousefgilany/"
                target="_blank"
                rel="noreferrer"
              >
                <svg
                  fill="currentColor"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="0"
                  className="w-12 h-12"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke="none"
                    d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"
                  ></path>
                  <circle cx="4" cy="4" r="2" stroke="none"></circle>
                </svg>
              </a>
            </span>
          </dl>
        </div>
      </section>
    </>
  );
};

export default Contact;
