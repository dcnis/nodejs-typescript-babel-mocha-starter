import CheckService from 'services/check.service';

export default class CheckServiceFactory {
    private static checkService: CheckService;

    public static createCheckService(){
        if(this.checkService){
            return this.checkService;
        }

        this.checkService = new CheckService();
        return this.checkService;
    }
}