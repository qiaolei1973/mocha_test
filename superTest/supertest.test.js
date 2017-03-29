const express = require('express');
const bodyParser = require('body-parser');
const should = require('should');

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.get('/user', function (req, res) {
    console.log(req.query);
    res.status(200).json({ name: 'tobi' });
});
app.post('/user', function (req, res) {
    console.log(req.body);
    res.status(200).json({ name: 'tobi' });
});

const request = require('supertest')(app);


// request(app)
//     .get('/user')
//     .expect('Content-Type', /json/)
//     .expect('Content-Length', '15')
//     .expect(200)
//     .end(function (err, res) {
//         if (err) throw err;
//     });

describe('GET /user', function () {
    it('get', function (done) {
        request
            .get('/user?m=2')
            //.set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(200, done);
    });
    it('post', function (done) {
        request
            .post('/user')
            .send({
                a: 1,
                b: 2
            })
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            // .expect(200, done)
            .expect(200, (err, res) => {
                should(res.body).have.property("haha");
                // result.name.should.equal(undefined);
                done()
            });
    });
});