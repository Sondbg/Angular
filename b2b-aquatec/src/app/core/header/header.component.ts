import { Component } from '@angular/core';
import { ApiService } from 'src/app/api.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  providers:[ApiService]
})


export class HeaderComponent {
user=false;

}
