import React, { useState } from "react";
import { Clipboard, Check } from "lucide-react";
import { forwardRef } from "react";

const About = (props, ref) => {
  const [copiedEmail, SetCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  const email = "nandakumarp3003@gmail.com";
  const phoneNumber = "9840861819";

  const copyToClipboard = (text, setCopied) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000); // Reset after 2 sec
  };

  return (
    <section ref={ref} className="bg-white dark:bg-amber-400 py-12">
      <div className="max-w-7xl px-6 pb-10 mx-auto">
        <p className="text-xl font-medium text-stone-950">About</p>
        <h1 className="mt-1 text-2xl font-semibold text-gray-800 capitalize lg:text-5xl dark:text-white">
          Myself
        </h1>
        <div className="flex mx-auto mt-2">
          <span className="inline-block w-20 h-1 bg-stone-950 rounded-full"></span>
          <span className="inline-block w-3 h-1 mx-1 bg-stone-900 rounded-full"></span>
          <span className="inline-block w-1 h-1 bg-stone-800 rounded-full"></span>
        </div>
        <main className="relative z-20 w-full mt-8 md:flex md:items-center xl:mt-12">
          <div className="absolute w-full bg-slate-50 -z-10 md:h-96 rounded-3xl"></div>

          <div className="w-full bg-amber-400 md:flex md:items-center rounded-2xl md:bg-transparent md:p-0 lg:px-12 md:justify-evenly">
            <img
              className="h-24 w-24 sm:mx-6 rounded-full object-cover shadow-md md:h-[32rem] md:w-80 lg:h-[36rem] lg:w-[26rem] md:rounded-3xl"
              src="/src/assets/Images/homepage_image.jpg"
              alt="Profile Picture"
            />
            <div className=" mx-auto">
              <h2 className="text-2xl font-semibold ml-1 sm:text-md text-center text-gray-950 py-2 mt-1">
                Personal Information
              </h2>
              <div className="grid md:grid-cols-2 mb-10 gap-1 border-2 bg-stone-950 p-6 rounded-xl shadow-lg transition-transform transform hover:scale-[1.02] hover:shadow-2xl duration-300 ease-in-out">
                {/* <!-- Left Column --> */}
                <div className="flex flex-col justify-center p-6 shadow-md transition-all duration-300 hover:shadow-xl hover:scale-[1.01]">
                  <p className="text-sm font-semibold text-amber-400">
                    Full Name
                  </p>
                  <p className="text-sm sm:text-xs text-gray-400">
                    Nandakumar Parthasarathi
                  </p>
                  <p className="text-sm font-semibold mt-4 text-amber-400">
                    Date of Birth
                  </p>
                  <p className="text-sm text-gray-400 sm:text-xs">
                    30th March, 2005
                  </p>
                  <p className="text-sm font-semibold mt-4 text-amber-400">
                    Email Address
                  </p>
                  <div className="relative flex flex-col items-start">
                    {copiedEmail && (
                      <span className="absolute -top-6 left-3/4 transform -translate-x-1/2 bg-black text-amber-400 text-xs px-2 py-1 rounded shadow-md">
                        Copied!
                      </span>
                    )}
                    <div className="flex items-center gap-1 transition-transform hover:scale-105 cursor-pointer">
                      <p className="text-sm sm:text-xs text-gray-400">
                        {email.split("g")[0]}...
                      </p>
                      <div
                        className="cursor-pointer"
                        onClick={() => copyToClipboard(email, SetCopiedEmail)}
                      >
                        {copiedEmail ? (
                          <Check color="green" strokeWidth={4} size={16} />
                        ) : (
                          <Clipboard color="white" size={16} />
                        )}
                      </div>
                    </div>
                  </div>
                  <p className="text-sm font-semibold mt-4 text-amber-400">
                    Location
                  </p>
                  <p className="text-sm sm:text-xs text-gray-400">
                    Chennai, India
                  </p>
                </div>
                {/* <!-- Right Column --> */}
                <div className="flex flex-col justify-center p-6 shadow-md transition-all duration-300 hover:shadow-xl hover:scale-[1.01]">
                  <p className="text-sm font-semibold text-amber-400">
                    Department
                  </p>
                  <p className="text-sm sm:text-xs text-gray-400 mt-1">
                    Computer Science
                  </p>

                  <p className="text-sm font-semibold mt-4 text-amber-400">
                    Job Title
                  </p>
                  <p className="text-sm sm:text-xs text-gray-400">
                    Frontend Developer
                  </p>

                  <p className="text-sm font-semibold mt-4 text-amber-400">
                    Phone Number
                  </p>
                  <div className="relative flex flex-col items-start">
                    {copiedPhone && (
                      <span className="absolute -top-6 left-3/4 transform -translate-x-1/2 bg-black text-amber-400 text-xs px-2 py-1 rounded shadow-md">
                        Copied!
                      </span>
                    )}
                    <div className="flex items-center gap-1 transition-transform hover:scale-105 cursor-pointer">
                      <p className="text-sm sm:text-xs text-gray-400">
                        {phoneNumber}
                      </p>
                      <div
                        className="cursor-pointer mb-1"
                        onClick={() =>
                          copyToClipboard(phoneNumber, setCopiedPhone)
                        }
                      >
                        {copiedPhone ? (
                          <Check color="green" strokeWidth={4} size={16} />
                        ) : (
                          <Clipboard color="white" size={16} />
                        )}
                      </div>
                    </div>
                  </div>
                  <p className="text-sm font-semibold mt-4 text-amber-400">
                    Languages
                  </p>
                  <p className="text-sm sm:text-xs text-gray-400">
                    English, Tamil
                  </p>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </section>
  );
};

export default About;
