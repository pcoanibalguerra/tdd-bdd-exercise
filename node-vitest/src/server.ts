import express from 'express';
import { add } from './math';

const app = express();

app.get('/add', (req, res) => {
  const a = Number(req.query.a);
  const b = Number(req.query.b);
  const result = add(a, b);
  if (isNaN(result)) {
    return res.status(400).send('Invalid input');
  }
  res.json({ result });
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

export default app;
