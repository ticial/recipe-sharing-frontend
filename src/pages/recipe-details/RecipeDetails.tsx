import Layout from "app/layout/Layout";
import { useParams } from "react-router-dom";

type Props = {};

export default function RecipeDetails(props: Props) {
    const params = useParams();
    return (
        <>
            <Layout
                sidebar={<>RecipeDetailsSidebar</>}
                content={<>{`Recipe ID "${params.id}"`}</>}
            />
        </>
    );
}
