// /src/routes/route/controller.ts
import express from "express";
const Controller = {
    get_route: (req: express.Request, res: express.Response) => {
        res.json("Hello from /route");
    }
};

export default Controller;