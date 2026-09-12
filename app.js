import express from 'express';

const app = express();

// JSON body parsing middleware
app.use(express.json());

// Root route
app.get('/', (req, res) => {
  return res.status(200).json({ message: 'Books API is running' });
});

export default app;