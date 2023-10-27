import styles from "./styles.module.scss";
import NavButton from "shared/UI/nav-button/NavButton";

type Props = { auth: boolean; shoppingListNotEmpty: boolean };

export default function Header({ auth, shoppingListNotEmpty }: Props) {
    return (
        <header className={styles.header}>
            <div className={styles.title}>Cooking Club</div>
            <div className={styles.navigation}>
                <NavButton to={"/"}>Recipes</NavButton>

                {auth && shoppingListNotEmpty ? (
                    <NavButton to={"/shopping-list"}>Shopping List</NavButton>
                ) : null}
                {auth ? (
                    <>
                        <NavButton to={"/profile"}>Profile</NavButton>
                        <NavButton to={"/logout"}>Log Out</NavButton>
                    </>
                ) : (
                    <>
                        <NavButton to={"/register"}>Sign Up</NavButton>
                        <NavButton to={"/login"}>Log In</NavButton>
                    </>
                )}
            </div>
        </header>
    );
}
