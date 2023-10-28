import IRecipe from "../recipe/Recipe.model";

export default interface IUser {
    id: string;
    name: string;
    email: string;
    locationTags: string[];
    socials: string[];
    ownRecipes: IRecipe[];
    favRecipes: IRecipe[];
    cookedRecipes: IRecipe[];
    wantedRecipes: IRecipe[];
    language: string;
    folovers: IUser[];
    // партнерка
}
