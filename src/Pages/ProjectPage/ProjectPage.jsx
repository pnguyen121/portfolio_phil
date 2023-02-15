import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";

function ProjectPage() {
  return (
    <>
      <Header />
      <div
        className="container bg-zinc-900 h-screen w-screen max-w-full"
        id="project-container"
      >
        <div className="grid grid-rows-1 h-1/6 justify-items-center">
          <div className="text-white h-2/6 mt-6">
            <p className="text-5xl text-white">My Projects</p>
          </div>
        </div>

        <div className="grid grid-rows-1 justify-between h-1/6 max-w-full h-fit">
          <p>hi</p>
          <div className="columns-2 w-screen">
            <div class="flex items-center justify-center bg-zinc-900">
              <div class="group h-96 w-full [perspective:1000px]">
                <div class="relative h-full w-full rounded-xl shadow-xl transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                  <div class="absolute inset-0">
                    <img
                      class="h-full w-full rounded-xl object-cover shadow-xl shadow-black/40"
                      src="https://imgur.com/zNwgoU7.png"
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

            <div class="flex items-center justify-center bg-zinc-900">
              <div class="group h-96 w-full [perspective:1000px]">
                <div class="relative h-full w-full rounded-xl shadow-xl transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
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
        <div className="grid grid-rows-1 justify-between max-w-full h-fit mb-5 mt-5">
          <div className="columns-1 w-screen">
            <div class="flex items-center justify-center bg-zinc-900">
              <div class="group h-96 w-8/12 [perspective:1000px]">
                <div class="relative h-full w-full rounded-xl shadow-xl transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
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
                        MongoDB, Mongoose, Express, Node, JavaScript, oAUTH, HTML, CSS, Bootstrap
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
