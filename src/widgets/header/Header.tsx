import { Link } from "react-router-dom";
import styles from "./styles.module.scss";
// import NavButton from "shared/UI/nav-button/NavButton";

type Props = { auth: boolean };

export default function Header({ auth }: Props) {
    return (
        <div className={styles.header}>
            <Link to={"/"} className={styles.title}>
                Coo<span className={styles.acsent}>K</span>ing Club
            </Link>
            {/* <div className={styles.navigation}>
                <NavButton to={"/"}>Recipes</NavButton>

                {auth && shoppingListNotEmpty ? (
                    <NavButton to={"/shopping-list"}>Shopping List</NavButton>
                ) : null}
                {auth ? (
                    <>
                        <NavButton to={"/profile"}>Profile</NavButton>
                    </>
                ) : (
                    <>
                        <NavButton to={"/login"}>Log In</NavButton>
                    </>
                )}
            </div> */}
        </div>
    );
}
