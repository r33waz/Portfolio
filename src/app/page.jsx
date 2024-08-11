import ProfileCard from "@/components/blocks/profilecard";
import GradualSpacing from "@/components/magicui/gradual-spacing";
import Hero from "@/components/sections/Hero";
import Project from "@/components/sections/project";
import Themeswitcher from "@/components/ThemeSwitch";

export default function Home() {
  return (
    <main>
      <Hero />
      <Project />
    </main>
  );
}
