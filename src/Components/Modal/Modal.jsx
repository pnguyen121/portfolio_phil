import { useState } from "react";

function Modal({ isHome }) {
  const [showModal, setShowModal] = useState(false);
  return (
    <>
      {isHome ? (
        <button
          className="bg-transparent hover:bg-purplephil mt-5 ml-9 sm:ml-5 text-white font-semibold hover:text-white py-2 px-4 border border-white hover:border-transparent rounded"
          type="button"
          onClick={() => setShowModal(true)}
        >
          Contact
        </button>
      ) : (
        <button
          className="bg-zinc-600 text-white active:bg-white hover:bg-zinc-700
      font-bold px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1"
          type="button"
          onClick={() => setShowModal(true)}
        >
          Contact Info
        </button>
      )}
      {/* if showModdal is true ternary statement */}
      {showModal ? (
        <>
          <div className="flex justify-center items-center overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                <div className="flex items-start justify-between p-5 border-b border-solid border-gray-300 rounded-t ">
                  <h3 className="text-3xl font=semibold text-black">
                    Contact Info
                  </h3>
                  <button
                    className="bg-transparent border-0 text-black float-right"
                    onClick={() => setShowModal(false)}
                  >
                    <span className="text-black opacity-7 h-7 w-6 text-xl block bg-gray-400 py-0 rounded-full">
                      x
                    </span>
                  </button>
                </div>
                <div className="relative p-6 flex-auto text-black">
                  <p>
                    <i class="fa-regular fa-envelope"></i>{" "}
                    phil.nguy121@gmail.com
                  </p>
                  <p>
                    <i class="fa-solid fa-phone"></i> 812-655-4356
                  </p>
                  <p>
                    <i class="fa-regular fa-file"></i>
                    <a
                      className="hover:text-pinkphil"
                      href="https://docs.google.com/document/d/1HBbeEQH0DDufaK_tcxklTIohajOSRi42vzaSaGQ4asc/edit?usp=sharing"
                      target="_blank"
                    >
                      {" "}
                      Resume
                    </a>
                  </p>
                </div>
                <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                  <button
                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
        </>
      ) : null}
    </>
  );
}

export default Modal;
