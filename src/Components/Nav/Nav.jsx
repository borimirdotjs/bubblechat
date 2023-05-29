import styles from "./Nav.module.css";
import logo from "../../images/logo.svg";

const Nav = () => {
  return (
    <nav>
      <div className={styles.logo__container}>
        <img src={logo} alt="bubblechat logo" />
      </div>
      <button>Get Started</button>
    </nav>
  );
};

export default Nav;
