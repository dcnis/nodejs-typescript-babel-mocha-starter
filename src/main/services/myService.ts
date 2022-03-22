import check from './check';

export default class MyService {

    public static getName(nr: number): Promise<string> {
        return new Promise((resolve, reject) => {

            if(check.check(nr)){
                resolve('That is my number: ' + nr);
            } else {
                reject('Cannot output the number bcoz I am not allowed ' + nr);
            }
        })
    }

}