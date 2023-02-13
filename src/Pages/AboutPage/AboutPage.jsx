import Header from "../../Components/Header/Header";

function AboutPage() {
  return (
    <>
      <Header />
      <div
        className="container mx-auto h-screen max-w-full bg-zinc-900"
        id="aboutpage-container"
      >
        <div className="grid grid-rows-1 w-screen justify-items-center text-white text-5xl pt-5">
          About
        </div>
        <div className="grid grid-rows-1 w-screen h-3/6 justify-items-center items-center">
          <div className="grid grid-cols-2 w-screen h-full justify-items-center items-center">
            <div className="w-9/12 text-center">
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
                Outside of work I am an avid sneaker lover, corgi dad, gamer, gym rat
                and I own my own ATM business!
              </p>
            </div>
            <div className="w-9/12 text-center">
                <img src="https://imgur.com/hmbmHh6.png" className="rounded-full" alt="" />
            </div>
          </div>
        </div>

        <div className="grid grid-rows-1 w-screen h-3/6 justify-items-center items-center ">
          <h2 className="text-white text-2xl -mb-12">
            Technical Skills
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
        <h2>HI I AM A ABOUT PAGE</h2>
      </div>
    </>
  );
}

export default AboutPage;
