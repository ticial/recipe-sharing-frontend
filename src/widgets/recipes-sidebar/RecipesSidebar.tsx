import SidebarButton from "shared/UI/sidebar-button/SidebarButton";

type Props = {};

export default function RecipesSidebar(props: Props) {
    return (
        <>
            <SidebarButton>All recipes</SidebarButton>
            <SidebarButton>My recipes</SidebarButton>
            <SidebarButton>Favorites</SidebarButton>
            <SidebarButton>Want to cook</SidebarButton>
            <SidebarButton>Done</SidebarButton>
        </>
    );
}
