
import App from 'app';
import { expect } from 'chai';
import MockResponse from '../model/mockResponse.model';
import sinon from 'sinon';
import { Request, Response } from 'express';
import Service from '../../main/services/home.service';
import supertest from 'supertest';
import getNameMiddleware from '../../main/middleware/getName.middleware';
import request from 'supertest';


describe('Integrationtest', function () {

    it('should return 200',  function (done) {

        const app = new App();

        request(app.getServer())
            .get('/1')
            .expect(200)
            .end(done);
    });


  });

