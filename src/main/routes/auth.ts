import express, { Request, Response } from 'express';


const router = express.Router();

router.get('/', (req: Request, res: Response) => {
    res.status(200).send('Everybody can read me');
});


router.get('/admin', (req: Request, res: Response) => {
    res.send('I am at at the admin page');
});

export default router;