import { EntityRepository, Repository } from "typeorm";
import { Movie } from "../entities/Movie";

@EntityRepository(Movie)
class MoviesRepository extends Repository<Movie> {}

export { MoviesRepository }
