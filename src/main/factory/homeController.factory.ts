import HomeController from 'controller/home.controller'
import HomeService from 'services/home.service';
import { HomeServiceFactory } from './homeService.factory';


export default class HomeControllerFactory {

    public static createHomeController(){
        const homeService = HomeServiceFactory.createHomeService();
        return new HomeController(homeService);
    }
}