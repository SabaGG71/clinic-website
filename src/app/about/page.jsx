"use client";
import styles from "./page.module.scss";
import aboutTeeth from "../../../public/aboutteeth.png";
import Image from "next/image";
import heartSvg from "../../../public/heart.svg";
import doubleHeart from "../../../public/doubleHeart.svg";
import aboutDoctor from "../../../public/aboutDoctor.svg";
import asterisc from "../../../public/asterisc.svg";
import peels from "../../../public/peels.svg";
import aboutImage from "../../../public/aboutSvg.jpg";
import { useState, useEffect } from "react";
import Counter from "@/components/countingAnimation/Counter";
import Faq from "@/components/homeComponents/faq/Faq";

export default function About() {
  useEffect(() => {
    document.addEventListener("mousemove", function (e) {
      document
        .querySelectorAll(".page_circler__I_YRf")
        .forEach(function (move) {
          var moving_value = move.getAttribute("data-value");
          var x = (e.clientX * moving_value) / 70;
          var y = (e.clientY * moving_value) / 70;

          move.style.transform = `translateX(${-x}px) translateY(${y}px)`;
        });
    });
  });

  return (
    <main className={styles.about}>
      <div className={styles.aboutMain}>
        <div
          data-value="5"
          className={`${styles.circle1} ${styles.circler}`}
        ></div>
        <div
          data-value="3"
          className={`${styles.circle2} ${styles.circler}`}
        ></div>
        <div className={styles.aboutTop}>
          <h1 className={styles.aboutTitle}>
            <Image
              className={styles.teethImage}
              src={aboutTeeth}
              alt="about-teeth"
            />{" "}
            ჩვენს შესახებ
          </h1>
          <p className={styles.aboutText}>
            ჩვენთვის მნიშვნელოვანია თქვენი ჯანმრთელობა, სწორედ ამიტომ მოდით
            ჩვენს კლინიკაში.
          </p>
        </div>
      </div>

      <div className={styles.aboutInfo}>
        <div className={styles.aboutFlexInfo}>
          <div className={styles.aboutInfoTop}>
            <div className={styles.aboutInfoBox}>
              <Image src={heartSvg} alt="heart-svg" />
              <p className={styles.aboutInfoTitle}>პასუხისმგებლობა</p>
              <p className={styles.aboutInfoText}>
                შემთხვევითად გენერირებული ტექსტი ეხმარება დიზაინერებს და
                ტიპოგრაფიული ნაწარმის შემქმნელებს, რეალურთან მაქსიმალურად
                მიახლოებული
              </p>
            </div>
            <div className={styles.aboutInfoBox}>
              <Image src={doubleHeart} alt="doubleheart-svg" />
              <p className={styles.aboutInfoTitle}>ნდობა</p>
              <p className={styles.aboutInfoText}>
                შემთხვევითად გენერირებული ტექსტი ეხმარება დიზაინერებს და
                ტიპოგრაფიული ნაწარმის შემქმნელებს, რეალურთან მაქსიმალურად
                მიახლოებული
              </p>
            </div>
            <div className={styles.aboutInfoBox}>
              <Image src={asterisc} alt="asterisc-svg" />
              <p className={styles.aboutInfoTitle}>შეთანხმება</p>
              <p className={styles.aboutInfoText}>
                შემთხვევითად გენერირებული ტექსტი ეხმარება დიზაინერებს და
                ტიპოგრაფიული ნაწარმის შემქმნელებს, რეალურთან მაქსიმალურად
                მიახლოებული
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.aboutDoctor}>
        <div className={styles.aboutDoctorTop}>
          <div className={styles.aboutParent}>
            <Image
              className={styles.aboutSvg}
              src={aboutImage}
              alt="about-img"
            />
          </div>
          <div className={styles.aboutParentFlex}>
            <Image
              className={styles.aboutSvgAbsolute}
              src={aboutDoctor}
              alt="aboutDoctor"
            />
            <h2 className={styles.aboutMainTitle}>
              ჩვენი გამოცდილი{" "}
              <span className={styles.spanAboutDoctor}>ექიმები</span> ყოველთვის
              მზად არიან დახმარებისთვის!
            </h2>
            <p className={styles.aboutMainText}>
              შემთხვევითად გენერირებული ტექსტი ეხმარება დიზაინერებს და
              ტიპოგრაფიული ნაწარმის შემქმნელებს, რეალურთან მაქსიმალურად
              მიახლოებული შაბლონი წარუდგინონ შემფასებელს. ხშირადაა შემთხვევა,
              როდესაც დიზაინის შესრულებისას საჩვენებელია.
            </p>
            <button className={styles.aboutMainBtn}>დაჯავშნა</button>
          </div>
        </div>
      </div>

      <div className={styles.client}>
        <Image src={peels} className={styles.peels} />
        <div className={styles.clientTop}>
          <div className={styles.clientBox}>
            <p className={styles.clientTitle}>
              <Counter endValue={235} duration={1500} />+
            </p>
            <p className={styles.clientMainTitle}>ბედნიერი მომხმარებელი</p>
            <p className={styles.clientText}>
              გამეორებადი სიტყვების ჩაყრა, ხელოვნურ ვიზუალურ სიმეტრიას ქმნის და
              არაბუნებრივად
            </p>
          </div>
          <div className={styles.clientBox}>
            <p className={styles.clientTitle}>
              <Counter endValue={15} duration={1500} />+
            </p>
            <p className={styles.clientMainTitle}>პროფესიონალი ექიმი</p>
            <p className={styles.clientText}>
              გამეორებადი სიტყვების ჩაყრა, ხელოვნურ ვიზუალურ სიმეტრიას ქმნის და
              არაბუნებრივად
            </p>
          </div>
          <div className={styles.clientBox}>
            <p className={`${styles.clientTitle} ${styles.clientSpan}`}>
              <Counter endValue={4} duration={1500} />+
            </p>
            <p className={styles.clientMainTitle}>პარტნიორი</p>
            <p className={styles.clientText}>
              გამეორებადი სიტყვების ჩაყრა, ხელოვნურ ვიზუალურ სიმეტრიას ქმნის და
              არაბუნებრივად
            </p>
          </div>
        </div>
        <Image src={peels} className={`${styles.peels} ${styles.peels2}`} />
      </div>

      <Faq />
    </main>
  );
}
