import express, { Request, Response } from 'express';

const app = express();
const port = 3000;

app.use(express.json());

app.get('/', (req: Request, res: Response) => {
  console.log('Req ==>', req);  
  res.send('Hello, world!');
});

app.get('/greet/:name', (req: Request, res: Response) => {
   const name = req.params.name;
   res.send(`Hello, ${name}`);
});

app.post('/user', (req: Request, res: Response) => {
    const { name, age } = req.body;
    res.json({ message: `User ${name}, age ${age}, created successfully`}); 
});

app.listen(port, () => {
    console.log(`App listen on port ${port}`);
});