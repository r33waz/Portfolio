import ProfileCard from "@/components/blocks/profilecard";
import GradualSpacing from "@/components/magicui/gradual-spacing";
import About from "@/components/sections/About";
import ContactUs from "@/components/sections/contact";
import Hero from "@/components/sections/Hero";
import Project from "@/components/sections/project";
import Service from "@/components/sections/service";
import Technology from "@/components/sections/Technology";

export default function Home() {
  return (
    <>
      <Hero />
      <Project />
      <About/>
      <Technology />
      <Service/>
      <ContactUs/>
    </>
  );
}
