import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <section className={styles.footer__container}>
      <div className={styles.footer__top}>
        <div className={styles.footer__logo}>
          <img src="" alt="" />
        </div>
        <div className={styles.footer__socials}>
          <img src="" alt="" />
          <img src="" alt="" />
          <img src="" alt="" />
        </div>
      </div>
      <hr />
      <div className={styles.footer__middle}>
        <div className={styles.footer__contact_us}>
          <h4>Contact Us</h4>
          <div className={styles.contact__info}>
            <img src="" alt="" />
            <p>info@bubblechat.com</p>
          </div>
          <div className={styles.contact__info}>
            <img src="" alt="" />
            <p>555 123-4567-90</p>
          </div>
        </div>
        <div className={styles.footer__newsletter}>
          <h3>Subscribe to news</h3>
          <div className={styles.newsletter__container}>
            <input type="text" />
            <button>Subscribe</button>
          </div>
        </div>
      </div>
      <hr />
      <div className={styles.footer__bottom}>
        <div className={styles.bottom__link}>
          <img src="" alt="" />
          <a href="">explore website’s design</a>
        </div>
        <div className={styles.bottom__link}>
          <img src="" alt="" />
          <a href="">view website’s code</a>
        </div>
        <div className={styles.bottom__link}>
          <img src="" alt="" />
          <a href="">about the author</a>
        </div>
      </div>
    </section>
  );
};

export default Footer;
