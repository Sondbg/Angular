import { trigger, state, style, transition, animate } from '@angular/animations';
import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  animations: [
    trigger('rotatedState', [
     state('default', style({ transform: 'rotate(0)' })),
     state('rotated', style({ transform: 'rotate(-360deg)' })),
     transition('rotated => default', animate('1500ms ease-out')),
     transition('default => rotated', animate('1000ms ease-in'))
   ])
 ]
})
export class HomeComponent {
state:string='default'

rotate(){
  this.state = (this.state === 'default' ? 'rotated' : 'default');

}


  
}
