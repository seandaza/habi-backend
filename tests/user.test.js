const request = require('supertest');
const user = require('../../src/controllers/userController');

// testing register
describe('Register', () => {
    it('should return 201', (done) => {
        request(user)
            .post('/user')
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .send({
                name: 'luis',
                telephone: '123456789',
                email: 'luis@gmail.comn',
                password: '123456',
            })
            .expect(201, done);
    });
});

