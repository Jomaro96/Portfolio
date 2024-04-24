export class Document{
    constructor(
        public _id: string,
        public name: string,
        public date: Date,
        public file: string,
        public thumb: string,
        public username: string,
        public theme: string,
        public category: string
    ){

    }
}