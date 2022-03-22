

export default class AdminService {

    constructor(){}

    public getSecuredata(): Promise<string> {
        return new Promise((resolve, reject) => {
            resolve('I am at at the admin page');
        })
    }

}