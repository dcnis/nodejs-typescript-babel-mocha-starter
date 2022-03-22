import check from './check';

export default class HomeService {

    constructor(){}

    public getName(nr: number): Promise<string> {
        return new Promise((resolve, reject) => {

            if(check.check(nr)){
                resolve(`The number ${nr} is smaller than 5`);
            } else {
                reject(`Invalid input because the number ${nr} is greater than 5`);
            }
        })
    }

}