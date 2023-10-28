import Layout from "app/layout/Layout";
import ProfileSidebar from "widgets/profile-sidebar/ProfileSidebar";

type Props = {};

export default function Profile(props: Props) {
    return (
        <>
            <Layout
                sidebar={<ProfileSidebar />}
                content={<>ProfileContent</>}
            />
        </>
    );
}
