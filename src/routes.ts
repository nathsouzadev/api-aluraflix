import { Router, Request, Response } from "express";
import { CreateMovieController } from "./controllers/CreateMovieController";
import { ListAllMovieController } from "./controllers/ListAllMovieController";
import { ListMovieController } from "./controllers/ListMovieController";

const router = Router();

const createMovieController = new CreateMovieController();
const listAllMovieController = new ListAllMovieController();
const listMovieController = new ListMovieController();

router.get('/', (request: Request, response: Response) => {
    return response.json({message: 'Bem vindo a API AluraFlix'})
})

router.get('/movie', listAllMovieController.handle)
router.get('/movie/:id', listMovieController.handle)
router.post('/movie', createMovieController.handle)

export { router }
