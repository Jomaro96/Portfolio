import { Injectable } from "@angular/core";
import { HttpClient,HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { Theme } from "../models/theme";
import { global } from "./global";
import { get } from "node:http";


@Injectable()
export class ThemeService{
    public url:string;
    constructor(
        private _http: HttpClient
    ){
        this.url = global.url
    }
    
    
    getThemes():Observable<any>{
        let headers = new HttpHeaders().set('Content-Type','application/json');

        return this._http.get(this.url+'get_themes',{headers:headers});
    }
}