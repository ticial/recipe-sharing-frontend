import IMedia from "shared/UI/media/Media";
import IRecipe from "../recipe/Recipe.model";
import IUser from "../user/User.model";

export default interface IComment {
    id: string;
    author: IUser;
    recipe: IRecipe;
    text: string;
    media?: IMedia;
    date: Date;
}
