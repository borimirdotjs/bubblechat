import Nav from "../Components/Nav/Nav";
import Hero from "../Components/Hero/Hero";
import About from "../Components/About/About";
import Customize from "../Components/Customize/Customize";
import Footer from "../Components/Footer/Footer";
import styles from "./Home.module.css";
import { useRef } from "react";
import { Toaster } from "react-hot-toast";

const Home = () => {
  const aboutRef = useRef(null);
  const customizeRef = useRef(null);

  const handleScroll = (ref) => {
    window.scrollTo({
      top: ref.offsetTop,
      left: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      <div className={styles.home__container}>
        <Toaster />
        <Nav handleScroll={handleScroll} customizeRef={customizeRef} />
        <Hero handleScroll={handleScroll} aboutRef={aboutRef} />
        <About aboutRef={aboutRef} />
        <Customize customizeRef={customizeRef} />
        <Footer />
      </div>
      <h3 className={styles.hidden_message}>
        Please visit this website on desktop.
      </h3>
    </>
  );
};

export default Home;
