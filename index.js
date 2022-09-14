import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import authRouter from './routes/auth.routers.js';
import catalogRouter from './routes/catalog.routers.js';

const app = express();
dotenv.config();
app.use(express.json());
app.use(cors());

app.use(authRouter);
app.use(catalogRouter);

app.get('/status', (req,res) =>{
    res.send(200);
})


app.listen(5000)