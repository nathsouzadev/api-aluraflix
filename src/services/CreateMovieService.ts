import { getCustomRepository } from "typeorm";
import { MoviesRepository } from "../repositories/CreateMovieRepository";

interface IMovie {
    title: string;
    description: string;
    url: string;
}
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