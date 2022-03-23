import AdminService from 'services/admin.service';

export default class AdminServiceFactory {

    private static adminService: AdminService;

    public static createAdminService(){
        if(this.adminService){
            return this.adminService;
        }

        this.adminService = new AdminService();

        return this.adminService;
    }
}