import express, { Request, Response } from 'express';
import HomeService from '../services/home.service';

export default class HomeController {

    private homeService: HomeService;

    constructor(homeService: HomeService){
        this.homeService = homeService;
    }

    public getHomepage = (req: Request, res: Response): Promise<string | void> => {
        const nr: number = Number(req.params.number);

        return this.homeService.getName(nr)
            .then((name: string) => {
                res.status(200).json({data: name});
            })
            .catch((error) => {
                res.status(500).json({error: 'Unexpected error: ' + error});
            })
    }

}


