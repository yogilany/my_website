import React from "react";
import me from "../../../../assets/me.png";
const AboutMe = () => {
  return (
    <section class="bg-white dark:bg-gray-800" id="section-four">
      <div class="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
        <div class="font-light text-gray-500 sm:text-lg dark:text-gray-400">
          <h2 class="leading-normal  md:leading-normal mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
            Welcome to my portfolio, where the code never sleeps{" "}
            <span class="text-blue-600 dark:text-blue-500">
              and neither do I!
            </span>
          </h2>
          <p class="mb-4 font-medium text-white ">
            My name is Yousef Mahmoud Gilany, and I'm a senior-1 computer
            engineering at Cairo University, Faculty of Engineering.{" "}
          </p>
          <p class="mb-4">
            When I'm not coding, you'll often find me behind the lens of a
            Iphone's camera, capturing the world around me through the art of
            videography. I love experimenting with different styles and
            techniques, and I'm always looking for new ways to tell a story
            through video.
          </p>
          <a
            href="https://www.instagram.com/gilanystudio/"
            target="_blank"
            class="inline-flex items-center mb-5 justify-center p-3 text-base font-medium text-gray-500 rounded-lg bg-gray-50 hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-900 dark:hover:bg-blue-700 dark:hover:text-white"
          >
            <svg
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              class="w-5 h-5 mr-3"
              viewBox="0 0 24 24"
            >
              <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
              <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
            </svg>
            <span class="w-full">Check out my studio</span>
            <svg
              aria-hidden="true"
              class="w-6 h-6 ml-3"
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
          </a>
          <p class="mb-4">
            As a student, I'm also highly involved in campus life. From
            organizing events and volunteering in my community to participating
            in clubs and extracurricular activities, I believe that student life
            is an essential part of the university experience.
          </p>
          <p class="mb-4">
            Of course, my first love is always technology. As a computer
            engineering student, I've honed my skills in programming, software
            development, and hardware design. I'm constantly learning and
            expanding my knowledge, and I'm excited to see where my career in
            technology will take me.
          </p>
          <p>
            Thanks for stopping by, and I look forward to connecting with you
            soon!
          </p>
        </div>
        <div class="grid  gap-4 mt-8">
          <img class="w-full rounded-lg" src={me} alt="office content 1" />
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
