import styles from "./Customize.module.css";
import { useContext } from "react";
import OptionsContext from "../../Context/OptionsContext";
import { useNavigate } from "react-router-dom";

const Customize = ({ customizeRef }) => {
  const {
    font,
    setFont,
    bubbleColor,
    setBubbleColor,
    bubblePosition,
    setBubblePosition,
  } = useContext(OptionsContext);

  const navigate = useNavigate();

  return (
    <>
      <section className={styles.customize__container} ref={customizeRef}>
        <h3>Customize</h3>
        <div className={styles.options}>
          <div className={styles.customize__options}>
            <h4>Chat bubble options</h4>
            <form action="">
              <div className={styles.font}>
                <label htmlFor="font">Choose a font</label>
                <select id="font" onChange={(e) => setFont(e.target.value)}>
                  <option defaultValue={"Comfortaa"} value="Comfortaa">
                    Comfortaa
                  </option>
                  <option value="Poppins">Poppins</option>
                  <option value="Kanit">Kanit</option>
                </select>
              </div>
              <div className={styles.bubble__style}>
                <label htmlFor="style">Choose a bubble color</label>
                <div className={styles.colors}>
                  <div
                    onClick={() => setBubbleColor("var(--lightgrey)")}
                    className={styles.color}
                  ></div>
                  <div
                    className={styles.color}
                    onClick={() => setBubbleColor("var(--black)")}
                  ></div>
                  <div
                    className={styles.color}
                    onClick={() => setBubbleColor("lightsalmon")}
                  ></div>
                </div>
              </div>
              <div className={styles.preview__container}>
                <label htmlFor="">Preview</label>
                <div className={styles.preview}>
                  <svg
                    width="250"
                    height="53"
                    viewBox="0 0 250 53"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g filter="url(#filter0_d_5_330)">
                      <path
                        className={styles.bubble__svg}
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M21.5 0C9.62588 0 0 9.62588 0 21.5C0 33.3741 9.62588 43 21.5 43H40.1154C39.9872 45.2 38.3846 49.88 33 51C38 50.6 48 48.44 48 43H227.5C239.374 43 249 33.3741 249 21.5C249 9.62588 239.374 0 227.5 0H21.5Z"
                        fill={bubbleColor}
                      />
                    </g>
                    <defs>
                      <filter
                        id="filter0_d_5_330"
                        x="0"
                        y="0"
                        width="250"
                        height="53"
                        filterUnits="userSpaceOnUse"
                        colorInterpolationFilters="sRGB"
                      >
                        <feFlood floodOpacity="0" result="BackgroundImageFix" />
                        <feColorMatrix
                          in="SourceAlpha"
                          type="matrix"
                          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                          result="hardAlpha"
                        />
                        <feOffset dx="1" dy="2" />
                        <feComposite in2="hardAlpha" operator="out" />
                        <feColorMatrix
                          type="matrix"
                          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                        />
                        <feBlend
                          mode="normal"
                          in2="BackgroundImageFix"
                          result="effect1_dropShadow_5_330"
                        />
                        <feBlend
                          mode="normal"
                          in="SourceGraphic"
                          in2="effect1_dropShadow_5_330"
                          result="shape"
                        />
                      </filter>
                    </defs>
                  </svg>

                  <p
                    style={{
                      fontFamily: font,
                      color:
                        bubbleColor === "var(--lightgrey)"
                          ? "var(--black)"
                          : "var(--lightgrey",
                    }}
                  >
                    Hey there !
                  </p>
                </div>
              </div>
            </form>
          </div>
          <div className={styles.customize__position}>
            <h4>Chat bubble position</h4>
            <div className={styles.font}>
              <label htmlFor="">Choose a position</label>
              <select
                name=""
                id=""
                onChange={(e) => setBubblePosition(e.target.value)}
              >
                <option defaultValue={"bl"} value="bl">
                  Bottom left
                </option>
                <option value="br">Bottom right</option>
              </select>
            </div>
            <div
              className={
                bubblePosition === "bl"
                  ? `${styles.customize__green} ${styles.bottom_left}`
                  : bubblePosition === "br"
                  ? `${styles.customize__green} ${styles.bottom_right}`
                  : `${styles.customize__green} `
              }
            >
              <div className={styles.text__box}>
                <div className={styles.text}></div>
                <div className={styles.text}></div>
                <div className={styles.text}></div>
              </div>
            </div>
          </div>
        </div>
        <button
          onClick={() => navigate("/greenscreen")}
          className={styles.customize__start}
        >
          Start
        </button>
      </section>
    </>
  );
};

export default Customize;
