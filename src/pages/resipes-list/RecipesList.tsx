import BasePage from "pages/base/BasePage";
import RecipesSidebar from "widgets/recipes-sidebar/RecipesSidebar";

type Props = {};

export default function Recipes(props: Props) {
    return (
        <>
            <BasePage
                sidebar={<RecipesSidebar />}
                content={<>Content</>}></BasePage>
        </>
    );
}
