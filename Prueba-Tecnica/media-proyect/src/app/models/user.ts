export class User{
    constructor(
        public _id: string,
        public email: string,
        public username: string,
        public password: string,
        public type: string
    ){

    }
}