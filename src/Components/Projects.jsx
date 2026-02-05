import React from "react";
import project_1 from "../assets/Images/project_1.png"
import project_2 from "../assets/Images/project_2.png"

const Projects = () => {
  return (
    <section className="bg-white dark:bg-stone-950 py-12 ">
      <div className="max-w-7xl px-6 mx-auto">
        <p className="text-xl font-medium text-amber-400">My</p>
        <h1 className="mt-1 text-2xl font-semibold text-gray-800 capitalize lg:text-5xl dark:text-slate-50">
          Projects
        </h1>
        <div className="flex mx-auto mt-2">
          <span className="inline-block w-20 h-1 bg-amber-400 rounded-full"></span>
          <span className="inline-block w-3 h-1 mx-1 bg-amber-300 rounded-full"></span>
          <span className="inline-block w-1 h-1 bg-amber-200 rounded-full"></span>
        </div>
        <section className="bg-amber-400 sm:my-20 my-8 rounded-2xl">
          <div className="container sm:p-10 p-2 mx-auto">
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
              {/* Card 1 */}
              <div className="relative group transition-transform duration-300 hover:scale-105">
                <img
                  className="object-cover w-full h-96 rounded-xl shadow-lg brightness-90 group-hover:brightness-75 transition duration-300"
                  src={project_1}
                  alt="Portfolio"
                />
                <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 bg-white/80 dark:bg-stone-950/80 backdrop-blur-lg shadow-xl rounded-xl p-6 w-[90%] group-hover:-translate-y-2 transition-all duration-300 z-20">
                  <p className="font-semibold text-gray-800 dark:text-white text-sm sm:text-lg">
                    1. Portfolio
                  </p>
                  <p className="mt-2 text-xs sm:text-sm text-gray-600 dark:text-gray-300">
                  This is my portfolio. Here you can know about what kind of
                  person I am. So just click the below link to explore.
                  </p>
                  <a
                    href="https://nandakumarp.netlify.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block mt-2 sm:mt-4 text-xs sm:text-sm text-yellow-500 hover:underline"
                  >
                    nandakumarp.netlify.app
                  </a>
                </div>
              </div>

              {/* Card 2 */}
              <div className="relative group transition-transform duration-300 hover:scale-105">
                <img
                  className="object-cover w-full h-96 rounded-xl shadow-lg brightness-90 group-hover:brightness-75 transition duration-300"
                  src={project_2}
                  alt="Movie Detail Website"
                />
                <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 bg-white/80 dark:bg-stone-950/80 backdrop-blur-lg shadow-xl rounded-xl p-6 w-[90%] group-hover:-translate-y-2 transition-all duration-300 z-20">
                <p className="font-semibold text-gray-800 dark:text-white text-sm sm:text-lg">
                2. My Movies
                  </p>
                  <p className="mt-2 text-xs sm:text-sm text-gray-600 dark:text-gray-300">
                    This project is about a movie searching app. Users can see
                    movie details and watch movies.
                  </p>
                  <a
                    href="https://mymovia.netlify.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block mt-2 sm:mt-4 text-xs sm:text-sm text-yellow-500 hover:underline"
                  >
                    mymovia.netlify.app
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </section>
  );
};

export default Projects;
