import Layout from "pages/layout/Layout";
import ShoppingListSidebar from "widgets/shopping-list-sidebar/ShopingListSidebar";

type Props = {};

export default function ShoppingList(props: Props) {
    return (
        <>
            <Layout
                sidebar={<ShoppingListSidebar />}
                content={<>ShoppingListContent</>}
            />
        </>
    );
}
