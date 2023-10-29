import Layout from "app/layout/Layout";
import ShoppingListSidebar from "widgets/shopping-list-sidebar/ShopingListSidebar";

type Props = {};

export default function ShoppingListPage(props: Props) {
    return (
        <>
            <Layout
                sidebar={<ShoppingListSidebar />}
                content={<>ShoppingListContent</>}
            />
        </>
    );
}
