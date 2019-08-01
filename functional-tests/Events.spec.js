const request = require('supertest');
const app = require('../src/app/server');
let testDB = require('../src/infraestructure/db/testDB')

describe('Events API', function () {

    beforeEach(function (done) {
        testDB.connect(done)
        done();
    });

    it('should get all events', (done) => {
        return request(app)
            .post('/events/add')
            .send({
                title: 'Ramon\'s Birthday',
                observation: 'Bring all the family',
                contributionWithDrink: 20,
                contribution: 15,
                amount: 0,
            })
            .expect(200)
            .then(res => {
                return request(app)
                    .get('/events/list')
                    .expect(200)
                    .then((response) => {
                        expect(response.body.length).toBe(1);
                        done()
                    });
            })

    });
    it('should add event', (done) => {
        return request(app)
            .post('/events/add')
            .send({
                title: 'Ramon\'s Birthday',
                observation: 'Bring all the family',
                contributionWithDrink: 20,
                contribution: 15,
                amount: 0,
            })
            .expect(200)
            .then(response => {
                expect(response.body).toBeTruthy();
                done()
            })
    });

    afterEach(function (done) {
        testDB.drop()
        done();
    });
});
