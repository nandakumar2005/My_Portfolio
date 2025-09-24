import React from "react";
import { useState } from "react";
import { FaSearchPlus } from "react-icons/fa"; // Zoom icon
import certificate_1 from "../assets/Images/certificate_1.jpg";

const Certificates = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
  
  return (
    <section className="bg-white dark:bg-amber-400 py-12">
      <div className="max-w-7xl px-6 mx-auto">
        <p className="text-xl font-medium text-stone-950">My</p>
        <h1 className="mt-1 text-2xl font-semibold text-gray-800 capitalize lg:text-5xl dark:text-slate-50">
          Certificate
        </h1>
        <div className="flex mx-auto mt-2">
          <span className="inline-block w-20 h-1 bg-stone-950 rounded-full"></span>
          <span className="inline-block w-3 h-1 mx-1 bg-stone-900 rounded-full"></span>
          <span className="inline-block w-1 h-1 bg-stone-800 rounded-full"></span>
        </div>

        <section className="my-20">
      <div className="container px-6 mx-auto">
        <div className="relative lg:flex lg:items-center gap-10 bg-white/80 dark:bg-stone-950 backdrop-blur-md shadow-xl p-6 rounded-2xl hover:shadow-2xl transition duration-300">
          {/* Certificate Image */}
          <div className="relative group lg:w-1/2 w-full">
            <img
              className="object-cover w-full rounded-xl h-72 lg:h-96 hover:scale-105 transition duration-300"
              src={certificate_1}
              alt="Freshworks Graduate Certificate"
            />
            {/* Zoom Icon */}
            <button
              className="absolute bottom-4 right-4 p-2 bg-black/60 rounded-full text-white opacity-0 group-hover:opacity-100 transition duration-300"
              onClick={() => setIsModalOpen(true)}
              aria-label="Zoom"
            >
              <FaSearchPlus />
            </button>
          </div>

          {/* Text Info */}
          <div className="mt-6 lg:mt-0 lg:w-1/2">
            <h2 className="mt-2 text-2xl font-semibold text-white dark:text-amber-400">
              Freshworks Graduate Certificate
            </h2>

            <p className="mt-4 text-md text-slate-50 dark:text-gray-300">
              I successfully completed the Freshworks Web Development Program from 2022 to 2024, where I gained a strong foundation in HTML5, CSS3, and JavaScript. I also learned the basics of programming, Data Structures and Algorithms (DSA), and improved my problem-solving skills. This program helped me build real-time projects and understand how to approach coding in a structured and efficient way.
            </p>
            <p className="inline-block mt-4 text-amber-400 text-sm italic">
              Timeline : 2022 - 2024
            </p>
          </div>
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-80 flex items-center justify-center">
          <div className="relative max-w-4xl w-full p-4">
            <img
              src={certificate_1}
              alt="Zoomed Certificate"
              className="w-full max-h-[90vh] object-contain rounded-xl"
            />
            <button
              className="absolute top-4 right-6 text-black text-2xl"
              onClick={() => setIsModalOpen(false)}
              aria-label="Close"
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </section>
      </div>
    </section>
  );
};

export default Certificates;
