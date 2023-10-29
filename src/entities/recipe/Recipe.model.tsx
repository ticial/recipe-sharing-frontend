import IComment from "../comment/Comment.model";
import IOperation from "../operation/Operation.model";
import IUser from "../user/User.model";
import IMedia from "shared/UI/media/Media";

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
