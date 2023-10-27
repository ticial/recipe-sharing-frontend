import { NavLink, To } from "react-router-dom";
import styles from "./styles.module.scss";
import { ReactNode } from "react";

type Props = { to: To; children: ReactNode };

export default function NavButton({ to, children }: Props) {
    return (
        <>
            <NavLink
                className={({ isActive }) =>
                    isActive ? styles.buttonActive : styles.button
                }
                to={to}>
                {children}
            </NavLink>
        </>
    );
}
