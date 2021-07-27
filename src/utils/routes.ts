import { Router, Request, Response } from "express";
import { CreateMovieController } from "../controllers/CreateMovieController";
import { ListAllMovieController } from "../controllers/ListAllMovieController";
import { ListMovieController } from "../controllers/ListMovieController";
import { UpdateMovieController } from "../controllers/UpdateMovieController";
import { DeleteMovieController } from "../controllers/DeleteMovieController";

const router = Router();

const createMovieController = new CreateMovieController();
const listAllMovieController = new ListAllMovieController();
const listMovieController = new ListMovieController();
const updateMovieController = new UpdateMovieController();
const deleteMovieController = new DeleteMovieController();

router.get('/', (request: Request, response: Response) => {
    return response.json({message: 'Bem vindo a API AluraFlix'})
})

router.get('/movie', listAllMovieController.handle)
router.post('/movie', createMovieController.handle)
router.get('/movie/:id', listMovieController.handle)
router.put('/movie/:id', updateMovieController.handle)
router.delete('/movie/:id', deleteMovieController.handle)

export { router }
