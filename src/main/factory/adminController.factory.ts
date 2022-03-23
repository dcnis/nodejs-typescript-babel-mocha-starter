import AdminController from 'controller/admin.controller';
import AdminServiceFactory from './adminService.factory';
import AdminService from 'services/admin.service';

export default class AdminControllerFactory {

    private static adminController: AdminController; 

    public static createAdminController(){
        if(this.adminController){
            return this.adminController;
        }
        const adminService: AdminService = AdminServiceFactory.createAdminService();

        this.adminController = new AdminController(adminService);
        return this.adminController;
    }
}