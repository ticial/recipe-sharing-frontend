import BasePage from "pages/base/BasePage";

type Props = {};

export default function ShoppingList(props: Props) {
    return (
        <>
            <BasePage sidebar={<>Sidebar</>} content={<>Content</>}></BasePage>
        </>
    );
}
