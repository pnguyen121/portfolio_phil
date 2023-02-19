import Header from "../../Components/Header/Header";
import Modal from "../../Components/Modal/Modal";


function AboutPage() {
  return (
    <>
      <Header isAbout={true} isProject={false} />
      <div
        className="container mx-auto h-screen max-w-full bg-zinc-900"
        id="aboutpage-container"
      >
        <div className="grid grid-rows-1 w-screen justify-items-center text-white text-5xl pt-5 hidden sm:visible">
          About
        </div>
        <div className="grid grid-rows-1 w-screen h-full bg-zinc-900 sm:h-3/6 justify-items-center items-center">
          <div className="grid-cols-1 w-screen h-full justify-items-center items-center sm:grid sm:grid-cols-2">
            <div className="w-full p-5 sm:w-9/12 text-center">
              <h2 className="text-4xl text-white items-start mb-5">
                About Me
                {/* <div className="bg-white h-1 w-full"></div> */}
              </h2>
              <p className="text-white mb-5">
                I enjoy building amazing applications that bring value to people
                and businesses. I am a natural problem solver with a business
                mindset and perspective.
              </p>
              <p className="text-white mb-5">
                I am very reliable, love collaboration, and have great
                communications skills. I currently live in Indianapolis and I am
                confident I will be an asset on whatever team I join.
              </p>
              <p className="text-white mb-5">
                Outside of work I am an avid sneaker lover, corgi dad, gamer,
                gym rat and I own my own ATM business!
              </p>
            </div>
            <div className="grid grid-cols-1 w-full sm:w-9/12 text-center">
              <img
                src="https://i.imgur.com/QfWXlZ7.png"
                className="rounded-full"
                alt=""
              />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 bg-zinc-900 sm:grid sm:grid-rows-1 sm:w-screen sm:h-2/6 justify-items-center items-center">
          <h2 className="text-white text-2xl mb-5 sm:-mb-12">
            Technical Skills
            <div className="bg-white h-1 w-full mb-10"></div>
          </h2>
          <div className="text-white w-80 h-full sm:w-11/12 sm:mb-8 sm:h-full sm:pt-5 ">
            <button class="bg-zinc-600 hover:bg-zinc-700 text-white font-bold py-2 px-4 rounded-full">
              HTML
            </button>
            <button class="bg-zinc-600 hover:bg-zinc-700 text-white font-bold py-2 px-4 rounded-full">
              CSS
            </button>
            <button class="bg-zinc-600 hover:bg-zinc-700 text-white font-bold py-2 px-4 rounded-full">
              JavaScript
            </button>
            <button class="bg-zinc-600 hover:bg-zinc-700 text-white font-bold py-2 px-4 rounded-full">
              React
            </button>
            <button class="bg-zinc-600 hover:bg-zinc-700 text-white font-bold py-2 px-4 rounded-full">
              Express
            </button>
            <button class="bg-zinc-600 hover:bg-zinc-700 text-white font-bold py-2 px-4 rounded-full">
              Node.JS
            </button>
            <button class="bg-zinc-600 hover:bg-zinc-700 text-white font-bold py-2 px-4 rounded-full">
              MongoDB
            </button>
            <button class="bg-zinc-600 hover:bg-zinc-700 text-white font-bold py-2 px-4 rounded-full">
              Mongoose
            </button>
            <button class="bg-zinc-600 hover:bg-zinc-700 text-white font-bold py-2 px-4 rounded-full">
              Python
            </button>
            <button class="bg-zinc-600 hover:bg-zinc-700 text-white font-bold py-2 px-4 rounded-full">
              PostgreSQL
            </button>
            <button class="bg-zinc-600 hover:bg-zinc-700 text-white font-bold py-2 px-4 rounded-full">
              Django
            </button>
            <button class="bg-zinc-600 hover:bg-zinc-700 text-white font-bold py-2 px-4 rounded-full">
              Tailwind CSS
            </button>
            <button class="bg-zinc-600 hover:bg-zinc-700 text-white font-bold py-2 px-4 rounded-full">
              BootStrap
            </button>
            <button class="bg-zinc-600 hover:bg-zinc-700 text-white font-bold py-2 px-4 rounded-full sm:invisible">
                Semantic UI React
              </button>
              <button class="bg-zinc-600 hover:bg-zinc-700 text-white font-bold py-2 px-4 rounded-full sm:invisible">
                Git
              </button>
              <button class="bg-zinc-600 hover:bg-zinc-700 text-white font-bold py-2 px-4 rounded-full sm:invisible">
                GitHub
              </button>
              <button class="bg-zinc-600 hover:bg-zinc-700 text-white font-bold py-2 px-4 rounded-full sm:invisible">
                AWS S3 Buckets
              </button>
              <button class="bg-zinc-600 hover:bg-zinc-700 text-white font-bold py-2 px-4 rounded-full sm:invisible">
                MongoDB Atlas
              </button>
            <div className="flex justify-center pt-5 w-11/12 invisible sm:visible sm:pt-2">
              <button class="bg-zinc-600 hover:bg-zinc-700 text-white font-bold py-2 px-4 rounded-full">
                Semantic UI React
              </button>
              <button class="bg-zinc-600 hover:bg-zinc-700 text-white font-bold py-2 px-4 rounded-full">
                Git
              </button>
              <button class="bg-zinc-600 hover:bg-zinc-700 text-white font-bold py-2 px-4 rounded-full">
                GitHub
              </button>
              <button class="bg-zinc-600 hover:bg-zinc-700 text-white font-bold py-2 px-4 rounded-full">
                AWS S3 Buckets
              </button>
              <button class="bg-zinc-600 hover:bg-zinc-700 text-white font-bold py-2 px-4 rounded-full">
                MongoDB Atlas
              </button>
            </div>
          </div>
        </div>

        <div className="grid-cols-1 w-screen h-44 bg-zinc-900">
          <div className="grid text-white text-5xl h-20 justify-items-center pt-7 mb-5">
            Contact
          </div>
          <div className="grid grid-rows-1 bg-zinc-900 justify-items-center">
            <Modal />
          </div>
        </div>
      </div>
    </>
  );
}

export default AboutPage;
