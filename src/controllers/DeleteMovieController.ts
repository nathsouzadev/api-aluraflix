import { Request, Response } from "express";
import { DeleteMovieService } from "../services/DeleteMovieService";
import { MovieAlreadyExists } from "../utils/MovieAlreadyExists";

class DeleteMovieController {
    async handle(request: Request, response: Response){
        const { id } = request.params;

        const movieAlreadyExists = new MovieAlreadyExists();

        try {
            await movieAlreadyExists.execute(id)
            const deleteMovieService = new DeleteMovieService();
            await deleteMovieService.execute(id)
            return response.status(204).json({"message" : "Movie deleted successfully!"});

        } catch (error) {
            return response.status(404).json({ "error": error.message })
        }
    }
}

export { DeleteMovieController }
