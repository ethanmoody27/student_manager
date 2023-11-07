const express = require("express");
const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();
const app = express();
const port = 4000;

const studentsRouter = require("./src/server/api/students");

app.use(express.json());
app.use('/students', studentsRouter);

// Error handling middleware
app.use((err, req, res, next) => {
    console.error(err);
    const status = err.status ?? 500;
    const message = err.message ?? 'Internal server error.';
    res.status(status).json({ message });
  });

// Route for finding all students
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

// Route for finding a student by ID
app.get('/students/:id', async (req, res, next) => {
    try {
        const studentId = parseInt(req.params.id);
        const student = await prisma.student.findUnique({
            where: { id: studentId },
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

// Route for creating a new student
// Route for creating a new student
app.post('/students/register', async (req, res, next) => {
  try {
      const { username, password, gpa } = req.body;

      if (!username || !password) {
          return res.status(400).json({ error: 'Username and password are required' });
      }

      // Validate GPA here
      if (gpa < 0 || gpa > 4) {
          return res.status(400).json({ error: 'GPA must be between 0 and 4' });
      }

      const student = await prisma.student.create({
          data: { username, password, gpa },
      });

      res.status(201).json(student);
  } catch (e) {
      console.error(e);
      next(e);
  }
});


app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});