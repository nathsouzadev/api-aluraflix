import typeorm, { getCustomRepository } from 'typeorm';
import { MoviesRepository } from '../repositories/CreateMovieRepository';
import { CreateMovieService } from './CreateMovieService';
import { mock } from 'jest-mock-extended';
import { mocked } from 'ts-jest/utils';

const repositoryMock =  mock<MoviesRepository>();

jest.mock('typeorm', () => {
    
    return {
        getRepository: () => jest.fn(),
        getCustomRepository: () => jest.fn(),

        BaseEntity: class Mock {},
        ObjectType: () => {},
        Entity: () => {},
        InputType: () => {},
        Index: () => {},
        PrimaryGeneratedColumn: () => {},
        PrimaryColumn: () => {},
        Column: () => {},
        CreateDateColumn: () => {},
        UpdateDateColumn: () => {},
        OneToMany: () => {},
        ManyToOne: () => {},
    }
})

describe('CreateMovieService', () => {
    it('should create a new movie', () => {
        mocked(getCustomRepository).mockReturnValue(repositoryMock)
        repositoryMock.create.mockReturnValue({
            id: '12345',
            title: 'Title example',
            description: 'Description example',
            url: 'url example'
       })

       expect(repositoryMock).toHaveBeenCalledTimes(1)
    })
})
