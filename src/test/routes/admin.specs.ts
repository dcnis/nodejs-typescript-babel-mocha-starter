import request from 'supertest';
import App from 'app'

describe('AdminControllerTest', function () {

    it('should return 200',  function (done) {

        const app = new App();

        request(app.getServer())
            .get('/admin')
            .expect(200)
            .expect('I am at at the admin page')
            .end(done);
    });


  });
