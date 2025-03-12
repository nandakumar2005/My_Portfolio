import React from "react";
import { forwardRef } from "react";


const Resume = (props, ref) => {
  return (
    <section ref={ref} className="bg-white dark:bg-amber-400 py-12">
      <div className="max-w-7xl px-6 mx-auto">
      <p className="text-xl font-medium text-stone-950">My</p>
        <h1 className="mt-1 text-2xl font-semibold text-gray-800 capitalize lg:text-5xl dark:text-slate-50">
          Resume
        </h1>
        <div class="flex mx-auto mt-2">
          <span class="inline-block w-20 h-1 bg-stone-950 rounded-full"></span>
          <span class="inline-block w-3 h-1 mx-1 bg-stone-900 rounded-full"></span>
          <span class="inline-block w-1 h-1 bg-stone-800 rounded-full"></span>
        </div>
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
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white flex items-center justify-between sm:text-2xl">
                    Frontend Developer
                    <span className="w-auto ml-3 hidden sm:hidden lg:block bg-blue-100 text-stone-950 text-xs font-medium px-1.5 border-2 border-green-500 dark:bg-transparent rounded-md dark:text-green-400">
                      Entry Level
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
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white flex items-center justify-between sm:text-2xl">
                Infographic Design
                  </h3>
                  <time className="block mb-2 text-sm text-gray-400 dark:text-amber-400">
                    Mar 2023 - Jul 2024
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
