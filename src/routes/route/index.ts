// /src/routes/route/index.ts
import express from "express";
import Controller from "./controller";
const Router = express.Router();

Router.get('/', Controller.get_route);

export default Router;