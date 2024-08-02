import { Router } from "express";
import { creatFormDto } from "../../Dto/formDto";
import { formService } from "../../Utility/dependency";

export const app = Router();

//  GET:/form
app.get("/");

//  GET:/form/:id
app.get("/:id");

//  POST:/form
app.post("/", async (req, res, next) => {
    const dto = creatFormDto.parse(req.body);

    // const createdForm = await formService.createForm(dto);

    res.status(201).send({ message: "form created" });
});

//  PUT:/form/:id
app.put("/:id");

//  POST:/form/:id/answer
app.post("/:id/answer");

//  GET:/form/:id/statistics
app.get("/:id/statistics");
