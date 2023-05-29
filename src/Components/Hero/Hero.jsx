import styles from "./Hero.module.css";
import illustration from "../../images/hero-illustration.svg";

const Hero = () => {
  return (
    <section className={styles.hero__container}>
      <div className={styles.hero__text}>
        <h1>Unleash Your Video Creativity with</h1>
        <span>BubbleChat</span>
        <h2>
          A powerful web-based application designed to revolutionize video
          content creation.
        </h2>
        <button>Learn More</button>
      </div>
      <div className={styles.hero__image}>
        <img src={illustration} alt="" />
      </div>
    </section>
  );
};

export default Hero;
