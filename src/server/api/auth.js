const express = require('express');
const router = express.Router();
const { ServerError } = require('../../errors/ServerError');
const prisma = require('../../prisma');
const jwt = require('./jwt');
const bcrypt = require('bcrypt');

/** Creates a new account and returns a token */
router.post('/register', async (req, res, next) => {
  try {
    const { username, password } = req.body;

    // Check if username and password provided
    if (!username || !password) {
      throw new ServerError(400, 'Username and password required.');
    }

    // Check if the account already exists
    const user = await prisma.user.findUnique({
      where: { username },
    });
    if (user) {
      throw new ServerError(400, `Account with username ${username} already exists.`);
    }

    // Create a new user
    const newUser = await prisma.user.create({
      data: { username, password },
    });

    const token = jwt.sign({ id: newUser.id });
    res.json({ token });
  } catch (err) {
    next(err);
  }
});

/** Returns a token for an account if credentials are valid */
router.post('/login', async (req, res, next) => {
  try {
    const { username, password } = req.body;

    // Check if username and password provided
    if (!username || !password) {
      throw new ServerError(400, 'Username and password required.');
    }

    // Check if the account exists
    const user = await prisma.user.findUnique({
      where: { username },
    });
    if (!user) {
      throw new ServerError(400, `Account with username ${username} does not exist.`);
    }

    // Check if the password is correct
    const passwordValid = await bcrypt.compare(password, user.password);
    if (!passwordValid) {
      throw new ServerError(401, 'Invalid password.');
    }

    const token = jwt.sign({ id: user.id });
    res.json({ token });
  } catch (err) {
    next(err);
  }
});

module.exports = router;
