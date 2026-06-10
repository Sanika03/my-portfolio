import React from "react";

const Projects = () => {
  const projects = [
    {
      title: "Unstuck",
      skills: "Next.js | TypeScript | OpenAI | Tailwind CSS",
      about:
        "AI-powered debugging assistant that analyzes developer-reported issues to identify likely root causes and generate actionable debugging steps.",
      learning:
        "Built structured debugging workflows, implemented issue analysis pipelines, and designed mechanisms to prevent repetitive troubleshooting.",
      visitLink: "https://unstuck-six.vercel.app",
      sourceLink: "https://github.com/Sanika03/unstuck",
    },
    {
      title: "NeuraPad",
      skills:
        "Next.js | TypeScript | Firebase | Clerk | Liveblocks | Yjs | BlockNote",
      about:
        "Real-time collaborative workspace supporting document creation, editing, sharing, and multi-user collaboration.",
      learning:
        "Implemented live editing, cursor presence, active user tracking, access control, and real-time synchronization across users.",
      visitLink: "https://neura-pad.vercel.app/",
      sourceLink: "https://github.com/Sanika03/neura-pad",
    },
    {
      title: "SilkCraft",
      skills: "HTML | CSS | Javascript | React",
      about:
        "An e-commerce platform showcasing Paithani silk sarees with mock backend, login and signup management functionality.",
      learning:
        "Acquired React skills, learnt components organization, effectively utilized multiple hooks, and refined API call orchestration.",
      visitLink: "https://silkcraft.vercel.app",
      sourceLink: "https://github.com/Sanika03/silk-craft",
    },
    {
      title: "BuzzShare",
      skills: "HTML | CSS | Javascript | React",
      about:
        "Created BuzzShare, a dynamic social media web-app with login/signup and personalized profiles and posts.",
      learning:
        "Developed proficiency in writing optimized React code and implementing aesthetically pleasing color schemes.",
      visitLink: "https://buzz-share.vercel.app",
      sourceLink: "https://github.com/Sanika03/BuzzShare",
    },
    {
      title: "SwiftChat",
      skills: "HTML | CSS | Javascript | Express.js | Socket.io",
      about:
        "Real-time chat app utilizing ChatGPT for dynamic online conversations, displaying active users.",
      learning:
        "Gained proficiency in directing ChatGPT and adeptly managed and modified its code for optimal utilization.",
      visitLink: "https://swiftchat-ia0e.onrender.com",
      sourceLink: "https://github.com/Sanika03/SwiftChat",
    },
  ];

  return (
    <section
      id="projects"
      className="bg-gradient-to-b from-blue-purple to-queen-pink p-8"
    >
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-archivo font-bold text-center text-cream my-10">
          PROJECTS
        </h2>
        <div className="flex flex-wrap -mx-2 mb-8">
          {projects.map(
            (
              { title, skills, about, learning, visitLink, sourceLink },
              index,
            ) => (
              <div
                key={index}
                className="w-full md:w-1/2 lg:w-1/2 text-grape mb-10"
              >
                <div className="bg-cream p-6 border border-grape rounded-md mb-4 flex flex-col gap-3 h-full">
                  <h3 className="text-[23px] font-archivo font-bold mb-2">
                    {title}
                  </h3>
                  <p className="text-[13px] text-grape mb-2">{skills}</p>
                  <div className="flex flex-col justify-between">
                    <p className="text-base mb-4 font-medium">{about}</p>
                    <p className="text-base mb-4 font-medium">
                      <span className="font-bold">Learnings</span>: {learning}
                    </p>
                  </div>
                  <div className="flex gap-4 text-grape">
                    <a
                      href={visitLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm underline hover:opacity-60"
                    >
                      Visit
                    </a>
                    <a
                      href={sourceLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm underline hover:opacity-60"
                    >
                      View Source
                    </a>
                  </div>
                </div>
              </div>
            ),
          )}
        </div>
      </div>
    </section>
  );
};

export default Projects;
