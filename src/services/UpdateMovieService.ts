import { getCustomRepository } from "typeorm";
import { Movie } from "../entities/Movie";
import { MoviesRepository } from "../repositories/CreateMovieRepository";

interface IMovie {
    id: string;
    title: string;
    description: string;
    url: string;
}

class UpdateMovieService {
    async execute({ id, title, description, url}: IMovie){
 
        const updateMovieRepository = getCustomRepository(MoviesRepository);

        if(!title || !description || !url){
            throw new Error("Please fill all fields");
        }

        const updateMovie = await updateMovieRepository.createQueryBuilder()
            .update(Movie)
            .set({ 
                title,
                description,
                url
            })
            .where("id = :id", {
                id: id
            })
            .execute();

        return updateMovie;
    }
}

export { UpdateMovieService }
