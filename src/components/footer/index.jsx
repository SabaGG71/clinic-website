import { FooterMain } from "./FooterMain";
import { Map } from "./Map";
import styles from './Footer.module.scss';

export const Footer = () => {
    return (
        <div>
            <div className={styles.follow}>
                <div className={styles.footerMain}>
                <div className={`${styles.followTop} ${styles.followTopFirst}`}> 
                    <li className={styles.followTitle}>500+ პაციენტი</li>
                    <li className={styles.followTitle}>გამოცდილი ექიმები</li>
                    <li className={styles.followTitle}>უახლესი აპარატურა</li>
                    <li className={styles.followTitle}>მაღალი ხარისხი</li>
                    <li className={styles.followTitle}>სწრაფი მომსხურება</li> 
                </div> 
                </div>
                
            </div>
            <Map />
            <FooterMain />
        </div>
    )
}