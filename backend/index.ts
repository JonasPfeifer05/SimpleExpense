import express, { type Express } from "express";
import db from "./db.ts";
import type {Topic} from "./types/topic.ts";
import type {Subtopic} from "./types/subtopic.ts";
import cookieParser from "cookie-parser"
import {sha256} from "js-sha256";

const app: Express = express();
const port = 3001;



const apiRouter = express.Router();
apiRouter.get("/ping", (req, res) => {
    res.send("pong");
})
apiRouter.get("/topic", async (req, res) => {
    const result = await db.query<Topic>("SELECT id, name FROM topic ORDER BY name");
    res.send([...result]);
})
apiRouter.get("/subtopic", async (req, res) => {
    const result = await db.query<Subtopic>("SELECT id, name, icon FROM subtopic ORDER BY name");
    res.send([...result]);
})

apiRouter.get("/entry", async (req, res) => {
    const result = await db.query<Subtopic>(`
        SELECT e.amount,
               t.id   as topic_id,
               t.name as topic_name,
               s.id   as subtopic_id,
               s.name as subtopic_name,
               s.icon as subtopic_icon
        FROM entry e
                 JOIN topic t ON e.topic_id = t.id
                 JOIN subtopic s ON e.subtopic_id = s.id
        ORDER BY e.id DESC
    `);
    res.send([...result]);
})

app.use(cookieParser());
app.use((req, res, next) => {
    if (req.cookies.password === sha256("admin")) {
        next();
    } else {
        res.status(401).send("Not authorized")
    }
})
app.use("/api", apiRouter);

app.listen(port, () => {
    console.log(`[server]: Server is running at http://localhost:${port}`);
});