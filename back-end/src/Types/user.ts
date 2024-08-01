import { Awnsersheet } from "./awnsersheet";
import { Form } from "./form";

export interface User {
    username: string,
    forms: Form[],
    awnserSheets: Awnsersheet[],
}