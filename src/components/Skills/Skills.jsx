import Footer from "../Footer/Footer";

function Skills() {
  return (
    <>
      {/* My SKills */}
      <div className="flex flex-col w-auto justify-start text-center mt-20 md:mt-24">
        <div>
          <h1 className="font-monoDM font-medium text-2xl md:text-3xl text-webbut-400 md:mb-4">
            My Skills
          </h1>
        </div>

        <div>
          <div className="flex flex-wrap justify-center gap-8">
            <div>
              <div className="md:m-4 p-4  w-48 md:w-64 bg-transparent md:border-2 border-nvcol-400 md:border-webtext-400 text-webtext-400 justify-center align-baseline rounded-md">
                <ul>
                  <li className=" text-xs md:text-base font-semibold m-[2px] border-2 border-nvcol-400">
                    HTML
                  </li>
                  <li className="text-xs md:text-base font-medium  m-[2px] border-2 border-nvcol-400">
                    CSS
                  </li>
                  <li className="text-xs md:text-base font-medium m-[2px] border-2 border-nvcol-400">
                    JavaScript
                  </li>
                  <li className="text-xs md:text-base font-medium m-[2px] border-2 border-nvcol-400">
                    TypeScript
                  </li>
                  <li className="text-xs md:text-base font-medium m-[2px] border-2 border-nvcol-400">
                    React
                  </li>
                  <li className="text-xs md:text-base font-medium m-[2px] border-2 border-nvcol-400">
                    Tailwind
                  </li>
                  <li className="text-xs md:text-base font-medium m-[2px] border-2 border-nvcol-400">
                    Shadcn
                  </li>
                </ul>
              </div>
              <div className="w-32 md:w-64 m-auto">
                <h3 className="text-webbut-400 font-monoDM font-medium text-base md:text-2xl py-1  md:p-1 md:px-2 border-2 border-webbut-400 rounded-md">
                  Frontend
                </h3>
              </div>
            </div>
            <div>
              <div className="md:m-4 p-4 w-48 md:w-64 md:h-60 bg-transparent md:border-2 border-nvcol-400 md:border-webtext-400 text-webtext-400 justify-center align-baseline rounded-md">
                <ul>
                  <li className="text-xs md:text-base font-medium m-[2px] border-2 border-nvcol-400">
                    Node
                  </li>
                  <li className="text-xs md:text-base font-medium  m-[2px] border-2 border-nvcol-400">
                    Express
                  </li>
                  <li className="text-xs md:text-base font-medium m-[2px] border-2 border-nvcol-400">
                    EJS
                  </li>
                  <li className="text-xs md:text-base font-medium m-[2px] border-2 border-nvcol-400">
                    MongoDB
                  </li>
                  <li className="text-xs md:text-base font-medium m-[2px] border-2 border-nvcol-400">
                    PostgreSQL
                  </li>
                </ul>
              </div>
              <div className="w-32 md:w-64 m-auto">
                <h3 className="text-webbut-400 font-monoDM font-medium text-base md:text-2xl  p-1 md:px-2 border-2 border-webbut-400 rounded-md ">
                  Backend
                </h3>
              </div>
            </div>
            <div>
              <div className="md:m-4 p-4 w-48 md:w-64 md:h-60 bg-transparent md:border-2 border-nvcol-400 md:border-webtext-400 text-webtext-400 justify-center align-baseline rounded-md">
                <ul>
                  <li className="text-xs md:text-base font-medium m-[2px] border-2 border-nvcol-400">
                    Web Hosting
                  </li>
                  <li className="text-xs md:text-base font-medium  m-[2px] border-2 border-nvcol-400">
                    Web Analytics
                  </li>
                  <li className="text-xs md:text-base font-medium m-[2px] border-2 border-nvcol-400">
                    Version Control(Git)
                  </li>
                  <li className="text-xs md:text-base font-medium m-[2px] border-2 border-nvcol-400">
                    Web Design
                  </li>
                  <li className="text-xs md:text-base font-medium m-[2px] border-2 border-nvcol-400">
                    CI/CD with Docker
                  </li>
                </ul>
              </div>
              <div className="w-32 md:w-64 m-auto">
                <h3 className="text-webbut-400 mb-4 font-monoDM font-medium text-base md:text-2xl  p-1 md:px-2 border-2 border-webbut-400 rounded-md">
                  Other Skills
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Skills;
