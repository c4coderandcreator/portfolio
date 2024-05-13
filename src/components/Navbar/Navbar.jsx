import { useState } from "react";
import Sidebar from "../Sidebar/Sidebar";
import { Link, NavLink } from "react-router-dom";
import { FiMenu } from "react-icons/fi";

function Navbar() {
  const [open, setOpen] = useState(false);

  const handleNavItemClick = () => {
    setOpen(false);
  };

  // Determine whether to show the sidebar based on the current route
  const showSidebar =
    location.pathname === "/home" ||
    location.pathname === "/contact" ||
    location.pathname === "" ||
    location.pathname === "/";

  return (
    <>
      <nav
        className={` w-screen font-monoDM font-normal md:font-medium md:text-xl text-base md:hover:shadow-lg md:shadow-white text-webtext-400 top-0 z-50 sticky h-12 md:h-20 bg-black flex justify-between items-center px-8 py-6 md:items-center ${
          open && "flex flex-col justify-between items-center h-fit "
        }`}
        style={{ zIndex: 100, position: "fixed" }}
      >
        <div
          className={` ${
            open ? "w-screen px-8" : "w-screen"
          } md:w-fit flex items-center justify-between`}
        >
          <h1 className="justify-center md:relative text-xl md:text-2xl lg:text-5xl font-extrabold font-dancing text-webbut-400 hover:cursor-pointer">
            <Link
              className=" overflow-hidden text-2xl md:font-extrabold md:text-4xl"
              to="/"
            >
              Anay Singh
            </Link>
          </h1>
          <FiMenu
            className="md:hidden block h-4 w-4 cursor-pointer ml-auto"
            onClick={() => setOpen(!open)}
          />
        </div>

        <ul
          className={`md:flex  ${
            open ? "flex flex-col items-center justify-center pt-4" : "hidden"
          }`}
        >
          <li
            className={`px-4 hover:cursor-pointer hover:text-webbut-400 border-[0.0001px] border-black hover:border-slate-300 duration-300 rounded-md ${
              open && "py-1"
            }`}
          >
            <NavLink
              to="/home"
              className={({ isActive }) =>
                `block duration-200 ${
                  isActive ? "text-webbut-400" : "text-webtext-400"
                }`
              }
              onClick={handleNavItemClick}
            >
              Home
            </NavLink>
          </li>
          <li
            className={`px-4 hover:cursor-pointer hover:text-webbut-400 border-[0.0001px] border-black hover:border-slate-300 duration-300 rounded-md ${
              open && "py-1"
            }`}
          >
            <NavLink
              to="/about"
              className={({ isActive }) =>
                `block duration-200 ${
                  isActive ? "text-webbut-400" : "text-webtext-400"
                }`
              }
              onClick={handleNavItemClick}
            >
              About
            </NavLink>
          </li>
          {/* <li
            className={`px-4 hover:cursor-pointer hover:text-webbut-400 border-[0.0001px] border-black hover:border-slate-300 duration-300 rounded-md ${
              open && "py-1"
            }`}
          >
            <NavLink
              to="/skills"
              className={({ isActive }) =>
                `block duration-200 ${
                  isActive ? "text-webbut-400" : "text-webtext-400"
                }`
              }
              onClick={handleNavItemClick}
            >
              Skills
            </NavLink>
          </li> */}
          {/* <li
            className={`px-4 hover:cursor-pointer hover:text-webbut-400 border-[0.0001px] border-black hover:border-slate-300 duration-300 rounded-md ${
              open && "py-1"
            }`}
          >
            <NavLink
              to="/projects"
              className={({ isActive }) =>
                `block duration-200 ${
                  isActive ? "text-webbut-400" : "text-webtext-400"
                }`
              }
              onClick={handleNavItemClick}
            >
              Projects
            </NavLink>
          </li> */}
          <li
            className={`px-4 hover:cursor-pointer hover:text-webbut-400 border-[0.0001px] border-black hover:border-slate-300 duration-300 rounded-md ${
              open && "py-1"
            }`}
          >
            <NavLink
              to="/blogs"
              className={({ isActive }) =>
                `block duration-200 ${
                  isActive ? "text-webbut-400" : "text-webtext-400"
                }`
              }
              onClick={handleNavItemClick}
            >
              Blogs
            </NavLink>
          </li>
        </ul>
        <div className="py-1 sm:py-0 md:py-0">
          <button
            className={`${
              !open && "hidden"
            } md:block font-mono border-2 border-webbut-400 bg-black hover:bg-webbut-400 hover:text-black text-webbut-400 p-2 text-base sm:text-base md:text-xl rounded-md duration-300 `}
          >
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                `block duration-200 ${isActive && "text-webtext-400"}`
              }
              onClick={handleNavItemClick}
            >
              Contact Me
            </NavLink>
          </button>
        </div>
      </nav>
      {showSidebar && <Sidebar />}
    </>
  );
}

export default Navbar;
