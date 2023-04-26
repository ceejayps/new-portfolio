import React from "react";

const WorkExpierence = () => {
  return (
    <div className="bg-white py-6 sm:py-8 lg:py-12">
      <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
        <div className="mb-10 md:mb-16">
          <h2 className="mb-4 text-center text-2xl font-bold text-gray-800 md:mb-6 lg:text-3xl">
            My Work Experience
          </h2>

          <p className="mx-auto max-w-screen-lg text-center text-gray-500 md:text-lg">
          Gain insight into my career journey and experience in various industries, from technology to customer service, through my work experience section on this website.
          </p>
        </div>

        <div className="px-10 max-w-xl mx-auto">
          <ol className="relative border-l border-gray-200 dark:border-gray-700 text-left ">
            <li className="mb-10 ml-4">
              <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
              <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                June 2022 - January 2023
              </time>
              <h3 className="text-lg font-semibold  dark:text-gray-900">
              vertis Tech 
              </h3>
              <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sequi, ullam ut. Assumenda, debitis illum repellendus eligendi totam aliquam aut rerum, facere ducimus, deleniti laudantium repudiandae sit quasi consequuntur possimus atque!
              </p>
              <a
                href="/"
                className="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-200 focus:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-700"
              >
                Learn more{" "}
                <svg
                  className="w-3 h-3 ml-2"
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
            </li>
            <li className="mb-10 ml-4">
              <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
              <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                March 2022
              </time>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-900">
                Marketing UI design in Figma
              </h3>
              <p className="text-base font-normal text-gray-500 dark:text-gray-400">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam, tempora id distinctio esse dignissimos cupiditate, quaerat ipsum error quae assumenda a impedit. Laborum ex omnis nam placeat dolor nostrum enim?
              </p>
            </li>
            <li className="ml-4">
              <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
              <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                April 2022
              </time>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-900">
                E-Commerce UI code in Tailwind CSS
              </h3>
              <p className="text-base font-normal text-gray-500 dark:text-gray-400">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Porro est repellendus laboriosam eligendi, optio quos ex error nobis quisquam, voluptatibus ipsum mollitia, praesentium nihil blanditiis dolore rerum commodi numquam voluptatem.
              </p>
            </li>
          </ol>
        </div>
      </div>
    </div>
  );
};

export default WorkExpierence;
