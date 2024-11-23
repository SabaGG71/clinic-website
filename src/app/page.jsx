"use client";
import { gsap } from 'gsap';

import IntroPage from "@/components/homeComponents/introPage/IntroPage";
import Whyus from "@/components/homeComponents/about/Whyus";
import ServicesHome from "@/components/homeComponents/ServicesHome/ServicesHome";
import DoctorsHome from "@/components/homeComponents/doctorsHome/DoctorsHome";
import Faq from "@/components/homeComponents/faq/Faq";
import { useEffect } from 'react';
import styles from './page.module.scss';


export default function Home() {
  // useEffect(() => {
  //   loadComplete(0)
  
  //   let loaded = gsap.to(".page_container__LLik5", {
  //         yPercent: -100,
  //         stagger: {
  //           each: .2
  //         },
  //         ease: "power4.out",
  //         duration: 0.5,
  //         paused : true
  //       });
    
  //   function loadComplete(duree) {
  //     setTimeout(function () {
  //       loaded.restart()
  //     }, duree);
  //   }
  // })
  return (
    <div>
        {/* <div className={styles.container}></div>
        <div className={`${styles.container} ${styles.cyan}`}></div>
        <div className={`${styles.container} ${styles.darkblue}`}></div> */}
        <IntroPage />
        <Whyus />
        <ServicesHome />
        <DoctorsHome />
        <Faq />
    </div>
  )
}
