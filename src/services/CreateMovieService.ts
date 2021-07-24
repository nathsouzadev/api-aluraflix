import { getCustomRepository } from "typeorm";
import { MoviesRepository } from "../repositories/CreateMovieRepository";
import { IMovie} from "../interfaces/IMovie"
class CreateMovieService {
    async execute({ title, description, url }: IMovie){

        const moviesRepository = getCustomRepository(MoviesRepository);

        if(!title || !description || !url){
            throw new Error("Please fill all fields");
        }

        const newMovie = moviesRepository.create({ title, description, url });

        await moviesRepository.save(newMovie);

        return newMovie;
    }
}

export { CreateMovieService }