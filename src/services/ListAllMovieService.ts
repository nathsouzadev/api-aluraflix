import { getCustomRepository } from "typeorm";
import { MoviesRepository } from "../repositories/CreateMovieRepository";

class ListAllMovieService {
    async execute(){
        const moviesRepository = getCustomRepository(MoviesRepository);

        const allMovies = await moviesRepository.find();

        return allMovies;
    }
}

export { ListAllMovieService }