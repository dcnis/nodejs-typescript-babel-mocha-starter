import express, { Request, Response } from 'express';
import HomeService from '../services/home.service';

export default class HomeController {

    private homeService: HomeService;

    constructor(homeService: HomeService){
        this.homeService = homeService;
    }

    public getHomepage = (req: Request, res: Response) => {
        const nr: number = Number(req.params.number);

        this.homeService.getName(nr)
            .then((name: string) => {
                res.status(200).json({data: name});
            })
    }

}


