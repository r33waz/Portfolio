"use client";
import { cn } from "@/lib/utils";

 function ProfileCard() {
  return (
    <div className="w-80 h-96">
      <div
        className={cn(
          "group  cursor-pointer  overflow-hidden relative card h-96 rounded-md shadow-xl  flex flex-col justify-end p-4   ",
          "bg-[url(../assets/images/my.jpg)] bg-cover",
          // Preload hover image by setting it in a pseudo-element
          "before:bg-[url(../assets/images/my.jpg)] before:fixed before:inset-0 before:opacity-0 before:z-[-1]",
          "hover:bg-[url(../assets/images/myimg_two.jpg)]",
          "hover:after:content-[''] hover:after:absolute hover:after:inset-0 hover:after:bg-black hover:after:opacity-20",
          "transition-all duration-500"
        )}
      >
        <span className="bg-black rounded-xl w-fit px-3 py-0.5 text-sm animate-pulse text-white">Hover</span>
      </div>
    </div>
  );
}

export default ProfileCard

