import { Url } from "url";

export default interface IOperation {
    before: IOperation;
    after: IOperation;
    children: IOperation[];
    description: string;
    image?: Url;
    timer?: number;
    timerout?: number;
    doneFlag: boolean;
}
