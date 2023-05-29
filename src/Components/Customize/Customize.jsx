import styles from "./Customize.module.css";

const Customize = () => {
  return (
    <section>
      <h3>Customize</h3>
      <div className={styles.customize__options}>
        <h4>Chat bubble options</h4>
        <form action=""></form>
      </div>
      <div className={styles.position}>
        <h4>Chat bubble position</h4>
      </div>
      <button className={styles.customize__start}>Start</button>
    </section>
  );
};

export default Customize;
