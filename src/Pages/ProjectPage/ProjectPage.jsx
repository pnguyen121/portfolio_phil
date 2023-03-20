import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";

function ProjectPage() {
  return (
    <>
      <Header isAbout={false} isProject={true} />
      <div
        className="container bg-zinc-900 h-screen w-screen max-w-full"
        id="project-container"
      >
        <div className="grid grid-rows-1 h-1/6 justify-items-center">
          <div className="text-white h-2/6 mt-6">
            <p className="text-5xl text-white ">My Projects</p>
          </div>
        </div>

        <div className="grid grid-rows-1 justify-between h-1/6 max-w-full h-fit">
          <div className="grid grid-cols-1 w-screen sm:max-w-full sm:grid-cols-2">
            <div class="flex items-center justify-center bg-zinc-900 mb-5 sm:p-5 sm:mb-0">
              <div class="group h-96 w-full [perspective:1000px]">
                <div className="flex justify-items-center justify-center w-full mb-2 sm:hidden">
                  <a href="https://atmworks.fly.dev/" target="_blank">
                    <button class="mt-2 rounded-md bg-white py-1 px-2 text-sm hover:bg-neutral-900">
                      Project Link
                    </button>
                  </a>
                  <a href="https://bit.ly/AtmWorksPhil" target="_blank">
                    <button class="mt-2 rounded-md bg-white py-1 px-2 text-sm hover:bg-neutral-900">
                      GitHub
                    </button>
                  </a>
                </div>
                <div class="relative h-full w-full rounded-xl shadow-xl sm:transition-all sm:duration-500 sm:[transform-style:preserve-3d] sm:group-hover:[transform:rotateY(180deg)]">
                  <div class="absolute inset-0">
                    <img
                      class="h-full w-full rounded-xl object-cover shadow-xl shadow-black/40"
                      src="https://i.imgur.com/Zi5ZK6o.png"
                      alt=""
                    />
                  </div>
                  <div class="absolute inset-0 h-full w-full rounded-xl bg-black/80 px-12 text-center text-slate-200 [transform:rotateY(180deg)] [backface-visibility:hidden]">
                    <div class="flex min-h-full flex-col items-center justify-center">
                      <h1 class="text-3xl font-bold">ATM WORKS</h1>
                      <p class="text-lg">ATM Business Management App</p>
                      <p class="text-base">
                        Python3, PostgreSQL, Django, Mapbox API, Bootstrap,
                        JavaScript
                      </p>
                      <a href="https://atmworks.fly.dev/" target="_blank">
                        <button class="mt-2 rounded-md bg-neutral-800 py-1 px-2 text-sm hover:bg-neutral-900">
                          Project Link
                        </button>
                      </a>
                      <a href="https://bit.ly/AtmWorksPhil" target="_blank">
                        <button class="mt-2 rounded-md bg-neutral-800 py-1 px-2 text-sm hover:bg-neutral-900">
                          GitHub
                        </button>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="flex items-center justify-center bg-zinc-900 sm:p-5">
              <div class="group h-96 w-full [perspective:1000px]">
                <div className="flex justify-items-center justify-center w-full mt-10 mb-2 h- sm:hidden">
                  <a href="https://bit.ly/NikeAppx" target="_blank">
                    <button class="mt-2 rounded-md bg-white py-1 px-2 text-sm hover:bg-neutral-900">
                      Project Link
                    </button>
                  </a>
                  <a href="https://bit.ly/NikeAppPhil" target="_blank">
                    <button class="mt-2 rounded-md bg-white py-1 px-2 text-sm hover:bg-neutral-900">
                      GitHub
                    </button>
                  </a>
                </div>
                <div class="relative h-full w-full rounded-xl shadow-xl sm:transition-all sm:duration-500 sm:[transform-style:preserve-3d] sm:group-hover:[transform:rotateY(180deg)]">
                  <div class="absolute inset-0">
                    <img
                      class="h-full w-full rounded-xl object-cover shadow-xl shadow-black/40"
                      src="https://imgur.com/OfPFP0B.png"
                      alt=""
                    />
                  </div>
                  <div class="absolute inset-0 h-full w-full rounded-xl bg-black/80 px-12 text-center text-slate-200 [transform:rotateY(180deg)] [backface-visibility:hidden]">
                    <div class="flex min-h-full flex-col items-center justify-center">
                      <h1 class="text-3xl font-bold">Nike SNKRS</h1>
                      <p class="text-lg">Nike Snkrs App Clone</p>
                      <p class="text-base">
                        MongoDB, Express, React, Node,(MERN), AWS S3 Buckets
                        Semantic UI
                      </p>
                      <a href="https://bit.ly/NikeAppx" target="_blank">
                        <button class="mt-2 rounded-md bg-neutral-800 py-1 px-2 text-sm hover:bg-neutral-900">
                          Project Link
                        </button>
                      </a>
                      <a href="https://bit.ly/NikeAppPhil" target="_blank">
                        <button class="mt-2 rounded-md bg-neutral-800 py-1 px-2 text-sm hover:bg-neutral-900">
                          GitHub
                        </button>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* 3 and 4 projects */}
        <div className="grid grid-rows-1 justify-between h-1/6 max-w-full h-fit">
          <div className="grid grid-cols-1 w-screen sm:max-w-full sm:grid-cols-2">
            <div class="flex items-center justify-center bg-zinc-900 mb-5 sm:p-5 sm:mb-0">
              <div class="group h-96 w-full [perspective:1000px]">
                <div className="flex justify-items-center justify-center w-full mb-2 sm:hidden">
                  <a href="https://atmworks.fly.dev/" target="_blank">
                    <button class="mt-2 rounded-md bg-white py-1 px-2 text-sm hover:bg-neutral-900">
                      Project Link
                    </button>
                  </a>
                  <a href="https://bit.ly/AtmWorksPhil" target="_blank">
                    <button class="mt-2 rounded-md bg-white py-1 px-2 text-sm hover:bg-neutral-900">
                      GitHub
                    </button>
                  </a>
                </div>
                <div class="relative h-full w-full rounded-xl shadow-xl sm:transition-all sm:duration-500 sm:[transform-style:preserve-3d] sm:group-hover:[transform:rotateY(180deg)]">
                  <div class="absolute inset-0">
                    <img
                      class="h-full w-full rounded-xl object-cover shadow-xl shadow-black/40"
                      src="https://i.imgur.com/do79udy.jpg"
                      alt=""
                    />
                  </div>
                  <div class="absolute inset-0 h-full w-full rounded-xl bg-black/80 px-12 text-center text-slate-200 [transform:rotateY(180deg)] [backface-visibility:hidden]">
                    <div class="flex min-h-full flex-col items-center justify-center">
                      <h1 class="text-3xl font-bold">L.A Nails</h1>
                      <p class="text-lg">Website for a local business</p>
                      <p class="text-base">
                        Vanilla HTML, CSS, JavaScript
                      </p>
                      <a href="https://monumental-semolina-ca5f46.netlify.app/" target="_blank">
                        <button class="mt-2 rounded-md bg-neutral-800 py-1 px-2 text-sm hover:bg-neutral-900">
                          Project Link
                        </button>
                      </a>
                      <a href="https://github.com/pnguyen121/LA-NAILS-WEBSITE" target="_blank">
                        <button class="mt-2 rounded-md bg-neutral-800 py-1 px-2 text-sm hover:bg-neutral-900">
                          GitHub
                        </button>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="flex items-center justify-center bg-zinc-900 sm:p-5">
              <div class="group h-96 w-full [perspective:1000px]">
                <div className="flex justify-items-center justify-center w-full mt-10 mb-2 h- sm:hidden">
                  <a href="https://pnguyen121.github.io/Motivational-Quotes-Static/" target="_blank">
                    <button class="mt-2 rounded-md bg-white py-1 px-2 text-sm hover:bg-neutral-900">
                      Project Link
                    </button>
                  </a>
                  <a href="https://github.com/pnguyen121/Motivational_Quotes" target="_blank">
                    <button class="mt-2 rounded-md bg-white py-1 px-2 text-sm hover:bg-neutral-900">
                      GitHub
                    </button>
                  </a>
                </div>
                <div class="relative h-full w-full rounded-xl shadow-xl sm:transition-all sm:duration-500 sm:[transform-style:preserve-3d] sm:group-hover:[transform:rotateY(180deg)]">
                  <div class="absolute inset-0">
                    <img
                      class="h-full w-full rounded-xl object-cover shadow-xl shadow-black/40"
                      src="https://i.imgur.com/At0do9t.png"
                      alt=""
                    />
                  </div>
                  <div class="absolute inset-0 h-full w-full rounded-xl bg-black/80 px-12 text-center text-slate-200 [transform:rotateY(180deg)] [backface-visibility:hidden]">
                    <div class="flex min-h-full flex-col items-center justify-center">
                      <h1 class="text-3xl font-bold">Motivational Quotes</h1>
                      <p class="text-lg">Random Quote Via Third Party API</p>
                      <p class="text-base">
                        React, TailwindCSS, Third Party API
                      </p>
                      <a href="https://pnguyen121.github.io/Motivational-Quotes-Static/" target="_blank">
                        <button class="mt-2 rounded-md bg-neutral-800 py-1 px-2 text-sm hover:bg-neutral-900">
                          Project Link
                        </button>
                      </a>
                      <a href="https://github.com/pnguyen121/Motivational_Quotes" target="_blank">
                        <button class="mt-2 rounded-md bg-neutral-800 py-1 px-2 text-sm hover:bg-neutral-900">
                          GitHub
                        </button>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Second Row of Project */}
        <div className="grid grid-rows-1 justify-between max-w-full h-fit bg-zinc-900">
          <div className="grid grid-cols-1 w-screen mt-5 sm:w-screen">
            <div class="flex items-center justify-center bg-zinc-900 sm:p-5">
              <div class="group h-96 w-full [perspective:1000px] sm:w-8/12">
                <div className="flex justify-items-center justify-center w-full mt-20 mb-2 h- sm:hidden">
                  <a href="https://bit.ly/HypeTalkx" target="_blank">
                    <button class="mt-2 rounded-md bg-white py-1 px-2 text-sm hover:bg-neutral-900">
                      Project Link
                    </button>
                  </a>
                  <a href="https://bit.ly/HypeTalkPhil" target="_blank">
                    <button class="mt-2 rounded-md bg-white py-1 px-2 text-sm hover:bg-neutral-900">
                      GitHub
                    </button>
                  </a>
                </div>
                <div class="relative h-full w-full rounded-xl shadow-xl sm:transition-all sm:duration-500 sm:[transform-style:preserve-3d] sm:group-hover:[transform:rotateY(180deg)]">
                  <div class="absolute inset-0">
                    <img
                      class="h-full w-full rounded-xl object-cover shadow-xl shadow-black/40"
                      src="https://imgur.com/JJNWghp.png"
                      alt=""
                    />
                  </div>
                  <div class="absolute inset-0 h-full w-full rounded-xl bg-black/80 px-12 text-center text-slate-200 [transform:rotateY(180deg)] [backface-visibility:hidden]">
                    <div class="flex min-h-full flex-col items-center justify-center">
                      <h1 class="text-3xl font-bold">Hype-Talk</h1>
                      <p class="text-lg">Sneaker Community Forum</p>
                      <p class="text-base">
                        MongoDB, Mongoose, Express, Node, JavaScript, oAUTH,
                        HTML, CSS, Bootstrap
                      </p>
                      <a href="https://bit.ly/HypeTalkx" target="_blank">
                        <button class="mt-2 rounded-md bg-neutral-800 py-1 px-2 text-sm hover:bg-neutral-900">
                          Project Link
                        </button>
                      </a>
                      <a href="https://bit.ly/HypeTalkPhil" target="_blank">
                        <button class="mt-2 rounded-md bg-neutral-800 py-1 px-2 text-sm hover:bg-neutral-900">
                          GitHub
                        </button>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProjectPage;
