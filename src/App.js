import "./App.css";
import Nav from "./Components/Nav/Nav";
import Hero from "./Components/Hero/Hero";
import About from "./Components/About/About";
import Customize from "./Components/Customize/Customize";
import Footer from "./Components/Footer/Footer";
import GreenScreen from "./Components/GreenScreen/GreenScreen";

function App() {
  return (
    <div className="App">
      <Nav />
      <Hero />
      <About />
      {/* <Customize />
      <Footer />
      <GreenScreen /> */}
    </div>
  );
}

export default App;
