import styles from "./Footer.module.scss";
import Link from "next/link";
import Image from "next/image";
import logo from "../../../public/logo.png";
import clock from "../../../public/clock.svg";
import phone from "../../../public/phone.svg";
import link from "../../../public/link.svg";
import contactImg from "../../../public/contactImg.svg";
export const FooterMain = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerTop}>
        <div className={styles.footerLeft}>
          <h6 className={`${styles.footerLeftTitle} ${styles.footerTitle}`}>
            <Image src={logo} alt="medico" className={styles.footerLogo} />
            <p className={styles.logoFooterText}>Medico</p>
          </h6>

          <p className={styles.footerLeftText}>
            შემთხვევითად გენერირებული ტექსტი ეხმარება დიზაინერებს და
            ტიპოგრაფიული.
          </p>
          <button className={styles.footerLeftBtn}>დაჯავშნა</button>
        </div>
        <div className={styles.footerMiddle}>
          <h6 className={`${styles.footerMiddleTitle} ${styles.footerTitle}`}>
            <Image src={link} alt="link-svg" className={styles.footerImg} />{" "}
            ლინკები
          </h6>

          <ul className={styles.footerUl}>
            <div className={styles.footerUlLeft}>
              <li className={styles.footerLi}>
                <Link href="#" className={styles.footerA}>
                  - ჩვენს შესახებ
                </Link>
              </li>
              <li className={styles.footerLi}>
                <Link href="#" className={styles.footerA}>
                  - სიახლეები
                </Link>
              </li>
              <li className={styles.footerLi}>
                <Link href="#" className={styles.footerA}>
                  - სერვისები
                </Link>
              </li>
              <li className={styles.footerLi}>
                <Link href="#" className={styles.footerA}>
                  - ექიმები
                </Link>
              </li>
              <li className={styles.footerLi}>
                <Link href="#" className={styles.footerA}>
                  - დაჯავშნა
                </Link>
              </li>
            </div>
            <div className={styles.footerUlRight}>
              <li className={styles.footerLi}>
                <Link href="#" className={styles.footerA}>
                  - ლოკაცია
                </Link>
              </li>
              <li className={styles.footerLi}>
                <Link href="#" className={styles.footerA}>
                  - სიახლეები
                </Link>
              </li>
            </div>
          </ul>
        </div>
        <div className={styles.footerRight}>
          <h6 className={`${styles.footerRightTitle} ${styles.footerTitle}`}>
            <Image
              src={contactImg}
              alt="link-svg"
              className={`${styles.footerImg} ${styles.footerImg2}`}
            />
            კონტაქტი
          </h6>

          <div className={styles.contactRightTop}>
            <div className={styles.contactRightFlex}>
              <div className={styles.contactRightMenu}>
                <Image src={clock} alt="clock-svg" />
              </div>
              <div className={styles.contactRightMenuLeft}>
                <p className={styles.hours}>სამუშაო საათები</p>
                <p className={styles.contactRightText}>
                  ორშაბათი - პარასკევი: 8:00 - 5:30
                </p>
                <p className={styles.contactRightText}>
                  შაბათი - კვირა:{" "}
                  <span className={styles.contactSpan}>დაკეტილია</span>
                </p>
              </div>
            </div>
            <div
              className={`${styles.contactRightFlex2} ${styles.contactRightFlex}`}
            >
              <div className={styles.contactRightMenu}>
                <Image src={phone} alt="phone-svg" />
              </div>
              <div className={styles.contactRightMenuLeft}>
                <p className={styles.hours}>დაგვიკავშირდით</p>
                <p
                  className={`${styles.contactRightText} ${styles.contactRightText2}`}
                >
                  ტელ: <span className={styles.contactSpan}>1005-346-272</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.footerCreate}>
        <p>© Created by Saba Gachechiladze</p>
      </div>
    </footer>
  );
};
