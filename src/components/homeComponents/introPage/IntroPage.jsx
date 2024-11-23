"use client";
import styles from "./IntroPage.module.scss";
import Image from "next/image";
import girl from "../../../../public/girl.svg";
import { useEffect } from "react";

export default function IntroPage() {
  useEffect(() => {
    // const cursorDot = document.querySelector(".IntroPage_cursorDot___3Kp0");
    // const cursorOutline = document.querySelector(".IntroPage_cursorOutline__FMWdd");
    document.addEventListener("mousemove", function (e) {
      // const posX = e.clientX;
      // const posY = e.clientY;

      // cursorDot.style.left = `${posX}px`;
      // cursorDot.style.top = `${posY}px`;

      // cursorOutline.style.left = `${posX}px`;
      // cursorOutline.style.top = `${posY}px`;

      // cursorOutline.animate({
      //     left: `${posX}px`,
      //     top: `${posY}px`,
      // }, {duration: 500, fill: "forwards"})

      document
        .querySelectorAll(".IntroPage_object__EnbP2")
        .forEach(function (move) {
          var moving_value = move.getAttribute("data-value");
          var x = (e.clientX * moving_value) / 70;
          var y = (e.clientY * moving_value) / 70;

          move.style.transform = `translateX(${-x}px) translateY(${y}px)`;
        });
    });
    // console.log(cursorDot)
  });

  return (
    <main className={styles.main}>
      <div className={styles.cursorDot}></div>
      <div className={styles.cursorOutline}></div>
      <div className={styles.mainTop}>
        <div className={styles.mainLeft}>
          <h1 className={`${styles.mainTitle} ${styles.textUpper}`}>
            სტომატოლოგიური ცენტრი{" "}
            <span className={`${styles.mainSpan} `}>მედიკო</span>
          </h1>
          <p className={styles.mainText}>
            შემთხვევითად გენერირებული ტექსტი ეხმარება დიზაინერებს და
            ტიპოგრაფიული ნაწარმის შემქმნელებს, რეალურთან მაქსიმალურად.
          </p>
          <button
            className={`${styles.mainBtn} ${styles.textUpper} ${styles.object}`}
          >
            გაწევრიანდი
          </button>
        </div>
        <div className={styles.mainRight}>
          <div className={styles.mainRightTop}>
            <div className={styles.mainInfoFlex}>
              <div
                data-value="3"
                className={`${styles.mainInfoFlexTop} ${styles.object}`}
              >
                <p>500+ მეტი პაციენტი</p>
              </div>
            </div>
            <Image className={styles.mainImg} src={girl} alt="girl" />
          </div>
        </div>
      </div>
    </main>
  );
}
