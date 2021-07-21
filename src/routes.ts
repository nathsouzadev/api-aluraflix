import { Router, Request, Response } from "express";
import { CreateMovieController } from "./controllers/CreateMovieController";
import { ListAllMovieController } from "./controllers/ListAllMovieController";

const router = Router();

const createMovieController = new CreateMovieController();
const listAllMovieController = new ListAllMovieController();

router.get('/', (request: Request, response: Response) => {
    return response.json({message: 'Bem vindo a API AluraFlix'})
})

router.get('/movie', listAllMovieController.handle)
router.post('/movie', createMovieController.handle)

export { router }
