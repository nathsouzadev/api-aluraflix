import { Request, Response } from "express";
import { DeleteMovieService } from "../services/DeleteMovieService";
import { ListMovieService } from "../services/ListMovieService";

class DeleteMovieController {
    async handle(request: Request, response: Response){
        const { id } = request.params;

        const listMovieService = new ListMovieService();

        const movie = await listMovieService.execute(id)

        if(movie.length < 1) {
            return response.json({"error" : "Not Found"});
        }

        const deleteMovieService = new DeleteMovieService();

        try {
            const deleteMovie = await deleteMovieService.execute(id)
            return response.json({"message" : "Movie deleted successfully!"});

        } catch (error) {
            return response.json({ "error": error.message })
        }
    }
}

export { DeleteMovieController }
