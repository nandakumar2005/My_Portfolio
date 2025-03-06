import React from "react";

const Resume = () => {
  return (
    <section className="bg-white dark:bg-amber-400 py-12">
      <div className="max-w-6xl px-6 mx-auto">
        <p className="text-xl font-medium text-stone-950">My</p>
        <h1 className="mt-1 text-2xl font-semibold text-gray-800 capitalize lg:text-3xl dark:text-white">
          Resume
        </h1>

        <div className="mt-20 relative">
          {/* Center Timeline Line */}
          <div className="absolute left-1/2 top-0 w-1 h-full bg-slate-50 transform -translate-x-1/2 hidden md:block"></div>

          <ol className="relative max-w-4xl mx-auto space-y-10">
            {/* First Card (Right Side) */}
            <li className="relative flex flex-col md:flex-row items-center md:justify-between">
              <div className="hidden md:block w-1/2"></div> {/* Empty space for alignment */}
              <div className="relative w-full md:w-1/2 p-4">
                <span className="absolute -left-4 md:-left-6 top-1/2 w-6 h-6 bg-amber-500 border-4 border-white dark:border-gray-900 rounded-full transform -translate-y-1/2"></span>
                <div className="bg-white dark:bg-stone-950 p-6 rounded-lg shadow-md">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white flex items-center">
                    Frontend Developer
                    <span className="ml-3 bg-blue-100 text-stone-950 text-sm font-medium px-2.5 py-0.5 dark:bg-slate-50 rounded-full">
                      Beginner Level
                    </span>
                  </h3>
                  <time className="block mb-2 text-sm text-gray-400 dark:text-amber-400">
                    Nov 2023 - Jul 2024
                  </time>
                  <span className="text-xs bg-slate-50 px-2.5 py-1 rounded-full">
                    Jarvislabs.ai
                  </span>
                  <p className="mt-4 text-gray-600 dark:text-gray-300">
                    I have one year of experience as a Frontend Developer in a
                    startup, working with React.js, Next.js, and Tailwind CSS.
                    I developed responsive web apps and collaborated with teams
                    to create user-friendly interfaces.
                  </p>
                </div>
              </div>
            </li>

            {/* Second Card (Left Side) */}
            <li className="relative flex flex-col md:flex-row items-center md:justify-between">
              <div className="relative w-full md:w-1/2 p-4">
                <span className="absolute -right-4 md:-right-6 top-1/2 w-6 h-6 bg-amber-500 border-4 border-white dark:border-gray-900 rounded-full transform -translate-y-1/2"></span>
                <div className="bg-white dark:bg-stone-950 p-6 rounded-lg shadow-md">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                    Infographic Design
                  </h3>
                  <time className="block mb-2 text-sm text-gray-400 dark:text-amber-400">
                    Nov 2023 - Jul 2024
                  </time>
                  <span className="text-xs bg-slate-50 px-2.5 py-1 rounded-full">
                    Jarvislabs.ai
                  </span>
                  <p className="mt-4 text-gray-600 dark:text-gray-300">
                    Managed social media content for Jarvislabs.ai, focusing on
                    creating infographics and videos with Canva, ensuring brand
                    consistency and engaging visual content.
                  </p>
                </div>
              </div>
              <div className="hidden md:block w-1/2"></div> {/* Empty space for alignment */}
            </li>
          </ol>
        </div>
      </div>
    </section>
  );
};

export default Resume;
