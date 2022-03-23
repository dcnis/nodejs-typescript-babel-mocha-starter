import HomeController from 'controller/home.controller'
import HomeService from 'services/home.service';
import { HomeServiceFactory } from './homeService.factory';


export default class HomeControllerFactory {

    private static homeController: HomeController;

    public static createHomeController(){
        if(this.homeController){
            return this.homeController;
        }

        const homeService = HomeServiceFactory.createHomeService();
        this.homeController = new HomeController(homeService);
        return this.homeController;
    }
}