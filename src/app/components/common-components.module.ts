import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductComponent } from './product/product.component';
import { SpinnerComponent } from './spinner/spinner.component';



@NgModule({
  declarations: [ProductComponent, SpinnerComponent],
  imports: [
    CommonModule
  ],
  exports:[ProductComponent, SpinnerComponent]
})
export class CommonComponentsModule { }
