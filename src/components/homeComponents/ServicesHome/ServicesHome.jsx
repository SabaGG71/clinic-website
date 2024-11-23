"use client";
import styles from './ServicesHome.module.scss';
import Image from 'next/image';
import { useEffect } from 'react';
import tooth from '../../../../public/tooth.png';
import toothBlush from '../../../../public/teeth-blush.svg';
import toothFilling from '../../../../public/tooth-filling.svg';
import operation from '../../../../public/operation.svg';
import mouth from '../../../../public/mouth.svg';
import slider from '../../../../public/slider.svg';
import Link from 'next/link';

    const servicesBox = [
        {
            serviceBoxClass1: styles.serviceBoxFirst,
            href: '/services/კოსმეტიკა',
            img1Src: tooth,
            img1Alt: "tooth-svg",
            imgClass: styles.toothImage,
            dataValue: "5",
            img2Src: toothBlush,
            img2Alt: "teethBlush-svg",
            img2class: styles.teethBlush,
            h4: "კოსმეტიკა",
            p: "გენერატორით შექმნილი ტექსტის გამოყენება, რადგან უბრალოდ „ტექსტი ტექსტი ტექსტი",
        },
        {
            serviceBoxClass1: styles.serviceBoxSecond,
            href: '/services/მკურნალობა',
            img1Src: tooth,
            img1Alt: "tooth-svg",
            imgClass: styles.toothImage,
            dataValue: "-5",
            img2Src: mouth,
            img2Alt: "teethBlush-svg",
            img2class: styles.mouth,
            h4: "მკურნალობა",
            p: "გენერატორით შექმნილი ტექსტის გამოყენება, რადგან უბრალოდ „ტექსტი ტექსტი ტექსტი",
        },
        {
            serviceBoxClass1: styles.serviceBoxThird,
            href: '/services/კბილისოპერაცია',
            img1Src: tooth,
            img1Alt: "tooth-svg",
            imgClass: styles.toothImage,
            dataValue: "3",
            img2Src: operation,
            img2Alt: "teethBlush-svg",
            img2class: styles.operation,
            h4: "კბილის ოპერაცია",
            p: "გენერატორით შექმნილი ტექსტის გამოყენება, რადგან უბრალოდ „ტექსტი ტექსტი ტექსტი",
        },
        {
            serviceBoxClass1: styles.serviceBoxFourth,
            href: "/services/კბილისგათეთრება",
            img1Src: tooth,
            img1Alt: "tooth-svg",
            imgClass: styles.toothImage,
            dataValue: "-3",
            img2Src: toothFilling,
            img2Alt: "teethBlush-svg",
            img2class: styles.toothFilling,
            h4: "კბილის გათეთრება",
            p: "გენერატორით შექმნილი ტექსტის გამოყენება, რადგან უბრალოდ „ტექსტი ტექსტი ტექსტი",
        },
    ]

const ServicesHome = () => {

    useEffect(() => { 
        document.addEventListener("mousemove", parallax);
        
      })
      function parallax(e) {
        document.querySelectorAll(".ServicesHome_object__JqZ5g").forEach(function(move){
          var moving_value = move.getAttribute("data-value")
          var x = (e.clientX * moving_value) / 250;
          var y = (e.clientY * moving_value) / 250;
    
          move.style.transform = `translateX(${-x}px) translateY(${y}px)`;
        })
      }

    return (
         <section className={styles.serviceInfo}>
            <div className={styles.serviceInfoTop}> 
                <div className={styles.serviceBoxLeft}>
                    <p className={`${styles.serviceInfoText} ${styles.textUpper}`}>ჩვენ ვზრუნავთ თქვენს ჯანმრთელობაზე</p>
                    <h3 className={`${styles.serviceInfoTitle} ${styles.textUpper}`}>ჩვენი სერვისები</h3>
                </div>
                <div className={styles.serviceBoxRight}>
                    <a href="#" className={`${styles.serviceInfoBtn} ${styles.textUpper}`}>
                        ყველა სერვისი
                    </a> 
                </div>
            </div>
            <div className={styles.serviceTopBox}> 
                {servicesBox.map((box, index) => (
                <Link href={box.href} key={index} className={`${styles.serviceBox} ${box.serviceBoxClass1}`}> 
                    <div className={styles.serviceFlexLeft}> 
                        <Image src={box.img1Src} alt='tooth-svg' className={box.imgClass}/>
                    </div>
                    <div className={styles.serviceFlexRight}>
                        <div data-value={box.dataValue} className={`${styles.object}`}>
                        <Image src={box.img2Src} className={` ${styles.allImageMove} ${box.img2class}`}/>
                        </div>
                        <h4 className={`${styles.serviceFlexTitle} ${styles.textUpper}`}>{box.h4}</h4>
                        <p className={styles.serviceFlexText}>
                        {box.p}
                        </p>
                    </div> 
                    <Image src={slider} className={styles.sliderImg}/>
                </Link>
                ))}
            </div>
            
         </section>
    )
}
export default ServicesHome;