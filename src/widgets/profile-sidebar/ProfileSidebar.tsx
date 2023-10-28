import SidebarButton from "shared/UI/sidebar-button/SidebarButton";

type Props = {};

export default function ProfileSidebar(props: Props) {
    return (
        <>
            <SidebarButton>Notifications</SidebarButton>
            <SidebarButton>Edit profile</SidebarButton>
            <SidebarButton>Subscriptions</SidebarButton>
            <SidebarButton>Followers</SidebarButton>
            <SidebarButton>Logout</SidebarButton>
        </>
    );
}
