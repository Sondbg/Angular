import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/api.service';


@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {
  orders:any[]=[];
  loader:boolean=true;

  constructor(private apiService:ApiService){

  }

  ngOnInit():void{
    var id=sessionStorage.getItem('userAQT');
    var company=id? JSON.parse(id):{};
    this.apiService.getMySO()?.subscribe((value)=>{

      this.orders=value.records;
      this.loader=false
      console.log(this.orders)
    })
  }
}
