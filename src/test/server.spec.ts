
import createServer from '../main/server';
import { expect } from 'chai';
import MockResponse from './model/mockResponse.model';
import sinon from 'sinon';
import { Request, Response } from 'express';
import Service from '../main/services/myService';
import supertest from 'supertest';
import getNameMiddleware from '../main/middleware/getName.middleware';
import request from 'supertest';

const app = createServer();

const mockResponse = () => {
    const res: MockResponse = {};

    res.status = sinon.stub(mockResponse.prototype).returns(res);
    res.send = sinon.stub().returns(res);
    return res;
};

const mockRequest = (body: any) => ({
    body,
});


describe('Example Node Server', function () {

    it('should return 200',  function (done) {

        request(app)
            .get('/')
            .expect(200)
            .end(done);
    });


  });

