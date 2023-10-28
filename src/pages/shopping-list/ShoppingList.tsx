import Layout from "pages/layout/Layout";

type Props = {};

export default function ShoppingList(props: Props) {
    return (
        <>
            <Layout
                sidebar={<>ShoppingListSidebar</>}
                content={<>ShoppingListContent</>}
            />
        </>
    );
}
