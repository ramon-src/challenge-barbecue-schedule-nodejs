const request = require('supertest');
const app = require('../src/app/server');
let testDB = require('../src/infraestructure/db/testDB')

describe('User API', function () {

    beforeEach(function (done) {
        testDB.connect(done)
        done();
    });

    it('should add user', (done) => {
        return request(app)
            .post('/user/add')
            .send({
                username: 'Ramon Schmidt',
                email: 'test@gmail.com',
                password: "testpassword"
            })
            .expect(201)
            .then(response => {
                expect(response.text).toBeTruthy();
                done()
            })

    });
    afterEach(function (done) {
        testDB.drop()
        done();
    });
});
