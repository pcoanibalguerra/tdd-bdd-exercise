import express, { Request, Response } from 'express';
import cors from 'cors';

const app = express();

app.use(cors());

app.get('/convert', (req, res) => {
  const number = Number(req.query.number);
  console.log(`Received ${number}`);
  let roman = ""
  if (number == 1) {
    
    roman = "I"
  }
  console.log(`Result ${roman}`);

  res.json({ roman });
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

export default app;
