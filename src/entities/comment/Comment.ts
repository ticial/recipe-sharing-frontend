import IMedia from "../../shared/media/Media";
import IRecipe from "../recipe/Recipe";
import IUser from "../user/User";

export default interface IComment {
    id: string;
    author: IUser;
    recipe: IRecipe;
    text: string;
    media?: IMedia;
    date: Date;
}
