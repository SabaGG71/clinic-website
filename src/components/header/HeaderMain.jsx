"use client"
import { Button } from "../button/Button";
import Link from "next/link";
import styles from './Header.module.scss';
import logo from '../../../public/logo.png';
import Image from "next/image";
import badTooth from '../../../public/badTooth.png';
import cuteTeeth from '../../../public/cuteTeeth.png';
import toothBurger from '../../../public/toothBurger.png'; 
import caries from '../../../public/caries.png'; 
import brushing from '../../../public/brushing.png'; 
import floss from '../../../public/floss.png'; 
import chevronRight from '../../../public/chevronRight.svg'; 
import downArrow from '../../../public/downArrow.svg'; 
import { useEffect, useState } from "react";

export const HeaderMain = () => {

    const [burgerMenu, setBurgerMenu] = useState(false);
    const [headerBack, setHeaderBack] = useState(false);
    const [servicesActive, setServicesActive] = useState(false);

    const toggleMenu = (menu) => {
        setBurgerMenu(!menu);
    }

    const changeHeader = () => {
        if (window.scrollY >= 65) {
          setHeaderBack(true);
        } else {
          setHeaderBack(false);
        }
      };

      useEffect(() => {
        changeHeader();
        window.addEventListener("scroll", changeHeader);
        
      });

    const links = [
        {
            href: "/",
            name: "მთავარი",
            services: false,
        },
        {
            href: "/about",
            name: "ჩვენს შესახებ",
            services: false,
        },
        {
            href: "/contact",
            name: "კონტაქტი",
            services: false,
        },
        {
            href: "/",
            name: "სერვისები",
            services: true,
        },
        {
            href: "/",
            name: "ექიმები",
            services: false,
        },
    ];

    const toggleServices = () => {
        setServicesActive(!servicesActive)
    }

    return (
        <header className={headerBack ? styles.headerBack : styles.header}>
            <nav className={headerBack ? styles.navBack : styles.nav}>
                <div className={styles.navLeft}>
                    <Image src={logo} alt="logo" className={styles.logo}/>
                    <p className={styles.logoText}>Medico</p>
                </div> 
                    <div className={!burgerMenu ? styles.parentNav : headerBack ? styles.parentNavHeaderBack : styles.parentNavActive}>
                        <ul className={styles.middleNav}>
                        {links.map((link, index) => (
                            <li key={index}>
                                <Link href={link.href} className={styles.aLink}>{link.name}</Link>
                                <div className={styles.servicesDrop}></div>
                            </li>
                        ))}
                        </ul>
                        <div className={styles.rightNav}>
                              <p className={styles.telNumber}>ტელ: 1005-346-272</p>
                            <Button url={"/appointment"} name={"დაჯავშნა"}/>
                        </div> 
                    </div>
                    <>
                        <ul className={styles.middleNavComp}>
                        {links.map((link, index) => (
                            <li onClick={link.services ? toggleServices : null} key={index}>
                                {link.services ? (
                                    <div className={styles.serviceDropDown}>
                                    <div className={`${styles.serviceLi} ${styles.aLink}`}>{link.name}</div>
                                    {link.services ? <div className={styles.parentImg} onClick={link.services ? toggleServices: null}> <Image src={downArrow} alt="downArrow" className={styles.DropDownImg}/> </div> : ""}
                                    </div>
                                ) : (
                                    <Link href={link.href} className={styles.aLink}>{link.name}</Link>
                                )}
                            {
                              link.services & servicesActive ? 
                              <div className={styles.serviceDiv}>
                                    <div className={styles.serviceDivTop}>
                                       <div className={styles.childFlexDrop}>
                                       <div className={styles.serviceDivBox}>
                                            <Image src={cuteTeeth} className={styles.cuteTeeth} alt="cuteTeeth-svg"/>
                                            <p className={styles.dropdownText}>კბილის გათეთრება</p>
                                        </div> 
                                        <div className={styles.serviceDivBox}>
                                            <Image src={caries} className={styles.cuteTeeth} alt="caries-svg"/>
                                            <p className={styles.dropdownText}>ოპერაცია</p>
                                        </div> 
                                       </div>
                                       <div className={`${styles.childFlexDrop} ${styles.secondChildFlexDrop}`}>
                                       <div className={styles.serviceDivBox}>
                                            <Image src={brushing} className={styles.cuteTeeth} alt="brushing-svg"/>
                                            <p className={styles.dropdownText}>ბრეკეტები</p>
                                        </div> 
                                        <div className={styles.serviceDivBox}>
                                            <Image src={floss} className={styles.cuteTeeth} alt="floss-svg"/>
                                            <p className={styles.dropdownText}>ღრძილების</p>
                                        </div>  
                                       </div>
                                       
                                       <div className={`${styles.serviceDivBox} ${styles.serviceDivBoxAll}`}>
                                            <p className={styles.dropdownTextAll}>ყველას ნახვა <Image src={chevronRight} alt="chevronRight" className={styles.chevronRight}/></p>
                                        </div>  
                                    </div>
                              </div>
                               : 
                               ""
                            }
                            </li>
                        ))}
                        </ul>
                        <div className={styles.rightNavComp}>
                            <p className={styles.telNumber}>ტელ: 1005-346-272</p>
                            <Button url={"/"} name={"დაჯავშნა"}/>
                        </div> 
                    </>
                <div className={styles.parentTooth}>
                    {!burgerMenu ? (
                        <Image onClick={() => toggleMenu(burgerMenu)} className={styles.badTooth} src={badTooth} alt="badTooth-icon"/>
                    ): (
                        <Image onClick={() => toggleMenu(burgerMenu)} className={styles.tooth} src={toothBurger} alt="tooth-icon"/>
                    )}
                    
                </div>
            </nav>
        </header>
    )
}