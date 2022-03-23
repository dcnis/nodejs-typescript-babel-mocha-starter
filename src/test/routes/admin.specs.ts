import request from 'supertest';
import App from 'app'
import AdminController from 'controller/admin.controller';
import AdminService from 'services/admin.service';
import sinon from 'sinon';
import {Request, Response } from 'express';

describe('AdminControllerTest', function () {

    it('should return 200',  function (done) {

        const app = new App();

        request(app.getServer())
            .get('/admin')
            .expect(200)
            .expect({data: 'I am at at the admin page'})
            .end(done);
    });


    it('should call adminservice',  function (done) {
        // GIVEN
        const adminService = sinon.createStubInstance(AdminService);
        adminService.getSecuredata.returns(Promise.resolve('I am admin'));

        const adminController = new AdminController(adminService);

        const req = {} as Request;
        const res = {} as Response;

        // WHEN
        adminController.getAdmin(req, res);

        // THEN
        sinon.assert.calledOnce(adminService.getSecuredata);
        sinon.assert.calledWithExactly(adminService.getSecuredata);

        done();
    });


    it('should return 200 and correct body',  async function () {
        // GIVEN
        const adminService = sinon.createStubInstance(AdminService);
        adminService.getSecuredata.returns(Promise.resolve('I am admin'));

        const adminController = new AdminController(adminService);

        const req = {

        } as Request;

        const mockResponse = () => {
            const res: any = {};
            res.status = sinon.stub().returns(res);
            res.json = sinon.stub().returns(res);
            return res;
        }

        const res = mockResponse();

        // WHEN
        await adminController.getAdmin(req, res);

        // THEN
        sinon.assert.calledOnce(res.status);
        sinon.assert.calledOnce(res.json);
        sinon.assert.calledWithExactly(res.status, 200);
        sinon.assert.calledWithExactly(res.json, {data: 'I am admin'});
    });


    it('should return 500 if adminService throws exception',  async function () {
        // GIVEN
        const adminService = sinon.createStubInstance(AdminService);
        adminService.getSecuredata.returns(Promise.reject('One failure'));

        const adminController = new AdminController(adminService);

        const req = {

        } as Request;

        const mockResponse = () => {
            const res: any = {};
            res.status = sinon.stub().returns(res);
            res.json = sinon.stub().returns(res);
            return res;
        }

        const res = mockResponse();

        // WHEN
        await adminController.getAdmin(req, res);

        // THEN
        sinon.assert.calledOnce(res.status);
        sinon.assert.calledOnce(res.json);
        sinon.assert.calledWithExactly(res.status, 500);
        sinon.assert.calledWithExactly(res.json, {error: 'Unexpected error: One failure'});
    });

  });
