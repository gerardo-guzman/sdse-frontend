export class User {
    data: any;
    logged: boolean;

    constructor(data?: any, logged?: boolean) {
        this.data = data;
        this.logged = logged || false;
    }
}