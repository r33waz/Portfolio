import React from "react";
import BoxReveal from "../magicui/box-reveal";
import frontend_img from "@/assets/images/frontend.jpg";
import backend_img from "@/assets/images/backend.jpg";
import fullstack_img from "@/assets/images/fullstack.jpg";
import Image from "next/image";

function Service() {
  const services = [
    {
      category: "Frontend Development",
      src: frontend_img,
      description:
        "Building visually appealing and user-friendly interfaces for web applications.",
      skills: ["HTML" , "CSS" , "JavaScript", "React", "Next.js", "Tailwind CSS"],
      revealClass: "frontend-reveal",
    },
    {
      category: "Backend Development",
      src: backend_img,
      description:
        "Developing server-side logic and APIs to handle requests and manage data.",
      skills: ["Node.js", "Express"],
      revealClass: "backend-reveal",
    },
    {
      category: "Fullstack Development (MERN)",
      src: fullstack_img,
      description:
        "Creating complete web applications using the MERN stack, encompassing both frontend and backend development.",
      skills: ["MongoDB", "Express", "React", "Node.js"],
      revealClass: "fullstack-reveal",
    },
  ];

  return (
    <div className="flex flex-col gap-8 md:h-screen justify-center md:mt-0 mt-24 min-h-[90vh]" id="service">
      <h2 className="text-5xl font-bold text-black dark:text-slate-100/50  text-center">
        My Services
      </h2>
      <div className="grid md:grid-cols-3 grid-cols-1 gap-4">
        {services.map((service) => (
          <div
            key={service.category}
            className={`space-y-4  rounded-md p-4 dark:shadow-[0px_2px_3px_0px_#edf2f7] shadow-[0px_2px_3px_0px_#4a5568]  duration-500 ${service?.category==="Frontend Development"?"hover:-rotate-2 bg-[url(../assets/images/front_bg.png)] bg-no-repeat bg-cover bg-center w-full":service?.category==="Backend Development"?"hover:scale-105 bg-[url(../assets/images/backend_bg.png)] bg-no-repeat bg-cover bg-center w-full":"hover:rotate-2 bg-[url(../assets/images/full_png.png)] bg-no-repeat bg-cover bg-center w-full"}`}
          >
            <BoxReveal className={`${service.revealClass} category-reveal`}>
                <h3 className="text-2xl font-medium ">{service.category}</h3>
            </BoxReveal>
            <BoxReveal className={`${service.revealClass} image-reveal`}>
              <Image
                src={service.src}
                alt={service.category}
                width={0}
                height={0}
                className="rounded-md h-60 "
                placeholder="blur"
                loading="lazy"
              />
            </BoxReveal>
            <BoxReveal className={`${service.revealClass} description-reveal`}>
              <p className="text-xs ">{service.description}</p>
            </BoxReveal>
            <BoxReveal className={`${service.revealClass} skills-reveal`}>
              <ul className="flex gap-3">
                {service.skills.map((skill) => (
                  <li key={skill}>{skill}</li>
                ))}
              </ul>
            </BoxReveal>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Service;
