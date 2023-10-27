import styles from "./styles.module.scss";
import { ReactNode } from "react";

type Props = { children: ReactNode };

export default function SidebarButton({ children }: Props) {
    return <div className={styles.button}>{children}</div>;
}
