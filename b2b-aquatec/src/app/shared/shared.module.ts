import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VATDirective } from './validators/vat.directive';
import { PhoneValidatorDirective } from './validators/phone/phone.directive';





@NgModule({
  declarations: [
     VATDirective,
     PhoneValidatorDirective,
  ],
  imports: [
    CommonModule,
  ],
  exports:[
    VATDirective,
    PhoneValidatorDirective,
  ]
})
export class SharedModule { }
