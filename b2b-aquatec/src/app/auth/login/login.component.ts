import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/api.service';
import { Company } from 'src/app/interfaces';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  constructor(private apiService:ApiService, private authService:AuthService, private router:Router){

    
  }

  ngOnInit(){}

  
showLogin=true;
  swapForms(event:any){
    event.preventDefault();

this.showLogin=!this.showLogin;
  }

  registerCompany(form: NgForm){
    console.log(form.invalid)
if(form.invalid){return}

let companyInfo:Company={
  company: form.value.company,
  email:form.value.email,
  phone:form.value.phone,
  password:form.value.password,
  address:form.value.address,
  vatReg:form.value.vatReg
};

this.apiService.createCompany(companyInfo).subscribe((value)=>{
  // value=JSON.parse(value)
console.log(value.internalID);
  if(value.ок===true){
    sessionStorage.setItem('userAQT',JSON.stringify(value.internalID));
    return window.location.reload()
  }
  return value
})
  }

  loginSubmit(form: NgForm){
    if(form.invalid){return}
    console.log(form.value)
    this.apiService.getItems().subscribe((value)=>{
      console.log(value)
    })
      }
}
