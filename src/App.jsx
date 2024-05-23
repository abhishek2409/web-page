import "./styles/index.scss";
import Header from "./components/HeaderComponent";
import Hero from "./components/HeroComponent";
import SectionOne from "./components/Sections/SectionOneComponent";
import SectionTwo from "./components/Sections/SectionTwoComponent";
import SectionThree from "./components/Sections/SectionThreeComponent";
import SectionFour from "./components/Sections/SectionFourComponent";
import SectionFive from "./components/Sections/SectionFiveComponent";
import Footer from "./components/FooterComponent/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <SectionOne />
      <SectionTwo />
      <SectionThree />
      <SectionFour />
      <SectionFive />
      <Footer />
    </div>
  );
}

export default App;
