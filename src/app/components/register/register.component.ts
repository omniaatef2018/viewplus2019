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
  name:string;
  email:string;
  mobile:number;
  passwordpersonal:string;
  country:string;
  area:string;
  companyfullname:string;
  companyemail:string;
  countrycompany:string ;
  companyareaname:string;
  companymobile:number;
  companypassword:string;
  namecompany:string;
  companyempolyee:string;
  constructor(private httpClient :HttpClient, private router :Router, private toastr:ToastrService) { 


  }
  ngOnInit() {
}
showSuccess(){
  this.toastr.success('تم التسجيل بنجاح')
}
signuppersonal(personalform:any)
  {
     this.httpClient.post('http://localhost/api/methods/create.php',  {
      "name":this.name,
      "email":this.email,
      "phone":this.mobile,
      "password":btoa(this.passwordpersonal),
      "country":this.country,
      "area":this.area,
      "company":"personal_account",
      "numcompany":"personal_account",
      "type":"personal"
     }

  ).subscribe(data => {
    var statues = data['callback']['status'];
    var id = data['callback']['id'];
    this.router.navigate([''])
      })
  }

  signupcompany(companyform:any)
  {
    this.httpClient.post('http://localhost/api/methods/create.php',  {
     "name":this.companyfullname,
     "email":this.companyemail,
     "phone":this.companymobile,
     "password":btoa(this.companypassword),
     "country":this.countrycompany,
     "area":this.companyareaname,
     "company":this.namecompany,
     "numcompany":this.companyempolyee,
     "type":"company"
    }
 ).subscribe(data => {
  var statues = data['callback']['status'];
  var id = data['callback']['id'];
  this.router.navigate(['/login'])
     })
 }
}
