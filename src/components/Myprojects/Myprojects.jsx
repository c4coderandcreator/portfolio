import { Link } from "react-router-dom";
import Footer from "../Footer/Footer";
import { createClient } from "contentful";
import { useState, useEffect } from "react";
function Myprojects() {
  const client = createClient({
    space: import.meta.env.VITE_REACT_SPACE,
    environment: "master",
    accessToken: import.meta.env.VITE_REACT_CDAAT,
  });

  client
    .getEntries({ content_type: "project" })
    .then((response) => console.log(response));

  const useFetchProjects = () => {
    const [loading, setLoading] = useState(true);
    const [project, setProject] = useState([]);

    const getData = async () => {
      try {
        const response = await client.getEntries({ content_type: "project" });
        const projectsData = response.items.map((item) => ({
          title: item.fields.title,
          intro: item.fields.intro,
          live: item.fields.live,
          code: item.fields.code,
          id: item.sys.id,
          img: item.fields.image2?.fields?.file?.url,
        }));
        setProject(projectsData);
        setLoading(false);
      } catch (error) {
        console.log(error);
        setLoading(false);
      }
    };

    useEffect(() => {
      getData();
    }, []);
    return { loading, project };
  };
  // console.log(useFetchProjects());

  return (
    <>
      <div className="justify-center text-center mt-20 md:mt-24">
        <h1 className="font-monoDM font-medium text-2xl md:text-3xl text-webbut-400 md:mb-8">
          My Projects
        </h1>
      </div>
      <div className="flex flex-wrap justify-center md:border-2 md:border-webtext-400 p-[1.4rem] md:p-8 w-[95vw] md:w-[80vw] md:mb-4 mx-auto md:mx-32 rounded-md">
        <div className="p-2 flex flex-col justify-between items-center border-2 border-nvcol-400 rounded-md">
          <div>
            {" "}
            <img
              className="w-96 h-48 py-6 md:py-2 md:px-12 rounded-md"
              src="https://raw.githubusercontent.com/c4coderandcreator/BhaiBhai_LoginPortal/main/img/chartify.png"
              alt="image"
            />
          </div>
          <div className="flex text-black">
            <button className="bg-webbut-400 hover:bg-black border-2 border-webbut-400 hover:border-webbut-400 hover:text-webbut-400 px-3 py-1 mr-4 rounded-md font-monoDM font-medium text-xs md:text-base ">
              {" "}
              <Link
                to="https://chartify-mqtz.onrender.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                LIVE
              </Link>
            </button>
            <button className="border-2 border-webbut-400 hover:bg-webbut-400 hover:text-black text-webbut-400 px-3 py-1 mr-4 rounded-md font-monoDM font-medium text-xs md:text-base">
              {" "}
              <Link
                to="https://github.com/c4coderandcreator/Chartify"
                target="_blank"
                rel="noopener noreferrer"
              >
                CODE
              </Link>
            </button>
          </div>
        </div>
        <div className="text-webtext-400  md:w-96 w-96 md:text-left md:ml-4 border-2 border-nvcol-400 py-8 px-2 md:p-8 text-left rounded-md">
          <h1 className="text-webbut-400 py-1 px-3 border-2 border-webbut-400 rounded-md p-1 mb-1 font-monoDM font-medium text-md md:text-xl">
            Chartify
          </h1>
          <h3 className="font-monoDM text-xs md:text-base">
            Converts real time data to charts (bar, pie, line) and you can save
            or embed the chart image link anywhere. Built with Node, Express,
            Axios, EJS and Public API.
          </h3>
        </div>
      </div>
      {/* Secrets */}
      <div className="flex flex-wrap justify-center md:border-2 md:border-webtext-400 p-[1.4rem] md:p-8 w-[95vw] md:w-[80vw] md:mb-4 mx-auto md:mx-32 rounded-md">
        <div className="p-2 flex flex-col justify-between items-center border-2 border-nvcol-400 rounded-md">
          <div>
            {" "}
            <img
              className="w-96 h-48 py-6 md:py-2 md:px-12 rounded-md"
              src="https://raw.githubusercontent.com/c4coderandcreator/BhaiBhai_LoginPortal/main/img/secrets.png"
              alt="image"
            />
          </div>
          <div className="flex text-black">
            <button className="bg-webbut-400 hover:bg-black border-2 border-webbut-400 hover:border-webbut-400 hover:text-webbut-400 px-3 py-1 mr-4 rounded-md font-monoDM font-medium text-xs md:text-base ">
              {" "}
              <Link
                to="https://secrets-la4e.onrender.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                LIVE
              </Link>
            </button>
            <button className="border-2 border-webbut-400 hover:bg-webbut-400 hover:text-black text-webbut-400 px-3 py-1 mr-4 rounded-md font-monoDM font-medium text-xs md:text-base">
              {" "}
              <Link
                to="https://github.com/c4coderandcreator/secretApp"
                target="_blank"
                rel="noopener noreferrer"
              >
                CODE
              </Link>
            </button>
          </div>
        </div>
        <div className="text-webtext-400  md:w-96 w-96 md:text-left md:ml-4 border-2 border-nvcol-400 py-8 px-2 md:p-8 text-left rounded-md">
          <h1 className="text-webbut-400 py-1 px-3 border-2 border-webbut-400 rounded-md font-monDM font-medium text-md md:text-xl  p-1 mb-1">
            Secrets
          </h1>
          <h3 className="text-xs md:text-base">
            A platform that keeps users secret from all users around the world.
            You can Post/Read secrets anonymously here. Built with Node,
            Express, Axios, EJS, MongoDB, Mongoose, and OAuth.
          </h3>
        </div>
      </div>
      {/* Flavour Fusion */}
      <div className="flex flex-wrap justify-center md:border-2 md:border-webtext-400 p-[1.4rem] md:p-8 w-[95vw] md:w-[80vw] md:mb-4 mx-auto md:mx-32 rounded-md">
        <div className="p-2 flex flex-col justify-between items-center border-2 border-nvcol-400 rounded-md">
          <div>
            {" "}
            <img
              className="w-96 h-48 py-6 md:py-2 md:px-12 rounded-md"
              src="https://raw.githubusercontent.com/c4coderandcreator/BhaiBhai_LoginPortal/main/img/flavour.png"
              alt="image"
            />
          </div>
          <div className="flex text-black">
            <button className="bg-webbut-400 hover:bg-black border-2 border-webbut-400 hover:border-webbut-400 hover:text-webbut-400 px-3 py-1 mr-4 rounded-md font-monoDM font-medium text-xs md:text-base ">
              {" "}
              <Link
                to="https://c4coderandcreator.github.io/Flavour-Fusion/"
                target="_blank"
                rel="noopener noreferrer"
              >
                LIVE
              </Link>
            </button>
            <button className="border-2 border-webbut-400 hover:bg-webbut-400 hover:text-black text-webbut-400 px-3 py-1 mr-4 rounded-md font-monoDM font-medium text-xs md:text-base">
              {" "}
              <Link
                to="https://github.com/c4coderandcreator/Flavour-Fusion"
                target="_blank"
                rel="noopener noreferrer"
              >
                CODE
              </Link>
            </button>
          </div>
        </div>
        <div className="text-webtext-400  md:w-96 w-96 md:text-left md:ml-4 border-2 border-nvcol-400 py-8 px-2 md:p-8 text-left rounded-md">
          <h1 className="text-webbut-400 py-1 px-3 border-2 border-webbut-400 rounded-md font-monoDM font-medium text-md md:text-xl  p-1 mb-1">
            Flavour Fusion
          </h1>
          <h3 className="text-xs md:text-base">
            An open Source project built/maintained by me, to help people
            understand how powerful the vanilla JS with DOM is. Built with HTML,
            CSS, JS, SwiperJS and DOM.
          </h3>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Myprojects;
