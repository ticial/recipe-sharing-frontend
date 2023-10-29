import { Card, Rate } from "antd";
import Meta from "antd/es/card/Meta";

type Props = {};

export default function RecipeCard(props: Props) {
    return (
        <>
            <Card
                hoverable
                style={{ border: "1px solid var(--color-light)" }}
                size="small"
                cover={
                    <img
                        alt="example"
                        src="http://www.sharerecipes.com/wp-content/uploads/2336099_Garlic-Sri-Racha-Prawns-1920x768.jpg"
                        style={{
                            height: 200,
                            width: 300,
                            margin: "0 auto",
                        }}
                    />
                }>
                <p>Garlic Sri Racha Prawns</p>
                <Rate allowHalf defaultValue={2.5} />
            </Card>
        </>
    );
}

//   width: calc(100%/var(--ytd-rich-grid-items-per-row) - var(--ytd-rich-grid-item-margin) - 0.01px);
