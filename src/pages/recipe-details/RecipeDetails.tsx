import BasePage from "pages/base/BasePage";
import { useParams } from "react-router-dom";

type Props = {};

export default function RecipeDetails(props: Props) {
    const params = useParams();
    return (
        <>
            <BasePage
                sidebar={<>Sidebar</>}
                content={<>{`Recipe ID "${params.id}"`}</>}></BasePage>
        </>
    );
}
