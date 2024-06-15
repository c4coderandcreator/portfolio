/* eslint-disable react/no-unescaped-entities */
import { Link } from "react-router-dom";
import Footer from "../Footer/Footer";
import { Helmet } from "react-helmet-async";

function Blogs() {
  return (
    <>
      <Helmet>
        <title>Blogs - Anay Singh</title>
        <meta
          name="description"
          content="Read insightful blogs by Anay Singh, covering various topics on Full Stack Development, new technologies, and industry trends."
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://anaysingh.in/blogs" />
        <meta property="og:title" content="Blogs - Anay Singh" />
        <meta
          property="og:description"
          content="Read insightful blogs by Anay Singh, covering various topics on Full Stack Development, new technologies, and industry trends."
        />
        <meta property="og:url" content="https://anaysingh.in/blogs" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="URL_to_image" />
      </Helmet>

      <div className="justify-center text-center mt-20 md:mt-24">
        <h1 className="font-monoDM font-medium text-2xl md:text-3xl text-webbut-400 md:mb-8">
          My Blogs
        </h1>
      </div>
      <div className="flex flex-wrap justify-center  w-[90vw]  md:border-2 md:border-webtext-400 mx-auto rounded-md">
        <div className="p-2 flex flex-col justify-between items-center border-2 border-nvcol-400 md:w-[40vw] m-4 rounded-md">
          <div>
            {" "}
            <img
              className="w-96 h-48 py-6 md:py-2 md:px-12"
              src="https://miro.medium.com/v2/resize:fit:1100/format:webp/1*h3kTixgPVBA5dFqXB1fKcQ.png"
              alt="image"
            />
          </div>
          <div className=" border-2 border-nvcol-400  p-2 md:p-6 md:mx-16 md:mt-10 md:m-4 rounded-md">
            <h5 className="border-2 border-webbut-400 p-1 text-left font-medium text-webbut-400 text-xs md:text-base mb-4 rounded-md">
              AI Taking Jobs: A Boon or Bane? A Detailed Take for Tech
              Enthusiasts
            </h5>
            <div className="font-monoDM  text-webtext-400 text-left  md:text-justify justify-center">
              <ul className="text-xs">
                <li>
                  Artificial Intelligence (AI) has been rapidly transforming
                  various industries, and its impact on the job market has
                  become a topic of intense debate. While some people...
                </li>
              </ul>
            </div>
          </div>
          <div className="flex text-black">
            <button className="font-monoDM font-medium border-2 border-webbut-400 bg-webbut-400 hover:bg-black hover:border-webbut-400 hover:text-webbut-400 px-3 py-1 my-2 md:my-0 mr-4 rounded-md  ">
              {" "}
              <Link
                to="https://medium.com/stackademic/open-source-contribution-f2bfee840756"
                target="_blank"
                rel="noopener noreferrer"
              >
                READ HERE
              </Link>
            </button>
          </div>
        </div>
        {/* 2nd */}
        <div className="p-2 flex flex-col justify-between items-center border-2 border-nvcol-400 md:w-[40vw] m-4 rounded-md">
          <div>
            {" "}
            <img
              className="w-96 h-48 py-6 md:py-2 md:px-12"
              src="https://miro.medium.com/v2/resize:fit:1100/format:webp/1*rjWVaObxUBJY71MsASX2PQ.png"
              alt="image"
            />
          </div>
          <div className=" border-2 border-nvcol-400  p-2 md:p-6 md:mx-16 md:mt-10 md:m-4 rounded-md">
            <h5 className="border-2 border-webbut-400 p-1 text-left font-medium text-webbut-400 text-xs md:text-base mb-4 rounded-md">
              Addressing Mental Health Challenges in Developer’s Journey
            </h5>
            <div className="font-monoDM  text-webtext-400 text-left  md:text-justify justify-center">
              <ul className="text-xs">
                <li>
                  As developers, we often find ourselves in a fast-paced and
                  demanding environment that can take a toll on our mental
                  health. From meeting tight...
                </li>
              </ul>
            </div>
          </div>
          <div className="flex text-black">
            <button className="font-monoDM font-medium border-2 border-webbut-400 bg-webbut-400 hover:bg-black hover:border-webbut-400 hover:text-webbut-400 px-3 py-1 my-2 md:my-0 mr-4 rounded-md  ">
              {" "}
              <Link
                to="https://medium.com/stackademic/open-source-contribution-f2bfee840756"
                target="_blank"
                rel="noopener noreferrer"
              >
                READ HERE
              </Link>
            </button>
          </div>
        </div>
        {/* 3rd */}
        <div className="p-2 flex flex-col justify-between items-center border-2 border-nvcol-400 md:w-[40vw] m-4 rounded-md">
          <div>
            {" "}
            <img
              className="w-96 h-48 py-6 md:py-2 md:px-12"
              src="https://miro.medium.com/v2/resize:fit:1100/format:webp/1*e_3CL8DR0o_XaxRFi9DQUw.png"
              alt="image"
            />
          </div>
          <div className=" border-2 border-nvcol-400  p-2 md:p-6 md:mx-16 md:mt-10 md:m-4 rounded-md">
            <h5 className="border-2 border-webbut-400 p-1 text-left font-medium text-webbut-400 text-xs md:text-base mb-4 rounded-md">
              Open Source Contribution : Beginner's guide
            </h5>
            <div className="font-monoDM  text-webtext-400 text-left  md:text-justify justify-center">
              <ul className="text-xs">
                <li>
                  A Journey of Learning, Growth, and Community — Hello there!
                  Are you a beginner looking to dip your toes into the world of
                  open-source contribution?...
                </li>
              </ul>
            </div>
          </div>
          <div className="flex text-black">
            <button className="font-monoDM font-medium border-2 border-webbut-400 bg-webbut-400 hover:bg-black hover:border-webbut-400 hover:text-webbut-400 px-3 py-1 my-2 md:my-0 mr-4 rounded-md  ">
              {" "}
              <Link
                to="https://medium.com/stackademic/open-source-contribution-f2bfee840756"
                target="_blank"
                rel="noopener noreferrer"
              >
                READ HERE
              </Link>
            </button>
          </div>
        </div>
        {/* </div> */}
        {/* Secrets */}
        {/* <div className="flex flex-wrap justify-center mb-4  w-[75vw] md:w-[80vw] mx-auto md:mx-32"> */}
        <div className="p-2 flex flex-col justify-between items-center border-2 border-nvcol-400 md:w-[40vw] m-4 rounded-md">
          <div>
            {" "}
            <img
              className="w-96 h-48 py-6 md:py-2 md:px-12"
              src="https://miro.medium.com/v2/resize:fit:1100/format:webp/1*m3CvoFzHmkOBhJv_02JYig.png"
              alt="image"
            />
          </div>
          <div className=" border-2 border-nvcol-400  p-2 md:p-6 md:mx-16 md:mt-10 md:m-4 rounded-md">
            <h5 className="border-2 border-webbut-400  p-1 text-left font-medium text-webbut-400 text-xs md:text-base mb-4 rounded-md">
              Axios Unveiled : Insights from My Beginner’s Journey
            </h5>
            <div className="font-monoDM  text-webtext-400 text-left  md:text-justify justify-center">
              <ul className="text-xs">
                <li>
                  Axios is a popular library used for making HTTP requests in
                  JavaScript. As a beginner, working with Axios can seem
                  daunting...
                </li>
              </ul>
            </div>
          </div>
          <div className="flex text-black">
            <button className=" font-monoDM font-medium border-2 border-webbut-400 bg-webbut-400 hover:bg-black hover:border-webbut-400 hover:text-webbut-400 px-3 py-1 my-2 md:my-0 mr-4 rounded-md  ">
              {" "}
              <Link
                to="https://medium.com/@coderandcreator/axios-unveiled-insights-from-my-beginners-journey-343ec3a8a953"
                target="_blank"
                rel="noopener noreferrer"
              >
                READ HERE
              </Link>
            </button>
          </div>
        </div>
        {/* </div> */}
        {/* Flavour Fusion */}
        {/* <div className="flex flex-wrap justify-center mb-4 w-[75vw] md:w-[80vw] mx-auto md:mx-32"> */}
        <div className="p-2 flex flex-col justify-between items-center border-2 border-nvcol-400 md:w-[40vw] m-4 rounded-md">
          <div>
            {" "}
            <img
              className="w-96 h-48 py-6 md:py-2 md:px-12"
              src="https://miro.medium.com/v2/resize:fit:1100/format:webp/1*EFWLbsfDetBZ65evYMP3Pg.png"
              alt="image"
            />
          </div>
          <div className=" border-2 border-nvcol-400  p-2 md:p-6 md:mx-16 md:mt-10 md:m-4 rounded-md">
            <h5 className="border-2 border-webbut-400 rounded-md p-1 text-left font-medium text-webbut-400 text-xs md:text-base mb-4">
              Mastering JavaScript Basics Before Diving into React:
            </h5>
            <div className="font-monoDM  text-webtext-400 text-left  md:text-justify justify-center">
              <ul className="text-xs">
                <li>
                  Hey there, fellow developers! Are you eager to dive into the
                  world of React but feeling a bit lost when it comes to
                  JavaScript? Don’t worry..
                </li>
              </ul>
            </div>
          </div>
          <div className="flex text-black">
            <button className="font-monoDM font-medium border-2 border-webbut-400 bg-webbut-400 hover:bg-black hover:border-webbut-400 hover:text-webbut-400 px-3 py-1 my-2 md:my-0 mr-4 rounded-md  ">
              {" "}
              <Link
                to="https://medium.com/stackademic/mastering-javascript-basics-before-diving-into-react-a-beginners-guide-bc0cd4e53d5a"
                target="_blank"
                rel="noopener noreferrer"
              >
                READ HERE
              </Link>
            </button>
          </div>
        </div>
        <div className="p-2 flex flex-col justify-between items-center border-2 border-nvcol-400 md:w-[40vw] m-4 rounded-md">
          <div>
            {" "}
            <img
              className="w-96 h-48 py-6 md:py-2 md:px-12"
              src="https://miro.medium.com/v2/resize:fit:1100/format:webp/1*Ihsr1AxOrC8RxQpoqtqCng.png"
              alt="image"
            />
          </div>
          <div className=" border-2 border-nvcol-400  p-2 md:p-6 md:mx-16 md:mt-10 md:m-4 rounded-md">
            <h5 className="border-2 border-webbut-400 rounded-md p-1 text-left font-medium text-webbut-400 text-xs md:text-base mb-4">
              Decoding the DSA Dilemma: Navigating the Landscape
            </h5>
            <div className="font-monoDM  text-webtext-400 text-left  md:text-justify justify-center">
              <ul className="text-xs">
                <li>
                  Embarking on the journey of mastering Data Structures and
                  Algorithms (DSA) is a crucial step for any aspiring programmer
                  or...
                </li>
              </ul>
            </div>
          </div>
          <div className="flex text-black">
            <button className="font-monoDM font-medium border-2 border-webbut-400 bg-webbut-400 hover:bg-black hover:border-webbut-400 hover:text-webbut-400 px-3 py-1 my-2 md:my-0 mr-4 rounded-md  ">
              {" "}
              <Link
                to="https://medium.com/@coderandcreator/decoding-the-dsa-dilemma-navigating-the-landscape-of-c-python-java-and-javascript-a4d6e5e03dbd"
                target="_blank"
                rel="noopener noreferrer"
              >
                READ HERE
              </Link>
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Blogs;
