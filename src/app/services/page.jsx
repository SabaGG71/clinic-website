"use client";
import Image from 'next/image';
import styles from "./page.module.scss"
import { useEffect } from 'react';
// import tooth from '../../../../public/tooth.png';
// import toothBlush from '../../../../public/teeth-blush.png';
// import toothFilling from '../../../../public/tooth-filling.png';
// import operation from '../../../../public/operation.png';
// import mouth from '../../../../public/mouth.png';
// import slider from '../../../../public/slider.svg';
import { servicesBox } from '../../components/homeComponents/ServicesHome/servicesData';
import Link from 'next/link';

    

const ServicesHome = () => {

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
                <Link href={`/services/${box.id}`} key={index} className={`${styles.serviceBox} ${box.serviceBoxClass1}`}> 
                    <div className={styles.serviceFlexLeft}> 
                        {/* <Image src={box.img1Src} alt='tooth-svg' className={box.imgClass}/> */}
                    </div>
                    <div className={styles.serviceFlexRight}>
                        <div data-value={box.dataValue} className={`${styles.object}`}>
                        {/* <Image src={box.img2Src} className={` ${styles.allImageMove} ${box.img2class}`}/> */}
                        </div>
                        <h4 className={`${styles.serviceFlexTitle} ${styles.textUpper}`}>{box.h4}</h4>
                        <p className={styles.serviceFlexText}>
                        {box.p}
                        </p>
                    </div> 
                    {/* <Image src={slider} className={styles.sliderImg}/> */}
                </Link>
                ))}
            </div>
            
         </section>
    )
}
export default ServicesHome;
