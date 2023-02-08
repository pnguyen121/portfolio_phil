import Header from "../Components/Header/Header";
import Footer from "../Components/Footer/Footer";

function HomePage() {
  return (
    <div>
      <Header />
      <div className="container mx-auto" id="main-container">
        <h2>Hi I am the HOMEPAGE</h2>
      </div>
      <Footer />
    </div>
  );
}

export default HomePage;
