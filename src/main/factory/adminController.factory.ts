import AdminController from 'controller/admin.controller';
import AdminServiceFactory from './adminService.factory';
import AdminService from 'services/admin.service';

export default class AdminControllerFactory {
    public static createAdminController(){
        const adminService: AdminService = AdminServiceFactory.createAdminService();
        return new AdminController(adminService);
    }
}