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


app.get('/getCar', async (req: Request, res: Response) => {
    try {
        // Get the carId from the query parameters
        const { carId } = req.query;

        // Validate carId
        if (!carId) {
            return res.status(400).json({ error: 'carId is required' });
        }

        const availableCar = await prisma.veiculo.findUnique({
            where: {
                id: (carId), // Convert to number if needed
            },
        });

        if (!availableCar) {
            return res.status(404).json({ error: 'Car not found' });
        }

        // Return the car details
        res.status(200).json({ availableCar });
    } catch (error) {
        console.error('Error fetching car information:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

 app.put('/updateCar', async (req: Request, res: Response) => {
    try {
        const carInfo = req.body;



        console.log("nn\n\n\n\n\n\n\n\n\n");


        console.log(req.body);
        
        console.log(carInfo);


        // Validate inputs
        if (!carInfo) {
            return res.status(400).json({ error: 'Car ID and car information are required.' });
        }


        // Update the car information in the database
        const updatedCar = await prisma.veiculo.update({
            where: {
                id: carInfo.id, // Ensure the ID exists
            },
            data: {
                placa: carInfo.placa,
                chassi: carInfo.chassi,
                cor: carInfo.cor,
                marca: carInfo.marca,
                modelo: carInfo.modelo,
                status: carInfo.status,
            },
        });

        // Respond with the updated car information
        res.status(200).json({ message: 'Car updated successfully', updatedCar });
    } catch (error) {
        console.error('Error updating car information:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});


app.delete('/deleteCar', async (req: Request, res: Response) => {
    try {
        const {carId} = req.body;

        // Validate inputs
        if (!carId) {
            return res.status(400).json({ error: 'Car ID and car information are required.' });
        }

        // Update the car information in the database
        const deletedCar = await prisma.veiculo.delete({
             where: {
                 id: Number(carId), 
             }
         });

        // Respond with the updated car information
        res.status(200).json({ message: 'Car updated successfully', deletedCar });
    } catch (error) {
        console.error('Error updating car information:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

app.post('/newCar', async (req: Request, res: Response)=>{
    const { placa, chassi, anofabricacao, cor, marca, modelo, status, imagemPath } = req.body;

    try {
        // Validate required fields
        if (!placa || !chassi || !marca || !modelo || !status) {
            return res.status(400).json({ error: 'Required fields are missing' });
        }

        // Create a new car in the database
        const newCar = await prisma.veiculo.create({
            data: {
                placa,
                chassi,
                anofabricacao: anofabricacao ? new Date(anofabricacao) : null, // Convert date if provided
                cor,
                marca,
                modelo,
                status,
                imagemPath: imagemPath || 'default.jpeg', // Fallback to default image
            },
        });

        // Return the created car
        res.status(201).json(newCar);
    } catch (error) {
        console.error('Error creating car:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

app.post('/newUser', (req: Request, res: Response)=> {
    res.send('criando novo usuario');
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
