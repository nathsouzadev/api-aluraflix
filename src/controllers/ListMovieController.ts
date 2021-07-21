import { Request, Response } from "express";
import { ListMovieService } from "../services/ListMovieService";

class ListMovieController {
    async handle(request: Request, response: Response){
        const { id } = request.params;

        const listMovieService = new ListMovieService();

        const movie = await listMovieService.execute(id)

        if(movie.length < 1) {
            return response.json({"error" : "Not Found"});
        }

        return response.json(movie)
    }
}

export { ListMovieController }
