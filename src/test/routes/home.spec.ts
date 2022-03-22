import request from 'supertest';
import App from 'app'
import {expect} from 'chai';

describe('HomeControllerTest', function () {

    it('should return 200',  function (done) {

        const app = new App();

        request(app.getServer())
            .get('/')
            .expect('Content-Type', 'application/json; charset=utf-8')
            .expect({data: 'I am at home'})
            .expect(200, done);
    });

    it('should test with Promises',  async function () {

        const app = new App();

        const response = await request(app.getServer())
            .get('/');

        expect(response.status).to.be.equal(200);
        expect(response.headers['content-type']).to.be.equal('application/json; charset=utf-8');
        expect(response.body.data).to.be.equal('I am at home');
    });


  });
