import BasePage from "pages/base/BasePage";

type Props = {};

export default function Recipes(props: Props) {
    return (
        <>
            <BasePage sidebar={<>Sidebar</>} content={<>Content</>}></BasePage>
        </>
    );
}
