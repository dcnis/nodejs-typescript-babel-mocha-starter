import request from 'supertest';
import App from 'app'
import {expect} from 'chai';
import HomeController from 'controller/home.controller';
import HomeService from 'services/home.service';
import sinon from 'sinon';
import express, { Request, Response } from 'express';




describe('HomeControllerTest', function () {

    it('should return 200',  function (done) {

        const app = new App();

        request(app.getServer())
            .get('/1')
            .expect('Content-Type', 'application/json; charset=utf-8')
            .expect({data: 'The number 1 is smaller than 5'})
            .expect(200, done);
    });

    it('should test only with Promise',  async function () {

        const app = new App();

        const response = await request(app.getServer())
            .get('/1');

        expect(response.status).to.be.equal(200);
        expect(response.headers['content-type']).to.be.equal('application/json; charset=utf-8');
        expect(response.body.data).to.be.equal('The number 1 is smaller than 5');
    });


    it('should test with Promise and done',  function (done) {

        const app = new App();

        request(app.getServer())
            .get('/1')
            .then((response) => {
                expect(response.status).to.be.equal(200);
                expect(response.headers['content-type']).to.be.equal('application/json; charset=utf-8');
                expect(response.body.data).to.be.equal('The number 1 is smaller than 5');
                done();
            })
            .catch(err => done(err))
    });


    it('should call homeService',  async function () {
        // GIVEN
        const homeserviceStub = sinon.createStubInstance(HomeService);
        homeserviceStub.getName.returns(Promise.resolve('hi'));

        const homeController: HomeController = new HomeController(homeserviceStub);

        const req: Request = {
            params: {
                number: "1"
            } as unknown
        } as Request;
        

        const mockResponse = () => {
            const res: any = {};
            res.status = sinon.stub().returns(res);
            res.json = sinon.stub().returns(res);
            return res;
        };

        // const res: Partial<Response> = {
        //     status: sinon.stub().returns(res),
        //     json: sinon.spy()
        // };

        const response = mockResponse();

        // WHEN
        await homeController.getHomepage(req as Request, response as Response);
        
        // THEN
        sinon.assert.calledOnce(homeserviceStub.getName);
        sinon.assert.calledWithExactly(homeserviceStub.getName, 1);

        sinon.assert.calledOnce(response.status);
        sinon.assert.calledWithExactly(response.status, 200);
        sinon.assert.calledOnce(response.json);
        sinon.assert.calledWithExactly(response.json, {data: 'hi'});
    


    });

  });
