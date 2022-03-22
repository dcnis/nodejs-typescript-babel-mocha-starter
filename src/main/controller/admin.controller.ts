import express, { Request, Response } from 'express';


export default class AdminController {

    public static getAdmin(req: Request, res: Response){
        res.send('I am at at the admin page');
    }
}


