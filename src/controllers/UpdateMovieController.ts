import { Request, Response } from "express";
import { UpdateMovieService } from "../services/UpdateMovieService";
import { MovieAlreadyExists } from "../utils/MovieAlreadyExists";

class UpdateMovieController {
    async handle(request: Request, response: Response){
        const { id } = request.params;
        const { title, description, url} = request.body

        const movieAlreadyExists = new MovieAlreadyExists();

        try {
            await movieAlreadyExists.execute(id)
            const updateMovieService = new UpdateMovieService();
            await updateMovieService.execute({ id, title, description, url })
            return response.status(204).json({"message" : "Movie updated successfully!"});

        } catch (error) {
            return response.status(404).json({ "error": error.message })
        }


    }
}

export { UpdateMovieController }
