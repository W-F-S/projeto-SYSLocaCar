import express, { Express, Request, Response } from "express";
import path from "path";
import dotenv from "dotenv";
import cors from 'cors';

dotenv.config();

const app: Express = express();
const port = 9090;

app.use(
    cors({
        origin: 'http://localhost:3000',
        methods: ['GET', 'POST', 'PUT', 'DELETE'],
        allowedHeaders: ['Content-Type', 'Authorization']
    })
);

app.use(express.json());


// If you want a root endpoint returning some text
app.get('/', (req: Request, res: Response) => {
    res.send('Hello from the backend!');
});

app.get('/hello', (req: Request, res: Response) => {
    res.send('Hello from the backend2!');
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
