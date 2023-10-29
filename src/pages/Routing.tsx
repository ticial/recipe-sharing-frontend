import { lazy } from "react";
import { Routes, Route, Navigate } from "react-router-dom";

const RecipesListPage = lazy(() => import("./resipes-list/RecipesListPage"));
const RecipeDetailsPage = lazy(
    () => import("./recipe-details/RecipeDetailsPage")
);
const ProfilePage = lazy(() => import("./profile/ProfilePage"));
const ShoppingListPage = lazy(() => import("./shopping-list/ShoppingListPage"));

export const Routing = () => {
    return (
        <Routes>
            <Route path="/" element={<RecipesListPage />} />
            <Route path="/recipe/:recipeId" element={<RecipeDetailsPage />} />
            <Route path="/shopping-list" element={<ShoppingListPage />} />
            <Route path="/profile" element={<ProfilePage />} />
            <Route path="/*" element={<Navigate to="/" />} />
        </Routes>
    );
};
