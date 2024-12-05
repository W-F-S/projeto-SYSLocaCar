import express, { Express, Request, Response } from "express";
import cors from "cors";
import path from 'path';
import dotenv from 'dotenv';
import { PrismaClient } from '@prisma/client';

//dotenv.config();


const port = 9090;
const app: Express = express();
app.use(cors());

const prisma = new PrismaClient();

// Middleware to parse JSON
//app.use(express.json());
// Set up a route to fetch and display table names

app.get('/tables', async (req, res) => {
    try {
        // Query the database for table names
        let tables: Array<string | number>;

        tables = await prisma.$queryRaw`SELECT table_name FROM information_schema.tables WHERE table_schema = 'public'`;

        console.log("tabelas");

        tables.forEach(
            table => console.log(tables)
        );

        res.send('Table names have been logged to the terminal!');
    } catch (error) {
        console.error('Error fetching table names:', error);
        res.status(500).send('Error fetching table names.');
    }
});


// Serve static files from React
//const reactBuildPath = path.join(__dirname, '../client/build'); // Adjust path as needed
//app.use(express.static(reactBuildPath));

// Catch-all handler to serve React app
// app.get('/app', (req, res) => {
//     res.sendFile(path.join(reactBuildPath, 'index.html'));
// });

// // Start the server
// const PORT = process.env.PORT || 3000;
// app.listen(PORT, () => {
//     console.log(`Server is running on http://localhost:${PORT}`);
// });

app.get("/", (req: Request, res: Response) => {
  res.send("HELLO FROM EXPRESS + TS!!!!");
});

app.get("/hi", (req: Request, res: Response) => {
  res.send("BYEEE!!");
});

app.listen(port, () => {
  console.log(`now listening on port ${port}`);
});