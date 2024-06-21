import express from 'express';
import bodyParser from 'body-parser';
import noteRoutes from './routes/note.routes';
import cors from 'cors';

const app = express();

app.use(bodyParser.json());
app.use('/api', noteRoutes);
app.use(cors());

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
