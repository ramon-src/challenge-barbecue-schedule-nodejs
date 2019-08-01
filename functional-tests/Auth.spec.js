const request = require('supertest');
const app = require('../src/app/server');
let testDB = require('../src/infraestructure/db/testDB')

describe('Auth API', function () {

    beforeEach(function (done) {
        testDB.connect(done)
        done();
    });

    it('should sign in successfuly', (done) => {
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
                return request(app)
                    .post('/auth/signIn')
                    .send({
                        email: 'test@gmail.com',
                        password: "testpassword"
                    })
                    .expect(200)
                    .then(response => {
                        let json = JSON.parse(response.text)
                        expect(json.id).toBeTruthy();
                        expect(json.username).toBe("Ramon Schmidt");
                        expect(json.email).toBe("test@gmail.com");
                        done()
                    })
            })

    });
    it('should access be denied', (done) => {
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
                return request(app)
                    .post('/auth/signIn')
                    .send({
                        email: 'testwrong@gmail.com',
                        password: "testpassword"
                    })
                    .expect(401)
                    .then(response => {
                        let json = JSON.parse(response.text)
                        expect(json).toEqual({});
                        done()
                    })
            })

    });
    afterEach(function (done) {
        testDB.drop()
        done();
    });
});
