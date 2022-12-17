import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http'
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { Company } from './interfaces/company';



const apiURL=environment.apiURL;

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private httpClient: HttpClient) {}

createCompany(info:any):Observable<any>{
let payload=createPayload('createCustomer',info)

  
 return this.httpClient.post<any>(apiURL,payload);
  
}

getItems(email:string, password:string){
let payload=createPayload('checkCustomer',{email, password});


  return this.httpClient.post<any>(apiURL,payload)
}

checkCustomerById(info:any){
  let payload=createPayload('checkCustomerById',info);

return this.httpClient.post<any>(apiURL,payload);
}


}

function createPayload(method:string,data:any){

  return JSON.stringify({method:method,data: data})
  }


