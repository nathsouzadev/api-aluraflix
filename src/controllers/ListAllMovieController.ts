import { Request, Response } from "express";
import { ListAllMovieService } from "../services/ListAllMovieService";

class ListAllMovieController{
    async handle(request: Request, response: Response){
        const listAllMovie = new ListAllMovieService();

        const allMovies = await listAllMovie.execute();

        return response.json(allMovies);
    }
 }

export { ListAllMovieController }