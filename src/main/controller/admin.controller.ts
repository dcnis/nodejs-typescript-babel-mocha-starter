import express, { Request, Response } from 'express';
import AdminService from 'services/admin.service';


export default class AdminController {

    private adminService: AdminService;

    constructor(adminService: AdminService){
        this.adminService = adminService;
    }

    public getAdmin = (req: Request, res: Response) => {
        this.adminService.getSecuredata()
            .then((secureData: string) => {
                res.status(200).json({data: secureData});
            })
    }
}


