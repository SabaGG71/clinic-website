import Link from "next/link"
import styles from "./Button.module.scss";

export const Button = ({name, url}) => {
    return (
        <Link className={styles.link} href={url}>
            <button className={styles.btn}>
                {name}
            </button>
        </Link>
    );
};