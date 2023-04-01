import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

import { pokemonRouter } from './pokemon/pokemon.router';

dotenv.config();

if (!process.env.PORT) {
    process.exit(1);
};
const PORT: number = parseInt(process.env.PORT as string, 10);

const app = express();

app.use(cors());
app.use(express.json());

app.use('/api/pokemon', pokemonRouter);

app.listen(PORT, () => {
    console.log(`Application listening on port ${PORT}`);
    
})