// /src/index.ts

// Test output to see if compiled correctly
import testString from "./module";
console.log(testString);

// import environment variables
import * as dotenv from "dotenv";
dotenv.config();
const port = process.env.PORT;

import express from "express";
const Router = express.Router();
const app = express();

app.get('/', (req, res) => res.send("This is API for videokanava.fi"));


app.listen(port, () => {
    console.log(`[server]: Server is running at ${process.env.HOST}:${port}`);
});