import { Component, OnInit } from '@angular/core';
import { CartServiceService } from '../cart-service.service';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit{
products:any[]=[];
subtotal:number=0;
total:number=0;
VAT:number=0;
defaultQty:number=1;

constructor(private cartService: CartServiceService, private apiService: ApiService){

 
}

ngOnInit(): void {
  this.products=this.cartService.loadCart();
  console.log(this.products)

  this.products.forEach((c:any)=>{
    this.subtotal+=Number(c.price)
  });


  this.VAT=this.subtotal*0.2;
  this.total=this.VAT+this.subtotal
}

removeItem(item:any){
  this.cartService.removeFromCart(item);
  this.ngOnInit()
}

}
