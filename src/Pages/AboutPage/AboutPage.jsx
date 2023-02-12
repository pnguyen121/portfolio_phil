import Header from "../../Components/Header/Header";

function AboutPage() {
  return (
    <>
      <Header />
      <div
        className="container mx-auto h-screen max-w-full bg-zinc-900"
        id="aboutpage-container"
      >
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
