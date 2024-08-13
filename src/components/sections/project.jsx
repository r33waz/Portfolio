import React from "react";
import { PinContainer } from "../ui/3d-pin";
import Image from "next/image";
import gyanImg from "../../assets/images/gyan.png";
import aizone from "../../assets/images/ai-zone.png";
import secondAutoGareImg from "../../assets/images/secound-auto-gare.png";
import blogImg from "../../assets/images/blog-app.png";
import addressFinderImg from "../../assets/images/address-finder.png";

function Project() {
  const projects = [
    {
      title: "Ideapreneurnepal Gyan",
      href: "https://gyan.moneymitra.com/",
      description:
        "A blogging website to get the latest newsletters, bulletins, and blogs.",
      src: gyanImg,
    },
    {
      title: "Signal Zone",
      href: "https://moneymitra.com/mm-technical/",
      description:
        "A website to get the signals for the company stocks and shares.",
      src: aizone,
    },
    {
      title: "Second Auto Gare",
      href: "https://second-auto-gare.vercel.app/",
      description:
        "Final year project about the car renting and booking MERN stack project.",
      src: secondAutoGareImg,
    },

    {
      title: "IP Address Finder",
      href: "",
      description:
        "Project to find the address of the user according to the provided IP address.",
      src: addressFinderImg,
    },
    {
      title: "Fullstack Blog App",
      href: "",
      description: "Under construction",
      src: blogImg,
    },
  ];

  return (
    <div id="projects" className="flex flex-col md:min-h-[100vh] min-h-[90vh] dark:bg-transparent bg-slate-300 py-14">
      <h2 className="text-5xl font-bold text-black dark:text-slate-100/50  text-center">
        Projects
      </h2>
      <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 mt-5 gap-y-10 ">
        {projects.map((project, index) => (
          <PinContainer
            key={index}
            title={project?.title}
            href={project.href}
            description={project?.description}
            className="dark:border-white border-black "
          >
            <div className="flex basis-full flex-col tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] h-[20rem]">
              <h3 className="max-w-xs !pb-2 !m-0 font-bold tracking-wide dark:text-slate-100 text-black md:text-xl text-ba">
                {project.title}
              </h3>
              <div className="text-base !m-0 !p-0 font-normal">
                <span className="text-slate-500 text-xs tracking-wide">
                  {project?.description}
                </span>
              </div>
              <div className="flex flex-1 w-full rounded-lg mt-4">
                <Image
                  src={project?.src}
                  alt={project?.title}
                  className="rounded-lg dark:border-green-600 border-black border"
                  width={0}
                  height={0}
                />
              </div>
            </div>
          </PinContainer>
        ))}
      </div>
    </div>
  );
}

export default Project;
