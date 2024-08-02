import express, { ErrorRequestHandler } from "express";
import { app as formRouter } from "./Route/form.route";
import { ZodError } from "zod";

export const app = express();

app.use(express.json());

// routes
app.use("/form", formRouter);

app.use((req, res) => {
    res.status(404).send({ message: "Not Found" });
});

const errorHandler: ErrorRequestHandler = (err, req, res, next) => {
    if (err instanceof ZodError)
        return res.status(422).send({ message: err.message });
    res.status(500);
};

app.use(errorHandler);
