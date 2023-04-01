import express, { response } from 'express';
import type { Request, Response } from 'express';
// import axios from 'axios';

import * as PokemonService from '../pokemon/pokemon.service';

export const pokemonRouter = express();

pokemonRouter.get("/", async (request: Request, response: Response): Promise<object> => {
    try {
        const pokemonAPI = await PokemonService.getPokemonList();
        return response.status(200).json(pokemonAPI);
    } catch(error: any) {
        return response.status(500).json(error.message);
    }
});

