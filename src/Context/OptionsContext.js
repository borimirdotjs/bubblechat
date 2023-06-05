import { createContext, useState } from "react";

const OptionsContext = createContext(null);

export const OptionsProvider = ({ children }) => {
  const [font, setFont] = useState("Comfortaa");
  const [bubbleColor, setBubbleColor] = useState("var(--lightgrey)");
  const [bubblePosition, setBubblePosition] = useState("bl");
  return (
    <OptionsContext.Provider
      value={{
        font,
        setFont,
        bubbleColor,
        setBubbleColor,
        bubblePosition,
        setBubblePosition,
      }}
    >
      {children}
    </OptionsContext.Provider>
  );
};

export default OptionsContext;
