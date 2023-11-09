const express = require("express");
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const router = express.Router();

// PUT student username and password by ID
router.put('/:id/update-credentials', async (req, res, next) => {
    try {
        const studentId = parseInt(req.params.id);
        const { username, password } = req.body;

        if (!username || !password) {
            return res.status(400).json({ error: 'Username and password are required' });
        }

        const updatedInformation = await prisma.student.update({
            where: { id: studentId },
            data: { username, password },
        });

        res.json(updatedInformation);
    } catch (e) {
        next(e);
    }
});

// PUT student information by ID
router.put('/:id', async (req, res, next) => {
    try {
        const informationId = parseInt(req.params.id);

        const existingInformation = await prisma.information.findUnique({
            where: { id: informationId },
        });

        if (!existingInformation) {
            return next({
                status: 404,
                message: `Information with ID ${informationId} not found`,
            });
        }

        const { firstName, lastName, email, imageUrl, gpa } = req.body;

        if (!firstName || !lastName || !email || !imageUrl || gpa < 0 || gpa > 4) {
            return next({
                status: 400,
                message: 'All fields are required, and GPA must be between 0 and 4',
            });
        }

        const updatedInformation = await prisma.information.update({
            where: { id: informationId },
            data: { firstName, lastName, email, imageUrl, gpa },
        });

        res.json(updatedInformation);
    } catch (e) {
        next(e);
    }
});

module.exports = router;