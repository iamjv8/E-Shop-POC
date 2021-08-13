import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent {
  @Input() productData: any;
  @Output() newItemEvent = new EventEmitter<string>();
  constructor() { }



  addToCart() {
    event?.stopImmediatePropagation();
    let cartData: any = localStorage.getItem('cartData') || '[]';
    cartData = JSON.parse(cartData);
    if(cartData){
      cartData.push(this.productData);
      localStorage.setItem('cartData', JSON.stringify(cartData));
      this.newItemEvent.emit();
    }
  }

}
