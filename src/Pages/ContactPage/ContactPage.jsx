import Header from "../../Components/Header/Header";

function ContactPage() {
  return (
    <>
      <Header isAbout={false} isProject={false} />
      <div className="container h-screen w-screen bg-zinc-900 sm:max-w-full">
        <div className="grid-cols-1 w-screen">
        <div className="grid text-white text-5xl h-20 justify-items-center pt-7 mb-5">Contact</div>
        <div className="grid-rows-3 bg-zinc-500 ">
            <div className="bg-zinc-200 w-3/6">
                row1
            </div>
            <div>
                row2
            </div>
            <div>
                row3
            </div>
        </div>
        </div>
      </div>
    </>
  );
}

export default ContactPage;
