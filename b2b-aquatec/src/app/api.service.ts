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

getItems(){


  return this.httpClient.get(apiURL)
}


}

function createPayload(method:string,data:any){

  return JSON.stringify({method:method,
  data: data
  })
  }


