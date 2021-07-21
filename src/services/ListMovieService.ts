import { getCustomRepository } from "typeorm";
import { MoviesRepository } from "../repositories/CreateMovieRepository";

class ListMovieService {
    async execute(id: string){
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
