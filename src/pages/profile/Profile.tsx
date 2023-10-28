import Layout from "pages/layout/Layout";

type Props = {};

export default function Profile(props: Props) {
    return (
        <>
            <Layout
                sidebar={<>ProfileSidebar</>}
                content={<>ProfileContent</>}
            />
        </>
    );
}
