import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(private apiService:ApiService){}

showLogin=true;
  swapForms(event:any){
    event.preventDefault();

this.showLogin=!this.showLogin;
  }

  registerCompany(form: NgForm){
console.log(form.value)

let companyInfo={
  company: form.value.company,
  email:form.value.email,
  phone:form.value.phone,
  password:form.value.password,
  vatReg:form.value.vat
}
this.apiService.createCompany(companyInfo).subscribe((value)=>{
  console.log(value)
})
  }

  loginSubmit(form: NgForm){
    console.log(form.value)
    this.apiService.getItems().subscribe((value)=>{
      console.log(value)
    })
      }
}
