import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VATDirective } from './validators/vat.directive';
import { FormsModule } from '@angular/forms';




@NgModule({
  declarations: [
     VATDirective
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports:[
    VATDirective
  ]
})
export class SharedModule { }
