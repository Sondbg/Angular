import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VATDirective } from './validators/vat.directive';



@NgModule({
  declarations: [
     VATDirective
  ],
  imports: [
    CommonModule,
  ],
  exports:[
    VATDirective
  ]
})
export class SharedModule { }
