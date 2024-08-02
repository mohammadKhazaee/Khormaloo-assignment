import { Repository } from "typeorm";
import { FormEntity } from "../../DB-Entities/form.entity";
import { AppDataSource } from "../../Utility/data-source";

export class FormRepository {
    private formRepo: Repository<FormEntity>;
    constructor() {
        this.formRepo = AppDataSource.getRepository(FormEntity);
    }

    // createForm() {}
}
