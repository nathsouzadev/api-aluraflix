import { Router, Request, Response } from "express";
import { CreateMovieController } from "./controllers/CreateMovieController";

const router = Router();

const createMovieController = new CreateMovieController();

router.get('/', (request: Request, response: Response) => {
    return response.json({message: 'Bem vindo a API AluraFlix'})
})

router.post('/movie', createMovieController.handle)

export { router }
