import express from 'express';
import connectDB from './config/db.js';
import usersRouter from './routes/users.js';
import authRouter from './routes/auth.js';
import contactsRouter from './routes/contacts.js';
import path from 'path';

const app = express();

// Connect Database
connectDB();

// Init Middleware
app.use(express.json({ extended: false }));

// Define Routes
app.use('/api/users', usersRouter);
app.use('/api/auth', authRouter);
app.use('/api/contacts', contactsRouter);

// Serve static assets in production
if (process.env.NODE_ENV === 'production') {
  // Set static folder
  app.use(express.static('client/build'));

  app.get('*', (req, res) =>
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
  );
}

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
