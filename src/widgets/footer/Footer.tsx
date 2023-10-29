import { Link } from "react-router-dom";
import styles from "./styles.module.scss";
// import NavButton from "shared/UI/nav-button/NavButton";

type Props = {};

export default function Footer(props: Props) {
    return (
        <div className={styles.footer}>
            <div className={styles.bg}></div>
            <div className={styles.developedBy}>© 2023 MikulanDev</div>
        </div>
    );
}
