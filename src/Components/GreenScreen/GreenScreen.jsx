import React, { useState, useEffect, useRef, useContext } from "react";
import styles from "./GreenScreen.module.css";
import OptionsContext from "../../Context/OptionsContext";

const GreenScreen = () => {
  const [inputValue, setInputValue] = useState("");
  const [messages, setMessages] = useState([]);
  const [showTip, setShowTip] = useState(true);

  const { font, bubblePosition, bubbleColor } = useContext(OptionsContext);

  console.log(font);

  const inputRef = useRef(null);
  const handleMessageSend = (e) => {
    e.preventDefault();
    if (inputValue) {
      setMessages([...messages, inputValue]);
      setInputValue("");
    }
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowTip(false);
    }, 4000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (messages.length > 0) {
      const timer = setTimeout(() => {
        setMessages((prevMessages) => prevMessages.slice(1));
      }, 10000);
      return () => clearTimeout(timer);
    }
    inputRef.current.focus();
  }, [messages]);

  return (
    <div
      className={
        bubblePosition === "br"
          ? `${styles.vanish__container} ${styles.bottom_right}`
          : styles.vanish__container
      }
      onClick={() => inputRef.current.focus()}
      style={{ fontFamily: font }}
    >
      <div className={styles.vanish}>
        <h3
          style={{ display: showTip ? "block" : "none" }}
          className={styles.welcome_text}
        >
          Start typing...
        </h3>
        {messages.map((message, index) => (
          <div
            className={
              messages.length - 1 === index
                ? `${styles.text_line} ${styles.last}`
                : styles.text_line
            }
            key={index}
            style={{
              backgroundColor: bubbleColor,
              fontFamily: font,
            }}
          >
            <p
              style={{
                color:
                  bubbleColor === "var(--lightgrey)"
                    ? "var(--black)"
                    : "var(--lightgrey)",
              }}
            >
              {message}
            </p>
            {messages.length - 1 === index && (
              <div
                style={{
                  backgroundColor: bubbleColor,
                }}
                className={styles.after_element}
              ></div>
            )}
          </div>
        ))}
        <form onSubmit={handleMessageSend}>
          <input
            ref={inputRef}
            style={{
              opacity: inputValue.length > 0 ? 1 : 0,
              fontFamily: font,
              backgroundColor: bubbleColor,
              color:
                bubbleColor === "var(--lightgrey)"
                  ? "var(--black)"
                  : "var(--lightgrey",
            }}
            type="text"
            value={inputValue}
            onChange={(e) => {
              setInputValue(e.target.value);
              setShowTip(false);
            }}
          />
        </form>
      </div>
    </div>
  );
};

export default GreenScreen;
