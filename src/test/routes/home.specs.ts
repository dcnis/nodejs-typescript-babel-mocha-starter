import request from 'supertest';
import App from 'app'
import {expect} from 'chai';

describe('HomeControllerTest', function () {

    it('should return 200',  function (done) {

        const app = new App();

        request(app.getServer())
            .get('/')
            .expect('Content-Type', 'application/json; charset=utf-8')
            .expect({data: 'The number 1 is smaller than 5'})
            .expect(200, done);
    });

    it('should test only with Promise',  async function () {

        const app = new App();

        const response = await request(app.getServer())
            .get('/');

        expect(response.status).to.be.equal(200);
        expect(response.headers['content-type']).to.be.equal('application/json; charset=utf-8');
        expect(response.body.data).to.be.equal('The number 1 is smaller than 5');
    });


    it('should test with Promise and done',  function (done) {

        const app = new App();

        request(app.getServer())
            .get('/')
            .then((response) => {
                expect(response.status).to.be.equal(200);
                expect(response.headers['content-type']).to.be.equal('application/json; charset=utf-8');
                expect(response.body.data).to.be.equal('The number 1 is smaller than 5');
                done();
            })
            .catch(err => done(err))
    });


    it('should call homeService',  async function () {

        const app = new App();

        
        const response = await request(app.getServer())
            .get('/');

        
    });

  });
