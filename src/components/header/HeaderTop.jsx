import Image from "next/image";
import styles from "./Header.module.scss";

export const HeaderTop = () => {
    return (
        <div className={styles.mainContainer}>
            <div className={styles.topContainer}>
            <div className={styles.leftContainer}>
                <div className={styles.item}>
                    {/* <Image /> */}
                    <p className={styles.itemText}>90919 ბუხაიძეს ქუჩა #20</p>
                </div>
                <div className={styles.item}>
                    {/* <Image /> */}
                    <p className={styles.itemText}>dentistClinic@gmail.com</p>
                </div>
            </div>
            <div className={styles.rightContainer}>
                socialuri iconebi
                {/* <Image />
                <Image />
                <Image /> */}
            </div>
            </div>
        </div>
    );
};