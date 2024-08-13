"use client";
import { cn } from "@/lib/utils";

 function ProfileCard() {
  return (
    <div className="w-60  h-80 bg-gradient-to-br from-slate-300 from-0% via-gray-300 via-0% to-stone-300 to-100% profile_border">
      <div
        className={cn(
          "group  cursor-pointer  overflow-hidden relative card h-96 rounded-md  flex flex-col justify-end p-4 md:-ml-2 ml-6  -mt-20 ",
          "bg-[url(../assets/images/my.jpg)] bg-cover",
          // Preload hover image by setting it in a pseudo-element
          "before:bg-[url(../assets/images/my.jpg)] before:fixed before:inset-0 before:opacity-0 before:z-[-1]",
          "hover:bg-[url(../assets/images/myimg_two.jpg)]",
          "hover:after:content-[''] hover:after:absolute hover:after:inset-0 ",
          "transition-all duration-500"
        )}
      >
        <span className="bg-black rounded-xl w-fit px-2 py-0.5 text-xs animate-pulse text-white">Hover</span>
      </div>
    </div>
  );
}

export default ProfileCard

