import { NavLink, To } from "react-router-dom";
import styles from "./styles.module.scss";
import { ReactNode } from "react";

type Props = { to: To; children: ReactNode };

export default function NavButton({ to, children }: Props) {
    return (
        <>
            <NavLink to={to}>
                {({ isActive }) => (
                    <button
                        className={
                            styles.button + " " + isActive ? styles.active : ""
                        }>
                        {children}
                    </button>
                )}
            </NavLink>
        </>
    );
}
