import express from 'express';
import usersRouter from './routes/users.js';
import authRouter from './routes/auth.js';
import contactsRouter from './routes/contacts.js';
import connectDB from './config/db.js';

const app = express();

// Connect Database
connectDB();

// Init Middleware
app.use(express.json({ extended: false }));

app.get('/', (req, res) =>
  res.json({ msg: 'Welcome to the ContactKeepr API...' })
);

// Define routes
app.use('/api/users', usersRouter);
app.use('/api/auth', authRouter);
app.use('/api/contacts', contactsRouter);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
