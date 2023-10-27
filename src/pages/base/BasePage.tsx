import * as React from "react";
import styles from "./styles.module.scss";
import Header from "widgets/header/Header";

type Props = { sidebar: React.ReactNode; content: React.ReactNode };

export default function BasePage(props: Props) {
    return (
        <div className={styles.wrapper}>
            <Header auth={true} shoppingListNotEmpty={true} />
            <div className={styles.main}>
                <div className={styles.sidebar}>{props.sidebar}</div>
                <div className={styles.content}>{props.content}</div>
            </div>
            <footer>Footer</footer>
        </div>
    );
}