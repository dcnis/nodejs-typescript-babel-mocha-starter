import CheckService from 'services/check.service';

export default class CheckServiceFactory {
    public static createCheckService(){
        return new CheckService();
    }
}