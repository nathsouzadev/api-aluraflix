import { response } from "express";
import { getCustomRepository } from "typeorm";
import { MoviesRepository } from "../repositories/CreateMovieRepository";
import { IMovie} from "../interfaces/IMovie"

class DeleteMovieService {
    async execute({ id }:IMovie ){
        const deleteMovieRepository = getCustomRepository(MoviesRepository);

        const movieExists = await deleteMovieRepository.findOne({ id });

        if(!movieExists){
            return response.json({ "error" : "Movie not found"})
        }

        const deleteMovie = await deleteMovieRepository.remove(movieExists);

        return deleteMovie;
    }
}

export { DeleteMovieService }
