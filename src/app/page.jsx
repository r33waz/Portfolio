import ProfileCard from "@/components/blocks/profilecard";
import GradualSpacing from "@/components/magicui/gradual-spacing";
import About from "@/components/sections/About";
import Hero from "@/components/sections/Hero";
import Project from "@/components/sections/project";
import Technology from "@/components/sections/Technology";
import Themeswitcher from "@/components/ThemeSwitch";

export default function Home() {
  return (
    <>
      <Hero />
      <Project />
      <About/>
      <Technology />
    </>
  );
}
