import express, { Request, Response } from 'express';


const homeRouter = express.Router();

homeRouter.get('/', (req: Request, res: Response) => {
    res.status(200).json({data: 'I am at home'});
});


export default homeRouter;