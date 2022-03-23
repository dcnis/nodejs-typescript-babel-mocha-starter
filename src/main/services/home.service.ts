import CheckService from './check.service';
import check from './check.service';

export default class HomeService {

    private checkService: CheckService;

    constructor(checkService: CheckService){
        this.checkService = checkService;
    }

    public getName = (nr: number): Promise<string> => {
        return new Promise((resolve, reject) => {

            if(this.checkService.check(nr)){
                resolve(`The number ${nr} is smaller than 5`);
            } else {
                reject(`Invalid input because the number ${nr} is greater than 5`);
            }
        })
    }

}