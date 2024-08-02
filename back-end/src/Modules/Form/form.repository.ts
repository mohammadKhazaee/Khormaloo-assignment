import { Repository } from "typeorm";
import { FormEntity } from "../../DB-Entities/form.entity";
import { AppDataSource } from "../../Utility/data-source";
import { Form } from "../../Types/form";

export class FormRepository {
    private formRepo: Repository<FormEntity>
    constructor() {
        this.formRepo = AppDataSource.getRepository(FormEntity)
    }
    public getuniqueform(id: number): Promise<Form | null> {
        const data = this.formRepo.findOneBy({ id })
        return data
    }

} 