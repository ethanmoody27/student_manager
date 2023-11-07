const express = require("express");
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const router = express.Router();

// GET student by ID
router.get('/:id', async (req, res, next) => {
    const studentId = parseInt(req.params.id);

    try {
        const student = await prisma.student.findUnique({
            where: { id: studentId },
            select: {
                id: true,
                username: true,
                password: true,
                information: true,
            },
        });

        if (!student) {
            res.status(404).json({ error: 'Student not found' });
        } else {
            res.json(student);
        }
    } catch (e) {
        next(e);
    }
});

// POST a new student
router.post('/register', async (req, res, next) => {
    try {
        const { username, password } = req.body;

        if (!username || !password) {
            res.status(400).json({ error: 'Username and password are required' });
        } else {
            const student = await prisma.student.create({
                data: { username, password },
            });
            res.status(201).json(student);
        }
    } catch (e) {
        next(e);
    }
});

// DELETE a student by ID
router.delete('/:id', async (req, res, next) => {
    try {
        const studentId = parseInt(req.params.id);

        const existingStudent = await prisma.student.findUnique({
            where: { id: studentId },
        });

        if (!existingStudent) {
            return next({
                status: 404,
                message: 'Student with ID ${studentId} not found',
            });
        }

        await prisma.student.delete({ where: { id: studentId } });

        res.sendStatus(204);
    } catch (e) {
        next(e);
    }
});

module.exports = router;
