"use client";

import { useEffect, useState } from "react";
// import tariner1 from "../../../../public/trainer1.png";
// import vectorLeft from "../../../../public/vectorLeft.png";
// import vectorRight from "../../../../public/vectorRight.png";
import doctor1 from "../../../../public/doctor1.jpg";
import doctor2 from "../../../../public/doctor2.jpg";
import pointer from "../../../../public/pointer.svg";
import styles from "./DotctorsHome.module.scss";
import Image from "next/image";

const DoctorsHome = () => {
  // const [activeIndex, setActiveIndex] = useState(0);
  // const [marked1, setMarked1] = useState(true);
  // const [marked2, setMarked2] = useState(false);
  // const [marked3, setMarked3] = useState(false);
  // const [marked4, setMarked4] = useState(false);
  // const [marked5, setMarked5] = useState(false);

  const doctors = [
    {
      id: 1,
      icon: doctor1,
      text: "შემთხვევითად გენერირებული ტექსტი ეხმარება ",
      textClassName: "doctor1",
      title: "ექიმი 1",
      titleClassName: "title1",
      jobDescription: "5+ წლიანი გამოცდილება",
      className: "doc1",
    },
    {
      id: 2,
      icon: doctor2,
      text: "შემთხვევითად გენერირებული ტექსტი ეხმარება",
      textClassName: "doctor2",
      title: "ექიმი 2",
      titleClassName: "title2",
      jobDescription: "5+ წლიანი გამოცდილება",
      className: "doc2",
    },
    {
      id: 3,
      icon: doctor1,
      text: "შემთხვევითად გენერირებული ტექსტი ეხმარება",
      textClassName: "doctor1",
      title: "ექიმი 3",
      titleClassName: "title1",
      jobDescription: "5+ წლიანი გამოცდილება",
      className: "doc3",
    },
    {
      id: 4,
      icon: doctor1,
      text: "შემთხვევითად გენერირებული ტექსტი ეხმარება",
      textClassName: "doctor1",
      title: "ექიმი 4",
      titleClassName: "title1",
      jobDescription: "5+ წლიანი გამოცდილება",
      className: "doc4",
    },
    // {
    //   id: 5,
    //   icon: doctor1,
    //   text: "eqimebi arian chveni megobrebi",
    //   textClassName: "doctor1",
    //   title: "ექიმი 5",
    //   titleClassName: "title1",
    //   jobDescription: "es eqimi mushoabda harvardshi 10 wlis mandzilze",
    //   className: "trainer-box-1",
    //   nameClassName: "doc5",
    // },
  ];

  // const changeDoctor1 = () => {
  //   setActiveIndex(0)
  //   setMarked1(true)
  //   setMarked2(false)
  //   setMarked3(false)
  //   setMarked4(false)
  //   setMarked5(false)
  // }
  // const changeDoctor2 = () => {
  //   setActiveIndex(1)
  //   setMarked1(false)
  //   setMarked2(true)
  //   setMarked3(false)
  //   setMarked4(false)
  //   setMarked5(false)
  // }
  // const changeDoctor3 = () => {
  //   setActiveIndex(2)
  //   setMarked1(false)
  //   setMarked2(false)
  //   setMarked3(true)
  //   setMarked4(false)
  //   setMarked5(false)
  // }
  // const changeDoctor4 = () => {
  //   setActiveIndex(3)
  //   setMarked1(false)
  //   setMarked2(false)
  //   setMarked3(false)
  //   setMarked4(true)
  //   setMarked5(false)
  // }
  // const changeDoctor5 = () => {
  //   setActiveIndex(4)
  //   setMarked1(false)
  //   setMarked2(false)
  //   setMarked3(false)
  //   setMarked4(false)
  //   setMarked5(true)
  // }

  // useEffect(() => {
  //   if (activeIndex === 0) {
  //     setMarked1(true)
  //     setMarked2(false)
  //     setMarked3(false)
  //     setMarked4(false)
  //     setMarked5(false)
  //   }
  //   if (activeIndex === 1) {
  //     setMarked1(false)
  //     setMarked2(true)
  //     setMarked3(false)
  //     setMarked4(false)
  //     setMarked5(false)
  //   }
  //   if (activeIndex === 2) {
  //     setMarked1(false)
  //     setMarked2(false)
  //     setMarked3(true)
  //     setMarked4(false)
  //     setMarked5(false)
  //   }
  //   if (activeIndex === 3) {
  //     setMarked1(false)
  //     setMarked2(false)
  //     setMarked3(false)
  //     setMarked4(true)
  //     setMarked5(false)
  //   }
  //   if (activeIndex === 4) {
  //     setMarked1(false)
  //     setMarked2(false)
  //     setMarked3(false)
  //     setMarked4(false)
  //     setMarked5(true)
  //   }

  //   const intervalId = setInterval(() => {
  //     setActiveIndex((prevIndex) => (prevIndex + 1) % doctors.length);
  //   }, 20000);

  //   return () => clearInterval(intervalId);
  // }, [activeIndex]);

  return (
    <div className={styles.mainCarousel}>
      <div className={styles.mainCarouselLeft}>
        <h5 className={styles.mainCarouselTitle}>პროფესინალი ექიმები</h5>
        <p className={styles.mainCarouselText}>
          შემთხვევითად გენერირებული ტექსტი ეხმარება დიზაინერებს და ტიპოგრაფიული
          ნაწარმის შემქმნელებს, რეალურთან მაქსიმალურად მიახლოებული შაბლონი
          წარუდგინონ
        </p>
        <button className={styles.mainCarouselBtn}>ყველა ექიმი</button>
      </div>
      <div className={styles.mainCarouselRight}>
        {doctors.map((doctor, index) => (
          <div key={doctor.id} className={`${styles.carouselItem}`}>
            <div className={styles.carouselFlex}>
              <Image
                className={styles.doctorIcon}
                src={doctor.icon}
                alt="trainer-icon"
              />
              {/* <div className={styles.progressBar}></div>
                <div className={styles.dotFlex}>
                  <div onClick={changeDoctor1} className={`${styles.vector} ${styles.vector1} ${marked1 ? styles.activeDot : ""}`}></div>
                  <div onClick={changeDoctor2} className={`${styles.vector} ${styles.vector2} ${marked2 ? styles.activeDot : ""}`}></div>
                  <div onClick={changeDoctor3} className={`${styles.vector} ${styles.vector3} ${marked3 ? styles.activeDot : ""}`}></div>
                  <div onClick={changeDoctor4} className={`${styles.vector} ${styles.vector4} ${marked4 ? styles.activeDot : ""}`}></div>
                  <div onClick={changeDoctor5} className={`${styles.vector} ${styles.vector5} ${marked5 ? styles.activeDot : ""}`}></div>
                </div> */}
            </div>
            <div className={styles.carouselRight}>
              <div className={styles.carouselFlexIntro}>
                <p className={`${styles.titleDoctor} ${styles.textUpper}`}>
                  {doctor.title}
                </p>
                <Image
                  src={pointer}
                  alt="pointer-svg"
                  className={styles.pointer}
                />
              </div>
              <p className={`${styles.description} ${styles.textUpper}`}>
                {doctor.jobDescription}
              </p>
              <p className={`${styles.textClassName}`}>{doctor.text}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DoctorsHome;
