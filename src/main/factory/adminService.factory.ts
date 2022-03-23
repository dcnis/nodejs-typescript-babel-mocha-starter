import AdminService from 'services/admin.service';

export default class AdminServiceFactory {
    public static createAdminService(){
        return new AdminService();
    }
}