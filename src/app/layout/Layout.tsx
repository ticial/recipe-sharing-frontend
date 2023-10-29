import * as React from "react";
import styles from "./styles.module.scss";
import Header from "widgets/header/Header";
import Navbar from "widgets/navbar/Navbar";
// import Divider from "shared/UI/divider/Divired";
import Footer from "widgets/footer/Footer";

type Props = { sidebar: React.ReactNode; content: React.ReactNode };

export default function Layout(props: Props) {
    return (
        <>
            <div className={styles.wrapper}>
                <Header auth={true} />
                <Navbar auth={true} shoppingListNotEmpty={true} />
                <div className={styles.main}>
                    <div className={styles.sidebar}>
                        <div className={styles.sidebarButtons}>
                            {props.sidebar}
                        </div>
                    </div>
                    {/* <Divider side="left" /> */}
                    <div className={styles.content}>{props.content}</div>
                </div>
                <Footer />
            </div>
        </>
    );
}
