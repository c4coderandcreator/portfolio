/* eslint-disable react/no-unescaped-entities */
import { Link } from "react-router-dom";
import { GrGithub, GrInstagram } from "react-icons/gr";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";
import { IoLogoYoutube } from "react-icons/io";
import Footer from "../Footer/Footer";
import { Helmet } from "react-helmet-async";
function Home() {
  return (
    <>
      <Helmet>
        <title>Anay Singh - Full Stack Developer</title>
        <meta
          name="description"
          content="Welcome to Anay Singh's portfolio. Explore my projects and learn more about my experience as a Full Stack Developer specializing in the MERN stack."
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://anaysingh.in/home" />
        <meta property="og:title" content="Anay Singh - Full Stack Developer" />
        <meta
          property="og:description"
          content="Welcome to Anay Singh's portfolio. Explore my projects and learn more about my experience as a Full Stack Developer specializing in the MERN stack."
        />
        <meta property="og:url" content="https://anaysingh.in/home" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="URL_to_image" />
      </Helmet>

      <div className="flex flex-col py-6 md:py-auto text-center justify-center items-center w-screen mx-auto mt-10 md:mt-24">
        <div className="justify-center">
          <img
            className="border-2 border-black filter- rounded-[10%] h-20 w-20 md:h-40 md:w-40 m-auto"
            src="./Anay.png"
            alt="Anay Singh"
          />
          <h1 className="text-webtext-400 md:text-center text-xl md:text-4xl font-monoDM font-bold my-8 md:my-12 md:pt-4">
            HEY I'M <span className="text-webbut-400">ANAY</span>
          </h1>
          <h3 className="md:mb-4 rounded-lg text-sm md:text-xl p-2 md:p-4 md:border-2 md:border-webtext-400 font-monoDM text-webtext-400 w-screen md:w-[55vw] md:my-4 mx-auto justify-center text-center md:text-justify">
            I'm a Full Stack Developer from India, focusing on the MERN stack. I
            love open-source and enjoy learning new technologies. I'm dedicated
            to building and collaborating within the developer community. Let's
            create something remarkable together!
          </h3>
        </div>
        <div className="text-xs md:text-base md:mt-8">
          <button className="font-monoDM font-medium text-lg md:text-2xl border-2 border-webbut-400 bg-webbut-400 hover:bg-black hover:border-webbut-400 hover:border-2 hover:text-webbut-400 md:px-8 px-4 py-1 md:py-2 mr-3 rounded-lg duration-300">
            <Link to="https://drive.google.com/file/d/1VqTGnrBWHw4a0H5gFwTxHvX3IedpWUSN/view?usp=sharing">
              Resume
            </Link>
          </button>
          <button className=" mx-4 font-monoDM font-medium text-lg md:text-2xl border-2 border-webbut-400 text-webbut-400 hover:border-webbut-400 hover:text-black hover:bg-webbut-400 duration-300 py-1 px-6 md:py-2 md:px-8  mt-5 md:mt-1 rounded-lg">
            <Link to="/blogs">Blogs</Link>
          </button>
        </div>
        <div className="flex justify-center items-center mt-9 gap-3 md:flex lg:hidden">
          <div className="rounded-full flex justify-center items-center cursor-pointer text-webbut-400 duration-300 border-2 border-webbut-400 hover:bg-slate-300 hover:text-slate-950 w-8 h-8">
            <Link to="https://github.com/c4coderandcreator" target="_blank">
              <GrGithub className="size-4" />
            </Link>
          </div>
          <div className="rounded-full flex justify-center items-center cursor-pointer text-webbut-400 duration-300 border-2 border-webbut-400 hover:bg-slate-300 hover:text-slate-950  w-8 h-8">
            <Link to="https://www.linkedin.com/in/anaysingh7/" target="_blank">
              <FaLinkedin className="size-4" />
            </Link>
          </div>
          <div className="rounded-full flex justify-center items-center cursor-pointer text-webbut-400 duration-300 border-2 border-webbut-400 hover:bg-slate-300 hover:text-slate-950  w-8 h-8">
            <Link to="https://twitter.com/coderandcreator" target="_blank">
              <FaXTwitter className="size-4" />
            </Link>
          </div>
          <div className="rounded-full flex justify-center items-center cursor-pointer text-webbut-400 duration-300 border-2 border-webbut-400 hover:bg-slate-300 hover:text-slate-950  w-8 h-8">
            <Link to="https://instagram.com/coderandcreator" target="_blank">
              <GrInstagram className="size-4" />
            </Link>
          </div>
          <div className="rounded-full flex justify-center items-center cursor-pointer text-webbut-400 duration-300 border-2 border-webbut-400 hover:bg-slate-300 hover:text-slate-950  w-8 h-8">
            <Link to="https://youtube.com/@coderandcreator" target="_blank">
              <IoLogoYoutube className="size-4" />
            </Link>
          </div>
        </div>
      </div>
      {/* <Footer /> */}
    </>
  );
}

export default Home;
