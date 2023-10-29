import Layout from "app/layout/Layout";
import RecipesContent from "widgets/recipes-content/RecipesContent";
import RecipesSidebar from "widgets/recipes-sidebar/RecipesSidebar";

type Props = {};

export default function RecipesPage(props: Props) {
    return (
        <>
            <Layout sidebar={<RecipesSidebar />} content={<RecipesContent />} />
        </>
    );
}
