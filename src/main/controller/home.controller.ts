import express, { Request, Response } from 'express';



export default class HomeController {

    public static getHomepage(req: Request, res: Response){
        res.status(200).json({data: 'I am at home'});
    }

}


