"use client";
import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import About_img from "@/assets/images/about_img.jpg";
import About_img_2 from "@/assets/images/sec_about.jpg";
import Image from "next/image";
import { Fade } from "react-awesome-reveal";

function About() {
  return (
    <div className="md:h-screen h-[90vh]  flex flex-col justify-center  md:mt-10 bg-[url(../assets/images/wave-haikei.png)] bg-no-repeat bg-cover bg-center w-full " id="about">
      <div className="grid md:grid-cols-2 grid-cols-1 place-items-center  md:mt-0 mt-20 py-10  ">
        <div className="grid md:grid-cols-2 grid-cols-1 gap-2 ">
          <Fade cascade>
            <Image
              src={About_img}
              alt="Riwaz Thapa"
              width={0}
              height={0}
              className="rounded-lg md:h-[60vh] h-80 md:w-full w hover:scale-105 duration-500"
            />
            <Image
              src={About_img_2}
              alt="Riwaz Thapa"
              width={0}
              height={0}
              className="rounded-lg h-[60vh] w-full md:block hidden hover:scale-105 duration-500"
            />
          </Fade>
        </div>
        <div className="flex flex-col gap-4 px-2 md:w-[650px] w-full text-white">
          <Fade cascade direction="up">
            <h2 className="md:text-5xl text-2xl font-bold  ">About Me</h2>
            <p className=" text-justify md:text-lg text-sm">
              A passionate beginner and aspiring full stack developer
              specializing in the MERN stack. Hailing from the beautiful country
              of Nepal, I am on a journey to master the art of web development
              and create amazing applications.
            </p>
            <Tabs defaultValue="skills" className="md:w-[400px] w-full ml-4">
              <TabsList className="-ml-6">
                <TabsTrigger
                  value="skills"
                  className="md:w-40 data-[state=active]:border-b-2 data-[state=active]:border-t-2 data-[state=active]:border-green-500"
                >
                  Skills
                </TabsTrigger>
                <TabsTrigger
                  value="education"
                  className="md:w-40 data-[state=active]:border-b-2 data-[state=active]:border-t-2 data-[state=active]:border-blue-500"
                >
                  Education
                </TabsTrigger>
                <TabsTrigger
                  value="certificate"
                  className="md:w-40 data-[state=active]:border-b-2 data-[state=active]:border-t-2  data-[state=active]:border-violet-500"
                >
                  Certificates
                </TabsTrigger>
              </TabsList>
              <TabsContent value="skills">
                <ul className="grid grid-cols-3   gap-1 text-xs list-decimal">
                  <li>HTML</li>
                  <li>CSS</li>
                  <li>Tailwind</li>
                  <li>JavaScript</li>
                  <li>React</li>
                  <li>Next.js</li>
                  <li>Node</li>
                  <li>Express</li>
                  <li>MongoDB</li>
                </ul>
              </TabsContent>
              <TabsContent value="education">
                <ul className="flex flex-col  gap-1 text-xs list-decimal">
                  <li>10th - Elixir Academy</li>
                  <li>12th - Triniti Int College</li>
                  <li>BscHons- Islington College</li>
                </ul>
              </TabsContent>
              <TabsContent value="certificate">
                <ul className="flex flex-col  gap-1 text-xs list-decimal">
                  <li>MERN -Vrit Technologies</li>
                  {/* <li>CSS</li>
                <li>Tailwind</li>
                <li>JavaScript</li>
                <li>React</li>
                <li>Next.js</li>
                <li>Node</li>
                <li>Express</li>
                <li>MongoDB</li> */}
                </ul>
              </TabsContent>
            </Tabs>
          </Fade>
        </div>
      </div>
    </div>
  );
}

export default About;
