import React, { useState } from "react";
import "../css/Button.css";

const ACTIVATON_HEIGHT = 350;
//function to make a button that scrolls to top when long down on the website
export const ScrollButton = () => {
  const [visible, setVisible] = useState(false);

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > ACTIVATON_HEIGHT) {
      setVisible(true);
    } else if (scrolled <= ACTIVATON_HEIGHT) {
             setVisible(false);
           }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  window.addEventListener("scroll", toggleVisible);

  return (
    <button
      data-cy="scroll-button"
      onClick={scrollToTop}
      style={{ display: visible ? "inline" : "none" }}
      className="scroll-button"
      tabIndex={0}
    >
      {" "}
      scroll til toppen
    </button>
  );
};

export default ScrollButton;
