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

createCompany(info:any):Observable<Company>{
  // let httpHeaders= new HttpHeaders().set("Content-Type",'')

  
 return this.httpClient.post<Company>(apiURL,info);
  
}

getItems(){
  return this.httpClient.get<any>(apiURL)
}

  
}
