import { Component } from '@angular/core';

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
}
