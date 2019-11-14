import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import {ToastrService} from 'ngx-toastr';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  name: string;
  email: string;
  mobile: number;
  passwordpersonal: string;
  country: string;
  area: string;
  companyfullname: string;
  companyemail: string;
  countrycompany: string ;
  companyareaname: string;
  companymobile: number;
  companypassword: string;
  namecompany: string;
  companyempolyee: string;
  constructor(private httpClient: HttpClient, private router: Router, private toastr: ToastrService) {


  }
  ngOnInit() {
}
showSuccess() {
  this.toastr.success('تم التسجيل بنجاح');
}
}
