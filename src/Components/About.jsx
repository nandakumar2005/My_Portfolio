import React from "react";

const About = () => {
  return (
    <section className="bg-white dark:bg-amber-400">
      <div className="max-w-6xl px-6 py-10 mx-auto">
        <p className="text-xl font-medium text-stone-950">About</p>
        <h1 className="mt-1 text-2xl font-semibold text-gray-800 capitalize lg:text-3xl dark:text-white">
          Myself
        </h1>

        <main className="relative z-20 w-full mt-8 md:flex md:items-center xl:mt-12">
          <div className="absolute w-full bg-slate-50 -z-10 md:h-96 rounded-3xl"></div>

          <div className="w-full p-6 bg-amber-400 md:flex md:items-center rounded-2xl md:bg-transparent md:p-0 lg:px-12 md:justify-evenly">
            <img
              className="h-24 w-24 md:mx-6 rounded-full object-cover shadow-md md:h-[32rem] md:w-80 lg:h-[36rem] lg:w-[26rem] md:rounded-3xl"
              src="/src/assets/Images/homepage_image.jpg"
              alt="Profile Picture"
            />
 
            <div className="mt-2 md:mx-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 border-2 border-transparent rounded-3xl p-4 bg-stone-950">
                {/* Left Column */}
                <div className="space-y-2 ">
                  <div className="flex">
                    <span className="font-medium text-amber-400">Name:</span>
                    <p className="ml-2 text-md font-medium tracking-tight text-slate-50">Nandakumar</p>
                  </div>
                  <div className="flex">
                    <span className="font-medium text-amber-400">Age:</span>
                    <p className="ml-2 text-md font-medium tracking-tight text-slate-50">19 years old</p>
                  </div>
                  <div className="flex">
                    <span className="font-medium text-amber-400">Birthday:</span>
                    <p className="ml-2 text-md font-medium tracking-tight text-slate-50">30th May 2005</p>
                  </div>
                  <div className="flex">
                    <span className="font-medium text-amber-400">Phone No:</span>
                    <p className="ml-2 text-md font-medium tracking-tight text-slate-50">9840861819</p>
                  </div>
                </div>
                
                {/* Right Column */}
                <div className="space-y-2">
                  <div className="flex">
                    <span className="font-medium text-amber-400">Department:</span>
                    <p className="ml-2 text-md font-medium tracking-tight text-slate-50">Computer science</p>
                  </div>
                  <div className="flex">
                    <span className="font-medium text-amber-400">Role:</span>
                    <p className="ml-2 text-md font-medium tracking-tight text-slate-50">Developer</p>
                  </div>
                  <div className="flex">
                    <span className="font-medium text-amber-400">City:</span>
                    <p className="ml-2 text-md font-medium tracking-tight text-slate-50">Chennai</p>
                  </div>
                  <div className="flex">
                    <span className="font-medium text-amber-400">Freelance:</span>
                    <p className="ml-2 text-md font-medium tracking-tight text-slate-50">Yes</p>
                  </div>
                </div>
              </div>
              
              <p className="py-6 text-md leading-loose font-medium text-stone-950 md:text-md">
                Hello, I am Nandakumar Parthasarathi from Chennai. I am a
                Frontend Developer with one year of experience in building
                websites. I studied Web Development at the Freshworks STS
                Software Academy.
              </p>
            </div>
          </div>
        </main>
      </div>
    </section>
  );
};

export default About;
