import { Injectable } from "@angular/core";
import { HttpClient,HttpHeaders,HttpParams } from "@angular/common/http";
import { Observable } from "rxjs";
import { Document } from "../models/document";
import { global } from "./global";
import { get } from "node:http";


@Injectable()
export class DocumentService{
    public url:string;
    constructor(
        private _http: HttpClient
    ){
        this.url = global.url
    }
    
    
    getDocuments(theme:string,category:string):Observable<any>{
        let params = new HttpParams();
        if (theme) {
            params = params.set('theme', theme);
          }
          if (category) {
            params = params.set('category', category);
          }

        let headers = new HttpHeaders().set('Content-Type','application/json');

        return this._http.get(this.url+'get_documents',{headers:headers,params: params});
    }
    addDocument(document:Document):Observable<any>{
        let params= JSON.stringify(document);
        let headers = new HttpHeaders().set('Content-Type','application/json');

        return this._http.post(this.url+'add_document',params, {headers:headers});
    }
}
    /*
    addUser(user:User):Observable<any>{
        let params= JSON.stringify(user);
        let headers = new HttpHeaders().set('Content-Type','application/json');

        return this._http.post(this.url+'add_document',params, {headers:headers});
    }
    
    //getproyects
    getProjects():Observable<any>{
        let headers = new HttpHeaders().set('Content-Type','application/json');

        return this._http.get(this.url+'get_projects',{headers:headers});
    }
    //getproyect
    getProject(id:string):Observable<any>{
        let headers = new HttpHeaders().set('Content-Type','application/json');

        return this._http.get(this.url+'get_project/'+id,{headers:headers});
    }
    //deleteproyect
    deleteProject(id:string):Observable<any>{
        let headers = new HttpHeaders().set('Content-Type','application/json');
        return this._http.delete(this.url+'delete_project/'+id,{headers:headers});
    }
    //updateproyect
    updateProject(project:Project):Observable<any>{
        let params= JSON.stringify(project);
        let headers = new HttpHeaders().set('Content-Type','application/json');

        return this._http.put(this.url+'update_project/'+project._id,params, {headers:headers});
    }*/