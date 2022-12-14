import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  constructor(private apiService:ApiService){}

  ngOnInit(){}

  
showLogin=true;
  swapForms(event:any){
    event.preventDefault();

this.showLogin=!this.showLogin;
  }

  registerCompany(form: NgForm){
if(form.invalid){return}

let companyInfo={
  company: form.value.company,
  email:form.value.email,
  phone:form.value.phone,
  password:form.value.password,
  address:form.value.address
}
this.apiService.createCompany(companyInfo).subscribe((value)=>{
  console.log(value)
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
