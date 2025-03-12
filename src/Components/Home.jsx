import React from "react";
import { forwardRef } from "react";


const Home = (props, ref) => {
  return (
    <>
      <section ref={ref} className="flex items-center justify-center bg-center bg-no-repeat bg-[url('/src/assets/Images/hero_section_image.jpg')] bg-gray-700 bg-blend-multiply min-h-screen">
        <div className=" px-4 mx-auto max-w-screen-xl text-center mt-52">
          <h1 className="mb-4 text-3xl font-extrabold tracking-tight leading-none text-amber-500  xl:text-7xl lg:text-6xl md:text-4xl">
            Hello I'm Nandakumar
          </h1>
          <p className="mb-4 text-md font-normal text-slate-200 lg:text-xl md:text-lg sm:px-16 lg:px-36">
            Frontend Developer & Infografic Designer
          </p>
          <div className="flex items-center justify-center mt-4 sm:mt-0 ">
            <a
              href="https://github.com/nandakumar2005"
              target="_blank"
              className="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5 border border-transparent bg-stone-950 hover:bg-amber-500 transition-all ease-in-out duration-500 rounded-full p-2"
            >
              <svg
                className="w-6 h-6"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M10 .333A9.911 9.911 0 0 0 6.866 19.65c.5.092.678-.215.678-.477 0-.237-.01-1.017-.014-1.845-2.757.6-3.338-1.169-3.338-1.169a2.627 2.627 0 0 0-1.1-1.451c-.9-.615.07-.6.07-.6a2.084 2.084 0 0 1 1.518 1.021 2.11 2.11 0 0 0 2.884.823c.044-.503.268-.973.63-1.325-2.2-.25-4.516-1.1-4.516-4.9A3.832 3.832 0 0 1 4.7 7.068a3.56 3.56 0 0 1 .095-2.623s.832-.266 2.726 1.016a9.409 9.409 0 0 1 4.962 0c1.89-1.282 2.717-1.016 2.717-1.016.366.83.402 1.768.1 2.623a3.827 3.827 0 0 1 1.02 2.659c0 3.807-2.319 4.644-4.525 4.889a2.366 2.366 0 0 1 .673 1.834c0 1.326-.012 2.394-.012 2.72 0 .263.18.572.681.475A9.911 9.911 0 0 0 10 .333Z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="sr-only">GitHub account</span>
            </a>
            <a
              href="https://www.instagram.com/_nanda_3003"
              target="_blank"
              className="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5 border border-transparent bg-stone-950 hover:bg-amber-500 transition-all ease-in-out duration-500 rounded-full p-2"
            >
              <svg
                className="w-6 h-6"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  fillRule="evenodd"
                  d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5Zm8.5 2h-7A3.5 3.5 0 0 0 5 7.5v7A3.5 3.5 0 0 0 8.5 18h7A3.5 3.5 0 0 0 19 14.5v-7A3.5 3.5 0 0 0 15.5 4ZM12 8.5A3.5 3.5 0 1 1 8.5 12 3.5 3.5 0 0 1 12 8.5ZM12 10a2 2 0 1 0 2 2 2 2 0 0 0-2-2Zm4-1.5a1 1 0 1 0 1 1 1 1 0 0 0-1-1Z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="sr-only">Instagram account</span>
            </a>
            <a
              href="https://www.linkedin.com/in/nandakumar-parthasarathi-73ab57271/"
              target="_blank"
              className="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5 border border-transparent bg-stone-950 hover:bg-amber-500 transition-all ease-in-out duration-500 rounded-full p-2"
            >
              <svg
                className="w-6 h-6"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  fillRule="evenodd"
                  d="M20.45 2H3.55A1.55 1.55 0 0 0 2 3.55v16.9A1.55 1.55 0 0 0 3.55 22h16.9A1.55 1.55 0 0 0 22 20.45V3.55A1.55 1.55 0 0 0 20.45 2ZM8.3 18H5.3V9h3v9ZM6.8 7.8A1.7 1.7 0 1 1 6.8 4.3a1.7 1.7 0 0 1 0 3.5Zm11.2 10.2h-3v-4.3c0-1-.3-1.7-1.2-1.7s-1.4.8-1.4 1.7v4.3h-3V9h3v1.2a3.2 3.2 0 0 1 2.8-1.4c2.2 0 3.8 1.4 3.8 4.3V18Z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="sr-only">LinkedIn account</span>
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
