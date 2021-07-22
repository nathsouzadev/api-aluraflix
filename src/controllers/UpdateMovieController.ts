import { Request, Response } from "express";
import { UpdateMovieService } from "../services/UpdateMovieService";
import { ListMovieService } from "../services/ListMovieService";

class UpdateMovieController {
    async handle(request: Request, response: Response){
        const { id } = request.params;
        const { title, description, url} = request.body

        const listMovieService = new ListMovieService();

        const movie = await listMovieService.execute(id)

        if(movie.length < 1) {
            return response.status(404).json({"error" : "Not Found"});
        }

        const updateMovieService = new UpdateMovieService();

        try {
            const updateMovie = await updateMovieService.execute({ id, title, description, url })
            return response.status(204).json({"message" : "Movie updated successfully!"});

        } catch (error) {
            return response.status(404).json({ "error": error.message })
        }


    }
}

export { UpdateMovieController }
