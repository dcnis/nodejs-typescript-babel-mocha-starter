import request from 'supertest';
import App from 'app'

describe('AuthControllerTest', function () {

    it('should return 200',  function (done) {

        const app = new App();

        request(app.getServer())
            .get('/auth')
            .expect(200)
            .expect('Everybody can read me')
            .end(done);
    });


  });
