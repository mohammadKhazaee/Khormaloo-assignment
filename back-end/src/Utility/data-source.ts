import { DataSource } from "typeorm";
import dotenv from "dotenv-flow";
import { UserEntity } from "../DB-Entities/user.entity";
import { FormEntity } from "../DB-Entities/form.entity";

dotenv.config();
export const AppDataSource = new DataSource({
    type: "mysql",
    host: "localhost",
    port: 3306,
    database: process.env.DB_NAME,
    username: process.env.DB_USER,
    password: process.env.DB_PASS,
    synchronize: true,
    logging: true,
    entities: [UserEntity, FormEntity],
    subscribers: [],
    migrations: [],
});
