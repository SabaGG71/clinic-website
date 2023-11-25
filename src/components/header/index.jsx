import { HeaderMain } from "./HeaderMain";
import { HeaderTop } from "./HeaderTop";
import styles from './Header.module.scss';

export const Header = () => {
    return (
        <div className={styles.headerContainer}>
            <HeaderTop />
            <HeaderMain />
        </div>
    );
};