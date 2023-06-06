import styles from "./About.module.css";
import customizeImage from "../../images/customize.svg";
import recordImage from "../../images/record.svg";
import editImage from "../../images/edit.svg";

const cards = [
  {
    name: "Customize",
    image: customizeImage,
    text: `Customize your bubble chat's appearance by choosing your bubble’s font. Take full control of the chat bubble's placement on the screen. Tailor the style to match your video's theme, whether it's playful, professional, or anything in between.`,
  },
  {
    name: "Record",
    image: recordImage,
    text: "With BubbleScript, you have the flexibility to work with the tools that best suit your needs. Combine the power of  green screen and customizable bubble chats with your favorite screen recording app to create exceptional video content that truly stands out.",
  },
  {
    name: "Edit",
    image: editImage,
    text: `Open your favourite video editing software, where the magic happens. Import your screen recording and remove the green screen background.
    Chat bubbles become a versatile asset that complements any video style, from ASMR to cooking tutorials and everything in between.`,
  },
];

const About = ({ aboutRef }) => {
  return (
    <section className={styles.about__container} ref={aboutRef}>
      <h3>Is it for you ?</h3>
      <p>
        <span className={styles.about__name}>BubbleChat</span> combines a green
        screen feature with dynamic bubble chats to revolutionize video content
        creation. As you type, bubble chats magically appear on the side of the
        screen of your choice, simulating engaging dialogues. With{" "}
        <span className={styles.about__name}>BubbleChat</span>, you can record
        your screen, remove the green screen during editing, and use the bubble
        chats as a script for your videos. Say goodbye to traditional spoken
        dialogues and unlock a new level of creativity in your video
        storytelling.
      </p>
      <div className={styles.cards__container}>
        {cards.map((card) => (
          <div className={styles.about__card} key={card.name}>
            <h4>{card.name}</h4>
            <img src={card.image} alt="" />
            <p>{card.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default About;
