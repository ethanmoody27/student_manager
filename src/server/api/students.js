const express = require("express");
const router = express.Router();
const { ServerError } = require("../errors");
const prisma = require("../prisma");

// User must be logged in to access student tasks
router.use((req, res, next) => {
  if (!res.locals.user) {
    return next(new ServerError(401, "You must be logged in."));
  }
  next();
});

// Sends all students
router.get("/", async (req, res, next) => {
  try {
    const students = await prisma.student.findMany();
    res.json(students);
  } catch (err) {
    next(err);
  }
});

// Creates a new student
router.post("/", async (req, res, next) => {
  try {
    const { firstName, lastName, email, imageUrl, gpa, user } = req.body;

    if (!firstName || !lastName || !email || !imageUrl || !gpa) {
      throw new ServerError(400, "All fields are required.");
    }

    console.log("This is the console.log", req.body);

    const student = await prisma.student.create({
      data: { firstName, lastName, email, imageUrl, gpa, user },
    });

    res.status(201).json(student);
  } catch (err) {
    next(err);
  }
});

// Checks if a student exists
const validateStudent = async (studentId) => {
  const student = await prisma.student.findUnique({
    where: { id: studentId },
  });

  if (!student) {
    throw new ServerError(404, "Student not found.");
  }

  return student;
};

// Sends a single student by ID
router.get("/:id", async (req, res, next) => {
  try {
    const studentId = +req.params.id;
    const student = await validateStudent(studentId);
    res.json(student);
  } catch (err) {
    next(err);
  }
});

// Updates a single student by ID
router.put("/:id", async (req, res, next) => {
  try {
    const studentId = +req.params.id;
    const { firstName, lastName, email, imageUrl, gpa } = req.body;

    await validateStudent(studentId);

    const updatedStudent = await prisma.student.update({
      where: { id: studentId },
      data: { firstName, lastName, email, imageUrl, gpa },
    });

    res.json(updatedStudent);
  } catch (err) {
    next(err);
  }
});

// Deletes a single student by ID
router.delete("/:id", async (req, res, next) => {
  try {
    const studentId = +req.params.id;

    await prisma.student.delete({ where: { id: studentId } });
    res.sendStatus(204);
  } catch (err) {
    next(err);
  }
});

module.exports = router;
