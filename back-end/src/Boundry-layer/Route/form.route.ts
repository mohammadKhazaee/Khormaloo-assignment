import { Router } from "express";

export const app = Router();

//  GET:/form
app.get("/");

//  GET:/form/:id
app.get("/:id");

//  POST:/form
app.post("/");

//  PUT:/form/:id
app.put("/:id");

//  POST:/form/:id/answer
app.post("/:id/answer");

//  GET:/form/:id/statistics
app.get("/:id/statistics");
