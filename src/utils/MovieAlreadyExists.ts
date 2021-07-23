import { ListMovieService } from "../services/ListMovieService";

class MovieAlreadyExists {
    async execute(id: string){
        const movieAlreadyExists = new ListMovieService();

        const movie = await movieAlreadyExists.execute(id);

        if(movie.length <1){
            throw new Error("Movie not found");
        }

        return movie;
    }
}

export { MovieAlreadyExists }
