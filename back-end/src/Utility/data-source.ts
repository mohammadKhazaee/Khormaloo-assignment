import { DataSource } from "typeorm";
import dotenv from "dotenv-flow";
import { UserEntity } from "../DB-Entities/user.entity";
import { FormEntity } from "../DB-Entities/form.entity";
import { FieldEntity } from "../DB-Entities/Field.entity";
<<<<<<< HEAD
import { AnswersEntity } from "../DB-Entities/asnwers.entity";
import { AnswerSheetEntity } from "../DB-Entities/answer-sheets.entity";
=======
import { AnswerEntity } from "../DB-Entities/asnwers.entity";
import { AnswerSheetEntity } from "../DB-Entities/answer-sheet.entity";
>>>>>>> feature/no-ref/add-types-and-getbyid-function

dotenv.config();
export const AppDataSource = new DataSource({
    type: "mysql",
    host: "localhost",
    port: 3306,
    database: process.env.DB_NAME,
    username: process.env.DB_USER,
    password: process.env.DB_PASS,
    synchronize: true,
<<<<<<< HEAD
    logging: false,
=======
    logging: true,
>>>>>>> feature/no-ref/add-types-and-getbyid-function
    entities: [
        UserEntity,
        FormEntity,
        FieldEntity,
<<<<<<< HEAD
        AnswersEntity,
=======
        AnswerEntity,
>>>>>>> feature/no-ref/add-types-and-getbyid-function
        AnswerSheetEntity,
    ],
    subscribers: [],
    migrations: [],
});
