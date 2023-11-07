const express = require("express");
const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();
const app = express();
const port = 4000;

app.use(express.json());

// Route to serve all students
app.get('/students', async (req, res) => {
    try {
      const students = await prisma.student.findMany({
        select: {
          id: true,
          username: true,
          password: true,
          information: true,
        },
      });
      res.json(students);
    } catch (e) {
      console.error(e);
      res.status(500).json({ error: 'Something went wrong' });
    }
  });
  

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

