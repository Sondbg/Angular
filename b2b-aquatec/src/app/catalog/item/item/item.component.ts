import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/api.service';
import { AuthService } from 'src/app/auth/auth.service';
import { ItemDetail } from 'src/app/interfaces/itemDetails';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit{

  item:ItemDetail | null=null;
user:string | null=null;
errorData=false;

constructor(private apiService:ApiService,private authService:AuthService,private router: Router,private activeRouter:ActivatedRoute){

}

ngOnInit(): void {
  this.activeRouter.params.subscribe(params => {
    const id = params['id'];
    console.log(id)
   this.user=this.authService.userSession;

    this.apiService.getItemBySku(this.user,id).subscribe({
      next:(value)=>{
      
        this.item=value.item
      },
      error:(err)=>{
        this.errorData=true;
        console.log(err)
      }
    })
}); 
}

}
