// students.js
const express = require('express');
const router = express.Router();
const { ServerError } = require('../errors');
const prisma = require('../prisma');

// User must be logged in to access student tasks
router.use((req, res, next) => {
  if (!res.locals.user) {
    return next(new ServerError(401, 'You must be logged in.'));
  }
  next();
});

// Sends all students
router.get('/', async (req, res, next) => {
  try {
    const students = await prisma.student.findMany();
    res.json(students);
  } catch (err) {
    next(err);
  }
});

// Creates a new student
router.post('/', async (req, res, next) => {
  try {
    const { username, password } = req.body;

    if (!username || !password) {
      throw new ServerError(400, 'Username and password are required.');
    }

    const student = await prisma.student.create({
      data: { username, password },
    });
    res.status(201).json(student);
  } catch (err) {
    next(err);
  }
});

// Checks if a student exists and belongs to the given user
const validateStudent = async (user, studentId) => {
  const student = await prisma.student.findUnique({
    where: { id: studentId },
  });

  if (!student) {
    throw new ServerError(404, 'Student not found.');
  }

  if (student.id !== user.id) {
    throw new ServerError(403, 'This student does not belong to you.');
  }

  return student;
};

// Sends a single student by ID
router.get('/:id', async (req, res, next) => {
  try {
    const studentId = +req.params.id;
    const student = await validateStudent(res.locals.user, studentId);
    res.json(student);
  } catch (err) {
    next(err);
  }
});

// Updates a single student by ID
router.put('/:id', async (req, res, next) => {
  try {
    const studentId = +req.params.id;
    const { username, password } = req.body;

    if (!username || !password) {
      throw new ServerError(400, 'Username and password are required.');
    }

    await validateStudent(res.locals.user, studentId);

    const updatedStudent = await prisma.student.update({
      where: { id: studentId },
      data: { username, password },
    });

    res.json(updatedStudent);
  } catch (err) {
    next(err);
  }
});

// Deletes a single student by ID
router.delete('/:id', async (req, res, next) => {
  try {
    const studentId = +req.params.id;

    await validateStudent(res.locals.user, studentId);

    await prisma.student.delete({ where: { id: studentId } });
    res.sendStatus(204);
  } catch (err) {
    next(err);
  }
});

module.exports = router;