import Nav from "../Components/Nav/Nav";
import Hero from "../Components/Hero/Hero";
import About from "../Components/About/About";
import Customize from "../Components/Customize/Customize";
import Footer from "../Components/Footer/Footer";
import styles from "./Home.module.css";

const Home = () => {
  return (
    <div className={styles.home__container}>
      <Nav />
      <Hero />
      <About />
      <Customize />
      {/* <Footer /> */}
    </div>
  );
};

export default Home;
