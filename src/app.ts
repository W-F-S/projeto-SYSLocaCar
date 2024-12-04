import express from 'express';
import dotenv from 'dotenv';
import { PrismaClient } from '@prisma/client';

// Load environment variables from a .env file
dotenv.config();

const app = express();
const prisma = new PrismaClient();

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
        // Send the table names as a response

        res.send('Table names have been logged to the terminal!');
    } catch (error) {
        console.error('Error fetching table names:', error);
        res.status(500).send('Error fetching table names.');
    }
});

// Set up a default route
app.get('/', (req, res) => {
    res.send('Hello, World! This is your app running!');
});

// Start the server
const PORT = process.env.PORT || 3000; // Use port from .env or default to 3000
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});