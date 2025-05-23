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

app.put('/tasks/:id', async (req, res) => {
    const id = Number(req.params.id);
    const { text } = req.body;

    try {
        const task = await prisma.task.update({
            where: { id },
            data: { text },
        });

        res.json(task);
    } catch (error) {
        res.status(500).json({ error: 'Failed to update task' });
    }
});