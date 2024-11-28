import express from 'express';
import cors from 'cors';
import { convertToRoman } from './arabic';

const app = express();

app.use(cors());

app.get('/convert/:number', (req, res) => {
  try {
    const roman = convertToRoman(+req.params.number);
    res.json({ roman });
  } catch (error) {
    res.status(400).send('Invalid input');
  }
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

export default app;
