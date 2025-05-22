import express from 'express';
import { PrismaClient } from '@prisma/client';

const app = express();
const prisma = new PrismaClient(); // talks to your DB

app.use(express.json()); // allows us to read JSON from request bodies

// Routes will go here

app.listen(3000, () => {
  console.log('Server running at http://localhost:3000');
});

app.get('/tasks', async (req, res) => {
    const tasks = await prisma.task.findMany();
    res.json(tasks);
});