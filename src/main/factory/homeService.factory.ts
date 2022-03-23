import CheckService from 'services/check.service';
import HomeService from 'services/home.service';
import CheckServiceFactory from './checkService.factory';

export class HomeServiceFactory {
    public static createHomeService(){
        const checkService: CheckService = CheckServiceFactory.createCheckService();

        return new HomeService(checkService);
    }
}