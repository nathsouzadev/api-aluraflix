import { getCustomRepository } from "typeorm";
import { MoviesRepository } from "../repositories/CreateMovieRepository";

interface IMovie {
    title: string;
    description: string;
    url: string;
}
class CreateMovieService {
    
    private moviesRepository: MoviesRepository;
    
    constructor(movieRepository: MoviesRepository = getCustomRepository(MoviesRepository)){
        this.moviesRepository = movieRepository;
    }

    async execute({ title, description, url }: IMovie){
    
        if(!title || !description || !url){
            throw new Error("Please fill all fields")
        }

        const newMovie = this.moviesRepository.create({ title, description, url });

        await this.moviesRepository.save(newMovie);

        return newMovie;
    }
}

export { CreateMovieService }