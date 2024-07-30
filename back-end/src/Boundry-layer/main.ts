import { AppDataSource } from "../Utility/data-source";
import { app } from "./app";

declare global {
    namespace Express {
        interface Request {
            // user: User;
        }
    }
}

const PORT = 8080;

AppDataSource.initialize().then(() => {
    app.listen(process.env.PORT || PORT);
});
