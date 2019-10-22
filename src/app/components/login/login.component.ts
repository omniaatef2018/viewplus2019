import { Component, OnInit, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { AuthService } from './../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginDate = {}
  constructor(private httpClient :HttpClient, private router: Router, private _auth:AuthService) { }
  ngOnInit() {
  }
  loginUser () {
    this._auth.loginUser(this.loginDate)
    .subscribe(
      res =>this.router.navigate(['']),
      err => console.log(err)
     )
    
}
}