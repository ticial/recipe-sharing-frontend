import Layout from "app/layout/Layout";
import RecipesSidebar from "widgets/recipes-sidebar/RecipesSidebar";

type Props = {};

export default function Recipes(props: Props) {
    return (
        <>
            <Layout sidebar={<RecipesSidebar />} content={<>Content</>} />
        </>
    );
}
