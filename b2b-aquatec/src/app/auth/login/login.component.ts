import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

showLogin=true;
  swapForms(event:any){
    event.preventDefault();

this.showLogin=!this.showLogin;
  }

  registerCompany(form: NgForm){
console.log(Object.entries(form.value))
  }

  loginSubmit(form: NgForm){
    console.log(form.value)
      }
}
