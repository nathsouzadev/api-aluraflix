import { getCustomRepository } from "typeorm";
import { MoviesRepository } from "../repositories/CreateMovieRepository";
import { IMovie} from "../interfaces/IMovie"

class ListMovieService {
    async execute({ id }:IMovie ){
        const moviesRepository = getCustomRepository(MoviesRepository);

        const movie = await moviesRepository.find({
            where: { 
                id: id,
            }
        })

        return movie;
    }
}

export { ListMovieService }
