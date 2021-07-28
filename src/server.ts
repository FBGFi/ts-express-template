// /src/index.ts

// import environment variables
import * as dotenv from "dotenv";
dotenv.config();
const port = process.env.PORT;

// import express
import express from "express";
const app = express();

// import routes
import route from "./routes/route"

// middleware
app.use(express.json());
app.use('/route', route);

// root functions and starting the server
app.get('/', (req: express.Request, res: express.Response) => {
    res.send("This is a template for Node.JS/Express API with TypeScript")
});

app.listen(port, () => {
    console.log(`[server]: Server is running at ${process.env.HOST}:${port}`);
});