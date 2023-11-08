const express = require('express');
const app = express();
const port = 4000;

const studentsRouter = require('./src/server/api/students'); // Import the student route file
const authRouter = require('./src/server/api/auth'); // Import the authentication route file

app.use(express.json());

app.use('/students', studentsRouter); // Use the student route
app.use('/auth', authRouter); // Use the authentication route

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err);
  const status = err.status ?? 500;
  const message = err.message ?? 'Internal server error.';
  res.status(status).json({ message });
});

// Your other routes (e.g., server.get, etc.)

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});