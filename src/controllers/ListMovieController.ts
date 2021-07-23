import { Request, Response } from "express";
import { MovieAlreadyExists } from "../utils/MovieAlreadyExists";

class ListMovieController {
    async handle(request: Request, response: Response){
        const { id } = request.params;

        const movieAlreadyExists = new MovieAlreadyExists();

        try {
            const movie = await movieAlreadyExists.execute(id)
            return response.status(200).json(movie);

        } catch (error) {
            return response.status(404).json({ "error": error.message })
        }
    }
}

export { ListMovieController }
