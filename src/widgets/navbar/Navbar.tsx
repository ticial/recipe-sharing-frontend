import styles from "./styles.module.scss";
import NavButton from "shared/UI/nav-button/NavButton";

type Props = { auth: boolean; shoppingListNotEmpty: boolean };

export default function Navbar({ auth, shoppingListNotEmpty }: Props) {
    return (
        <div className={styles.navigation}>
            <div className={styles.bg}></div>
            <div className={styles.group}>
                <NavButton to={"/"}>Recipes</NavButton>
                <NavButton to={"/authors"}>Authors</NavButton>
                <NavButton to={"/top"}>Top</NavButton>
            </div>

            <div className={styles.group}>
                {auth && shoppingListNotEmpty ? (
                    <NavButton to={"/shopping-list"}>Shopping List</NavButton>
                ) : null}
                {auth ? (
                    <NavButton to={"/profile"}>Profile</NavButton>
                ) : (
                    <NavButton to={"/login"}>Log In</NavButton>
                )}
            </div>
        </div>
    );
}
