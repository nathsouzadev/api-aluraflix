import { Repository, SelectQueryBuilder, getCustomRepository } from 'typeorm';
import { MoviesRepository } from '../repositories/CreateMovieRepository';
import { CreateMovieService } from './CreateMovieService';
import { mock } from 'jest-mock-extended';
import { mocked } from 'ts-jest/utils';

// jest.mock('../repositories/CreateMovieRepository');
// jest.mock('typeorm', () => ({ getCustomRepository: jest.fn() }));

const repositoryMock = mock<MoviesRepository>();
const qbuilderMock = mock<SelectQueryBuilder<any>>();

jest.mock('typeorm', () => {
    // qbuilderMock.where.mockReturnThis();
    // qbuilderMock.select.mockReturnThis();
    repositoryMock.createQueryBuilder.mockReturnValue(undefined);

    return {
        getRepository: () => repositoryMock,
        getCustomRepository: () => repositoryMock,

        BaseEntity: class Mock {},
        ObjectType: () => {},
        Entity: () => {},
        InputType: () => {},
        Index: () => {},
        PrimaryGeneratedColumn: () => {},
        Column: () => {},
        CreateDateColumn: () => {},
        UpdateDateColumn: () => {},
        OneToMany: () => {},
        ManyToOne: () => {},
    }
})

describe('CreateMovieService', () => {

    // const movieRepo = { 
    //     create: jest.fn().mockReturnValue({
    //         id: '12345',
    //         title: 'Title example',
    //         description: 'Description example',
    //         url: 'url example'
    //     }),
    //     save: jest.fn()
    // };

    // mocked(getCustomRepository).mockReturnValue(movieRepo);
    // const movieRepository: MoviesRepository = mocked(MoviesRepository, true)
    // .mockImplementation(() => jest.mock(
    //     {
    //         create: jest.fn().mockReturnValue({
    //                 id: '12345',
    //                 title: 'Title example',
    //                 description: 'Description example',
    //                 url: 'url example'
    //         }),
    //         save: jest.fn()
    //     })
    // )

//     import { Controller } from './controller';
// import { getCustomRepository } from 'typeorm';
// import { mocked } from 'ts-jest/utils';
// import { UserRepository } from './userRepo';

// jest.mock('typeorm', () => ({ getCustomRepository: jest.fn() }));

// describe('61693597', () => {
//   it('should pass', async () => {
//     const userRepo = { findUser: jest.fn().mockResolvedValueOnce('fake user') };
//     mocked(getCustomRepository).mockReturnValueOnce(userRepo);
//     const controller = new Controller();
//     const actual = await controller.init();
//     expect(actual).toBe('fake user');
//     expect(getCustomRepository).toBeCalledWith(UserRepository);
//     expect(userRepo.findUser).toBeCalledWith(1);
//   });
// });

    
        

    it('Should create a movie', async () => {
        mocked(getCustomRepository).mockReturnValue(repositoryMock)
        const createMovieService = new CreateMovieService();

        const movieData = {
            title: 'Title example',
            description: 'Description example',
            url: 'url example'
        };

        const movie = await createMovieService.execute(movieData)

        // expect(movieRepo.save).toHaveBeenCalled();
        expect(movie).toHaveProperty('id')
        expect(movie.title).toBe('Title example');
    })

    // it('Should not be able to create a movie without all fields filled', async () => {
    //     const movieData = {
    //         title: 'Title example',
    //         description: 'Description example',
    //         url: ''
    //     };
        
    //     const movie = await createMovieService.execute(movieData)

    //     await expect(createMovieService.execute(movieData)).rejects.toEqual(
    //         new Error("Please fill all fields")
    //     )
    // })
})
