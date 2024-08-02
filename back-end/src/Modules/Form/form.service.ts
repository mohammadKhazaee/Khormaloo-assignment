import { CreateFormDto } from "../../Dto/formDto";
import { FormRepository } from "./form.repository";

export class FormService {
    private formRepo: FormRepository;
    constructor() {
        this.formRepo = new FormRepository();
    }

    // createForm(dto: CreateFormDto): Promise<void> {
    //
    // }
}
