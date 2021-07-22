import { Request, Response } from "express";
import { ListMovieService } from "../services/ListMovieService";

class ListMovieController {
    async handle(request: Request, response: Response){
        const { id } = request.params;

        const listMovieService = new ListMovieService();

        const movie = await listMovieService.execute(id)

        if(movie.length < 1) {
            return response.status(404).json({"error" : "Not Found"});
        }

        return response.status(200).json(movie)
    }
}

export { ListMovieController }
