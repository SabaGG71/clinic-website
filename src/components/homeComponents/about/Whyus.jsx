"use client";

import { useEffect } from "react";
import styles from "./Whyus.module.scss";
import Link from "next/link";
import Image from "next/image";
import heart from "../../../../public/heartIcon.svg";
import folder from "../../../../public/folder.svg";
import someImg from "../../../../public/someImg.svg";
export default function Whyus() {
  useEffect(() => {
    const hiddenDiv2 = document.querySelector(".Whyus_wrapperRight2__LyQNB");
    const hiddenDiv3 = document.querySelector(".Whyus_wrapperRight3__uhIFp");
    const showDiv2 = document.querySelector(".Whyus_wrappershow2__NVdF_");
    const showDiv3 = document.querySelector(".Whyus_wrappershow3__o3CEB");
    const firstDiv = document.querySelector(".Whyus_wrapperRight1__fnxSZ");
    const firstDivClick = document.querySelector(
      ".Whyus_backgroundWrapper__8QCSv"
    );

    firstDivClick.addEventListener("click", function () {
      showDiv2.style.backgroundColor = "transparent";
      firstDiv.style.display = "block";
      firstDivClick.style.backgroundColor = "#fff";
      showDiv3.style.background = "transparent";
      hiddenDiv2.style.display = "none";
      hiddenDiv3.style.display = "none";
    });
    showDiv2.addEventListener("click", function () {
      showDiv2.style.backgroundColor = "#fff";
      firstDivClick.style.background = "transparent";
      showDiv3.style.background = "transparent";
      firstDiv.style.display = "none";
      hiddenDiv2.style.display = "block";
      firstDivClick.style.boxShadow = "none";
      hiddenDiv3.style.display = "none";
    });
    showDiv3.addEventListener("click", function () {
      showDiv2.style.background = "transparent";
      firstDivClick.style.background = "transparent";
      showDiv3.style.backgroundColor = "#fff";
      firstDiv.style.display = "none";
      firstDivClick.style.boxShadow = "none";
      hiddenDiv2.style.display = "none";
      hiddenDiv3.style.display = "block";
    });
  });

  return (
    <section className={styles.wrapper}>
      <div className={styles.wrapperTop}>
        <div className={styles.wrapperLeft}>
          <div
            className={`${styles.wrapperLeftBox} ${styles.backgroundWrapper}`}
          >
            <Image src={heart} alt="heart-svg" className={styles.heartIcon} />
            <div className={styles.wrapperLeftFlex}>
              <p className={`${styles.wrapperTitle} ${styles.whiteWrapper}`}>
                10+ წლიანი გამოცდილება
              </p>
              <p className={`${styles.wrapperText} ${styles.whiteWrapper}`}>
                შემთხვევითად გენერირებული ტექსტი ეხმარება დიზაინერებს
              </p>
            </div>
          </div>
          <div
            className={`${styles.wrapperLeftBox} ${styles.underlinedWrapper} ${styles.wrappershow2}`}
          >
            <Image src={folder} alt="heart-svg" className={styles.heartIcon} />
            <div className={styles.wrapperLeftFlex}>
              <p className={styles.wrapperTitle}>10+ წლიანი გამოცდილება</p>
              <p className={styles.wrapperText}>
                შემთხვევითად გენერირებული ტექსტი ეხმარება დიზაინერებს
              </p>
            </div>
          </div>
          <div className={`${styles.wrapperLeftBox} ${styles.wrappershow3}`}>
            <Image src={someImg} alt="heart-svg" className={styles.heartIcon} />
            <div className={styles.wrapperLeftFlex}>
              <p className={styles.wrapperTitle}>10+ წლიანი გამოცდილება</p>
              <p className={styles.wrapperText}>
                შემთხვევითად გენერირებული ტექსტი ეხმარება დიზაინერებს
              </p>
            </div>
          </div>
        </div>
        <div className={styles.wrapperRight1}>
          <h2 className={`${styles.wrapperMainText} ${styles.textUpper}`}>
            პირველი ელემენტი გამოტანილია?
          </h2>
          <p className={styles.wrapperTextRight}>
            შემთხვევითად გენერირებული ტექსტი ეხმარება დიზაინერებს და
            ტიპოგრაფიული ნაწარმის შემქმნელებს, რეალურთან მაქსიმალურად.
          </p>
          <Link className={styles.wrapperBtn} href={"/about"}>
            მეტის გაგება
          </Link>
        </div>
        <div className={styles.wrapperRight2}>
          <h2 className={`${styles.wrapperMainText} ${styles.textUpper}`}>
            მეორე ელემენტი გამოტანილია?
          </h2>
          <p className={styles.wrapperTextRight}>
            შემთხვევითად გენერირებული ტექსტი ეხმარება დიზაინერებს და
            ტიპოგრაფიული ნაწარმის შემქმნელებს, რეალურთან მაქსიმალურად.
          </p>
          <Link className={styles.wrapperBtn} href={"/about"}>
            მეტის გაგება
          </Link>
        </div>
        <div className={styles.wrapperRight3}>
          <h2 className={`${styles.wrapperMainText} ${styles.textUpper}`}>
            მესამე ელემენტი გამოტანილია?
          </h2>
          <p className={styles.wrapperTextRight}>
            შემთხვევითად გენერირებული ტექსტი ეხმარება დიზაინერებს და
            ტიპოგრაფიული ნაწარმის შემქმნელებს, რეალურთან მაქსიმალურად.
          </p>
          <Link className={styles.wrapperBtn} href={"/about"}>
            მეტის გაგება
          </Link>
        </div>
      </div>
      <div className={styles.div}></div>
    </section>
  );
}
