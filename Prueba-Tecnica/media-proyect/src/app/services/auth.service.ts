import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';
import { global } from './global';
import { response } from 'express';

@Injectable({
    providedIn: 'root'
  })
export class AuthService {
  private loggedIn = false;
  private username:string;
  private type: string; 

  public url:string;
    constructor(
        private _http: HttpClient
    ){
        this.url = global.url
    }

    /*saveProject(project:Project):Observable<any>{
    let params= JSON.stringify(project);
    let headers = new HttpHeaders().set('Content-Type','application/json');

    return this._http.post(this.url+'save_project',params, {headers:headers});
}*/
  login(email: string, password: string): Observable<boolean> {
    return this._http.post<any>(this.url+'login', { email, password })
      .pipe(
        tap(response => {
          this.username = response.userFound.username
          this.type = response.userFound.type;
          this.loggedIn = true;
        }),
        catchError(error => {
          console.error('Login failed:', error);
          return of(false);
        })
      );
  }

  logout(): void {
    // Clear user data and set loggedIn to false
    this.type = '';
    this.loggedIn = false;
  }

  isLoggedIn(): boolean {
    return this.loggedIn;
  }

  getUserType(): string {
    return this.type;
  }
  getUserName(): string {
    return this.username;
  }
}