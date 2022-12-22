import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/api.service';
import { AuthService } from '../../auth.service';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit{
orders:any[]=[];
loader:boolean=true;
  constructor(private apiService:ApiService, private authService:AuthService){

  }

 companyInfo={
name:'',
phone:'',
vat:'',
id:'',
email:'',
address:''
 };

  ngOnInit(): void {
  var id=sessionStorage.getItem('userAQT');
var company=id? JSON.parse(id):{};

  this.apiService.checkCustomerById(company).subscribe((value)=>{
    console.log('Customer Info: '+value)
    if(value.ok==true){
      this.companyInfo.name=value.info.name;
      this.companyInfo.id=value.info.id;
      this.companyInfo.phone=value.info.phone;
      this.companyInfo.vat=value.info.vat;
      this.companyInfo.email=value.info.email;
      this.companyInfo.address=value.info.address;
    this.loader=false;
    }
  
  });
 
this.apiService.getMySO()?.subscribe((value)=>{
  this.orders=value.order;
  console.log(this.orders)
})

  }

}
