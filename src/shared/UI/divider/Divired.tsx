import styles from "./styles.module.scss";

const SideClasses = {
    left: styles.left,
    right: styles.right,
    up: styles.up,
    down: styles.down,
};

type Props = { side: "left" | "right" | "up" | "down" };

export default function Divider({ side }: Props) {
    return <div className={SideClasses[side]}></div>;
}
