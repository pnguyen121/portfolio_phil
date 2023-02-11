import Header from "../Components/Header/Header";
import Footer from "../Components/Footer/Footer";

import { Link } from "react-router-dom";

function HomePage() {
  return (
    <div>
      <Header />
      <div className="container mx-auto max-w-full" id="main-container">
        <div className="grid grid-cols-2 w-full h-full">
          <div
            className="bg-zinc-900 flex items-center justify-center"
            id="hero-column-1"
          >
            <div className="p-5 text-white mb-20 mr-9">
              <h2 className="text-5xl mb-3">I Am Phil Nguyen</h2>
              <h5>Full Stack Developer, Entreprenuer, Student of Life</h5>

              <div className="pt-5 mt-7">
                <Link
                  to={"/projects"}
                  className="bg-white hover:bg-pinkphil text-black font-bold py-2 px-4 border border-black rounded mr-5"
                >
                  <button>My Projects</button>
                </Link>
                <a
                  href="#about-container"
                  className="bg-transparent hover:bg-purplephil text-white font-semibold hover:text-white py-2 px-4 border border-white hover:border-transparent rounded"
                >
                  <button>About</button>
                </a>
              </div>
            </div>
          </div>

          <div className="bg-blue-300" id="hero-column-2"></div>
        </div>
      </div>

      <div className="container bg-zinc-900 max-w-full" id="about-container">
        <div className="grid grid-rows-1 w-screen h-3/6 justify-items-center items-center">
          <h2 className="text-5xl text-white items-start">
            About Me
            <div className="bg-white h-1 w-full"></div>
          </h2>
          <div className="w-6/12 text-center">
            <p className="text-white">
              I enjoy building amazing applications that bring value to people
              and businesses. I am a natural problem solver with a business
              mindset and perspective. I am very reliable, love collaboration,
              and have great communications skills. I currently live in
              Indianapolis and I am confident I will be an asset on whatever
              team I join.
            </p>
          </div>
        </div>

        <div className="grid grid-rows-1 w-screen h-3/6 justify-items-center items-center ">
          <h2 className="text-white text-2xl -mb-12">Technical Skills
          <div className="bg-white h-1 w-full mb-10"></div>
          </h2>
          <div className="text-white mb-10 h-full">
            <p>
              HTML, CSS, JavaScript, React, Express, Node, MongoDB, Mongoose,
              Python, PostgreSQL, Django, Git, GitHub, BootStrap, Tailwind,
              Semantic UI
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default HomePage;
