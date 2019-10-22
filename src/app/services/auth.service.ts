import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private _loginUrl = "http://localhost/api/methods/read.php";
  constructor(private http: HttpClient,
    private _router: Router) { }
    
    loginUser(user) {
      return this.http.post<any>(this._loginUrl, user)
    }    

    // auth guard authentication
    loggedIn()
    {
        
    }
}


