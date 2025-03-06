import React from "react";

const Skills = () => {
  const tech_skills = [
    // Column 1: HTML, CSS, JS
    { title: "HTML5", percentage: 85 },
    { title: "CSS3", percentage: 75 },
    { title: "JavaScript", percentage: 80 },

    // Column 2: React.js, Next.js, Tailwind CSS
    { title: "React.js", percentage: 75 },
    { title: "Next.js", percentage: 70 },
    { title: "Tailwind CSS", percentage: 90 },
  ];

  const additional_skills = [
    // Column 1: Figma, Adobe XD, Adobe Illustrator
    { title: "Canva", percentage: 95 },
    { title: "Figma", percentage: 60 },
    { title: "Davinci Resolve (Basic editing)", percentage: 50 },
  ];

  return (
    <section className="bg-white dark:bg-stone-950 py-12">
      <div className="max-w-6xl px-6 mx-auto">
        <p className="text-xl font-medium text-amber-400">My</p>
        <h1 className="mt-1 text-2xl font-semibold text-gray-800 capitalize lg:text-3xl dark:text-white">
          Skills
        </h1>

        <h1 className="mt-20 md:text-xl  font-semibold text-gray-400 capitalize lg:text-xl dark:text-gray-400">
          Tech stack
        </h1>

        {/* Grid Layout */}
        <main className="grid grid-cols-1 md:grid-cols-2 gap-20 mt-8 xl:mt-6">
          {/* Column 1 */}
          <div className="space-y-12">
            {tech_skills.slice(0, 3).map((tech_skill, index) => (
              <div key={index} className="w-full">
                <div className="mb-1 flex items-center justify-between">
                  <p className="text-gray-800 dark:text-white text-sm font-medium">
                    {tech_skill.title}
                  </p>
                  <span className="text-amber-400 text-sm">
                    {tech_skill.percentage}%
                  </span>
                </div>
                <div className="w-full bg-gray-200 dark:bg-gray-700 h-2">
                  <div
                    className="h-2 bg-amber-400"
                    style={{ width: `${tech_skill.percentage}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>

          {/* Column 2 */}
          <div className="space-y-12">
            {tech_skills.slice(3).map((tech_skill, index) => (
              <div key={index} className="w-full">
                <div className="mb-1 flex items-center justify-between">
                  <p className="text-gray-800 dark:text-white text-sm font-medium">
                    {tech_skill.title}
                  </p>
                  <span className="text-amber-400 text-sm">
                    {tech_skill.percentage}%
                  </span>
                </div>
                <div className="w-full bg-gray-200 dark:bg-gray-700 h-2">
                  <div
                    className="h-2 bg-amber-400"
                    style={{ width: `${tech_skill.percentage}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
          <h1 className="py-4 md:text-xl font-semibold text-gray-800 capitalize lg:text-xl dark:text-white">
            Additional
          </h1>
        </main>
        <main className="grid grid-cols-1 md:grid-cols-2 gap-20 mt-8 xl:mt-6">
          <div className="space-y-12">
            {additional_skills.map((additional_skill, index) => (
              <div key={index} className="w-full">
                <div className="mb-1 flex items-center justify-between">
                  <p className="text-gray-800 dark:text-white text-sm font-medium">
                    {additional_skill.title}
                  </p>
                  <span className="text-amber-400 text-sm">
                    {additional_skill.percentage}%
                  </span>
                </div>
                <div className="w-full bg-gray-200 dark:bg-gray-700 h-2">
                  <div
                    className="h-2 bg-amber-400"
                    style={{ width: `${additional_skill.percentage}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </main>
      </div>
    </section>
  );
};

export default Skills;
