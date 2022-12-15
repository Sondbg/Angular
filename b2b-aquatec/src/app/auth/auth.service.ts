import { Injectable } from '@angular/core';
import { Company } from '../interfaces';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  

get isLoggedIn(){
if(sessionStorage.getItem('userAQT')){ return true}
return false
}

  constructor() { }
}
