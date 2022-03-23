import CheckService from 'services/check.service';
import HomeService from 'services/home.service';
import CheckServiceFactory from './checkService.factory';

export class HomeServiceFactory {
    private static homeService: HomeService;

    public static createHomeService(){
        if(this.homeService){
            return this.homeService;
        }

        const checkService: CheckService = CheckServiceFactory.createCheckService();
        this.homeService = new HomeService(checkService);
        return this.homeService;
    }
}