import express, { Request, Response } from 'express';


const router = express.Router();

router.get('/auth/home', (req: Request, res: Response) => {
    res.status(200).send('I am at home');
});

router.get('/auth/admin', (req: Request, res: Response) => {
    res.send('I am at at the admin page');
});

export default router;