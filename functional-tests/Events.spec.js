const request = require('supertest');
const app = require('../src/app/server');
let testDB = require('../src/infraestructure/db/testDB')
let { EVENTS, USERS } = require('./fixtures')

describe('Events API', function () {
    let FIXTURE, USER_FIXTURE
    
    beforeEach(function (done) {
        testDB.connect(done)
        FIXTURE = {...EVENTS}
        USER_FIXTURE = {...USERS}
        done();
    });

    it('should get all events', (done) => {

        return request(app)
            .post('/user/add')
            .send(USER_FIXTURE.USER_1)
            .expect(201)
            .then(response => {
                expect(response.text).toBeTruthy();
                FIXTURE.EVENT_1.responsible = response.text
                
                return request(app)
                    .post('/events/add')
                    .send(FIXTURE.EVENT_1)
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
            })

    });
    it('should add event', (done) => {
        return request(app)
            .post('/user/add')
            .send(USER_FIXTURE.USER_1)
            .expect(201)
            .then(response => {
                expect(response.text).toBeTruthy();
                FIXTURE.EVENT_1.responsible = response.text

                return request(app)
                    .post('/events/add')
                    .send(FIXTURE.EVENT_1)
                    .expect(200)
                    .then(response => {
                        expect(response.body).toBeTruthy();
                        done()
                    })
            })
    });

    afterEach(function (done) {
        testDB.drop()
        done();
    });
});
