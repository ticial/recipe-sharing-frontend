import IComment from "../comment/Comment";
import IOperation from "../operation/Operation";
import IUser from "../user/User";
import IMedia from "../../shared/media/Media";

export default interface IRecipe {
    id: string;
    author: IUser;
    title: string;
    description: string;
    media?: IMedia;
    ingredients: string[];
    tags: string[];
    operations: IOperation[];
    comments: IComment[];
    rating: number;
    visibility: number; // "privat", "public", "subscription"
    // favs;
    // cooked
}
