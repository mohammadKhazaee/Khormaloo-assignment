import { Answersheet } from "./answersheet";
import { Form } from "./form";

export interface User {
    username: string,
    forms?: Form[],
    awnserSheets?: Answersheet[],
}