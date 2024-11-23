"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import scrollArrow from "../../../public/scrollArrow.svg";
import styles from "./arrow.module.scss";
export const ScrollArrow = () => {
  const [arrowActive, setArrowActive] = useState(false);

  const changeBackground = () => {
    if (window.scrollY >= 350) {
      setArrowActive(true);
    } else {
      setArrowActive(false);
    }
  };

  useEffect(() => {
    changeBackground();
    window.addEventListener("scroll", changeBackground);
  }, []);

  return (
    <div
      onClick={() => window.scrollTo(0, 0)}
      className={arrowActive ? styles.scrollBtnActive : styles.scrollBtn}
    >
      <Image
        src={scrollArrow}
        alt="scrollArrow-svg"
        className={styles.scrollSvg}
        title="scroll to top"
      />
    </div>
  );
};
