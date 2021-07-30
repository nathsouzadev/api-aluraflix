// import request from 'supertest';
// import { getConnection } from 'typeorm';
// import { app } from '../app';
// import createConnection from'../database';

// describe("Test routes", () => {
//     beforeAll(async () => {
//         const connection = await createConnection();
//         await connection.runMigrations();
//     })

//     afterAll(async () => {
//         const connection = getConnection();
//         await connection.dropDatabase();
//         await connection.close();
//     })

//     const userData = request(app).post('/movie').send({
//         title: 'Title example',
//         description: 'Description example',
//         url: 'url example'
//     });

//     it('Should be able to create a new movie', async() => {
//         const response = await userData;

//         expect(response.status).toBe(201);
//         expect(response.body).toHaveProperty('id');

//     });

//     it('Should be able to get all movies', async () => {
        
//         const response = await request(app).get('/movie');

//         expect(response.status).toBe(200);
//     })
// })
