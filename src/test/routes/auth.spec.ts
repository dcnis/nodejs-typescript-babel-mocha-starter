import server from '../../main/server';
import request from 'supertest';

describe('test auth', function () {

    it('should return 200',  function (done) {

        request(server)
            .get('/auth/home')
            .expect(200)
            .end(done);
    });


  });