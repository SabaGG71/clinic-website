import Image from "next/image";
import styles from "./Header.module.scss";
import whatsapp from '../../../public/whatsapp.svg'

export const HeaderTop = () => {
    return (
        <div className={styles.mainContainer}>
            <div className={styles.topContainer}>
            <div className={styles.leftContainer}>
                <div className={styles.item}>
                    <p className={`${styles.itemText} ${styles.itemTextFlex}`}> ბუხაიძეს ქუჩა #20</p>
                </div>
                <div className={styles.item}>
                    <p className={`${styles.itemText} ${styles.itemTextMargin}`}>DentistClinic@gmail.com</p>
                </div>
            </div>
            <div className={styles.rightContainer}> 
               <div className={styles.preHeaderFlex}>
               <Image src={whatsapp} alt="whatsapp-icon" className={styles.whatsappIcon}/>
                <p className={styles.preHeaderText}>whatsapp</p>
               </div>
            </div>
            </div>
        </div>
    );
};