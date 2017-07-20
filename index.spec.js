const request = require('supertest');
const app = require('./index');


describe('GET /users는', ()=> {
    it('...', (done)=> {
        request(app)
            .get('/users')
            .end((err, res) => {
                console.log(res.body);
                done();
            })
    })
})