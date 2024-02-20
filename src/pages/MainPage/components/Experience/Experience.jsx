import React from "react";
import Label from "../../Elements/Label";
import LabelList from "../../Elements/LabelList";

const Experience = () => {
  const icons = [
    {
      id: 1,
      icon: (
        <svg
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          className="text-blue-500 w-6 h-6 flex-shrink-0 mr-4"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5m.75-9l3-3 2.148 2.148A12.061 12.061 0 0116.5 7.605"
          />
        </svg>
      ),
    },
    {
      id: 2,
      icon: (
        <svg
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          className="text-yellow-500 w-6 h-6 flex-shrink-0 mr-4"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 010 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 010-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
          />
        </svg>
      ),
    },
    {
      id: 3,
      icon: (
        <svg
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          className="text-pink-500 w-6 h-6 flex-shrink-0 mr-4"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75m-16.5-3.75v3.75m16.5 0v3.75C20.25 16.153 16.556 18 12 18s-8.25-1.847-8.25-4.125v-3.75m16.5 0c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125"
          />
        </svg>
      ),
    },
    {
      id: 4,
      icon: (
        <svg
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          className="text-green-500 w-6 h-6 flex-shrink-0 mr-4"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9.53 16.122a3 3 0 00-5.78 1.128 2.25 2.25 0 01-2.4 2.245 4.5 4.5 0 008.4-2.245c0-.399-.078-.78-.22-1.128zm0 0a15.998 15.998 0 003.388-1.62m-5.043-.025a15.994 15.994 0 011.622-3.395m3.42 3.42a15.995 15.995 0 004.764-4.648l3.876-5.814a1.151 1.151 0 00-1.597-1.597L14.146 6.32a15.996 15.996 0 00-4.649 4.763m3.42 3.42a6.776 6.776 0 00-3.42-3.42"
          />
        </svg>
      ),
    },
  ];

  return (
    <section className="text-gray-400 bg-gray-900 body-font" id="section-two">
      <div className="container px-5 py-24 mx-auto">
        <div className="sm:text-left md:text-center mb-10">
          <h1 className="mb-2 text-6xl font-extrabold leading-none tracking-tight md:text-5xl lg:text-6xl text-white">
            I will take care of your{" "}
            <span className="text-blue-600 text-blue-500">work.</span>{" "}
          </h1>

          {/* <h1 className="sm:text-3xl text-2xl font-medium text-center title-font text-white mb-4">
            I will take care of your project
          </h1> */}
          <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">
            From front-end design to back-end coding, I have the full stack
            development skills needed to bring your digital vision to life.
          </p>
        </div>

        <div className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
          <div className="p-2  sm:w-1/4 w-full">
            <Label icon={icons[0].icon} title={"Front-End Development"} />

            <LabelList
              color={"text-blue-600"}
              items={["HTML", "CSS/SASS", "JavaScript", "React.js / Next.js", "Angular"]}
            />
          </div>
          <div className="p-2 sm:w-1/4 w-full">
            <Label icon={icons[1].icon} title={"Back-End Development"} />

            <LabelList
              color={"text-yellow-600"}
              items={["Node.js", "Express.js", "Spring Boot", "REST APIs", "Bcrypt.js"]}
            />
          </div>
          <div className="p-2 sm:w-1/4 w-full">
            <Label icon={icons[2].icon} title={"Databases"} />

            <LabelList
              color={"text-pink-600"}
              items={[
                "MySQL",
                "PostgreSQL",
                "MongoDB",

                "Knex.js",
                "Bookshelf.js",
              ]}
            />
          </div>
          <div className="p-2 sm:w-1/4 w-full">
            <Label icon={icons[3].icon} title={"UI/UX & Tools"} />

            <LabelList
              color={"text-green-600"}
              items={["Tailwind", "MaterialUI", "Adobe XD", "Git & Github"]}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
