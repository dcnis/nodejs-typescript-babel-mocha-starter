import {Request, Response} from 'express';

export default class GetNameMiddleware {

    public static getName (req: Request, res: Response) {
        res.send('Hallo');
    };

};