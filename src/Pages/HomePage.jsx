import Header from "../Components/Header/Header";
import Footer from "../Components/Footer/Footer";

import { Link } from "react-router-dom";

function HomePage() {
  return (
    <div>
      <Header isAbout={false} isProject={false}/>
      <div className="flex container mx-auto max-w-full" id="main-container">
        <div className="grid grid-cols-1 sm:grid-cols-2 h-5/6 w-full sm:h-full">
          <div
            className="bg-[url('./src/assets/images/port-background-good.png')] h-screen bg-cover bg-right sm:bg-[url('null')] sm:bg-zinc-900 flex items-center justify-center"
            id="hero-column-1"
          >
            <div className="p-5 text-white h-2/5 mb-20 mr-9">
              <h2 className="text-5xl mb-3 ">I Am Phil Nguyen</h2>
              <h5>Full Stack Developer, Entreprenuer, Student of Life</h5>

              <div className="pt-5 mt-7">
                <Link
                  to={"/projects"}
                  className="bg-white hover:bg-pinkphil text-black font-bold py-2 px-4 border border-black rounded mr-5"
                >
                  <button>My Projects</button>
                </Link>
                <Link to={"/about"}
                  className="bg-transparent hover:bg-purplephil text-white font-semibold hover:text-white py-2 px-4 border border-white hover:border-transparent rounded"
                >
                  <button>About</button>
                </Link>
              </div>
            </div>
          </div>

          <div className="bg-blue-300" id="hero-column-2"></div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;