import IconButton from "../IconButton/IconButton";
import { FaGithub } from "react-icons/fa";
import { GrInstagram } from "react-icons/gr";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";
import { IoLogoYoutube } from "react-icons/io";

function Sidebar() {
  return (
    <div className="lg:fixed hidden sm:hidden md:hidden lg:flex bg-black md:left-0 md:flex-col border-2 border-webbut-400 rounded-md md:w-12 items-center md:items-start justify-center md:gap-4 md:my-[45%] lg:my-[8%]">
      <IconButton
        text="@c4coderandcreator"
        link="https://github.com/c4coderandcreator"
      >
        <FaGithub className="size-4 md:size-8 text-webtext-400" />
      </IconButton>
      <IconButton
        text="@anaysingh7"
        link="https://www.linkedin.com/in/anaysingh7/"
      >
        <FaLinkedin className="size-4 md:size-8 text-webtext-400" />
      </IconButton>
      <IconButton
        text="@coderandcreator"
        link="https://twitter.com/coderandcreator"
      >
        <FaXTwitter className="size-4 md:size-8 text-webtext-400" />
      </IconButton>
      <IconButton
        text="@coderandcreator"
        link="https://instagram.com/coderandcreator"
      >
        <GrInstagram className="size-4 md:size-8 text-webtext-400" />
      </IconButton>
      <IconButton
        text="@coderandcreator"
        link="https://youtube.com/@coderandcreator"
      >
        <IoLogoYoutube className="size-4 md:size-8 text-webtext-400" />
      </IconButton>
    </div>
  );
}

export default Sidebar;
