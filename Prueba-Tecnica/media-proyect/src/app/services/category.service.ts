import { Injectable } from "@angular/core";
import { HttpClient,HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { Category } from "../models/category";
import { global } from "./global";
import { get } from "node:http";


@Injectable()
export class CategoryService{
    public url:string;
    constructor(
        private _http: HttpClient
    ){
        this.url = global.url
    }
    
    
    getCategories():Observable<any>{
        let headers = new HttpHeaders().set('Content-Type','application/json');

        return this._http.get(this.url+'get_categories',{headers:headers});
    }
}