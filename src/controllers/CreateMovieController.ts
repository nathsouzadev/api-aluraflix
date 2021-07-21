
import { Request, Response } from "express";
import { CreateMovieService } from "../services/CreateMovieService";

class CreateMovieController{
    async handle(request: Request, response: Response){
        const { title, description, url } = request.body;

        const createMovieService = new CreateMovieService();

        try {
            const newMovie = await createMovieService.execute({ title, description, url })

            return response.json(newMovie);
        } catch (error) {
            return response.json({ "error": error.message })
        }
    }
}

export { CreateMovieController }
