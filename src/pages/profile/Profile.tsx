import BasePage from "pages/base/BasePage";

type Props = {};

export default function Profile(props: Props) {
    return (
        <>
            <BasePage sidebar={<>Sidebar</>} content={<>Content</>}></BasePage>
        </>
    );
}
