import express, { Express, Request, Response } from "express";
import { PrismaClient } from '@prisma/client';
import path from "path";
import dotenv from "dotenv";
import cors from 'cors';
import { Pool } from 'pg';

dotenv.config();

const app: Express = express();
const prisma = new PrismaClient();
const port = 9090;

declare global {
    interface BigInt {
        toJSON(): Number;
    }
}

BigInt.prototype.toJSON = function () { return Number(this) }

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


/**
 * Verifica quais carros do banco estao disponiveis
 * */
app.get('/avalCars', async (req: Request, res: Response) => {
    try {
        // Fetch cars with status 'disponivel'
        const availableCars = await prisma.veiculo.findMany({
            where: {
                status: 'disponivel', // Adjust the column name and value as per your database schema
            },
        });

        // Return the available cars
        res.status(200).json({ availableCars });
    } catch (error) {
        console.error('Error fetching available cars:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

 app.post('/getCar', async(req: Request, res: Response) => {
     try {
         const {carId} = req.body;

         const availableCars = await prisma.veiculo.findUnique({
             where: {
                 id: carId,
             },
         });
         // Return the available cars
         res.status(200).json({ availableCars });
     } catch (error) {
         console.error('Error fetching car information:', error);
         res.status(500).json({ error: 'Internal server error' });
     }   
 });



app.post('/newUser', (req: Request, res: Response)=> {
    res.send('criando novo usuario');
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
