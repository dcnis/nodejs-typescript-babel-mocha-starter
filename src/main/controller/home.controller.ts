import express, { Request, Response } from 'express';
import HomeService from '../services/home.service';

export default class HomeController {

    private homeService: HomeService;

    constructor(homeService: HomeService){
        this.homeService = homeService;
    }

    public getHomepage = (req: Request, res: Response) => {
        this.homeService.getName(1)
            .then((name: string) => {
                res.status(200).json({data: name});
            })
    }

}


