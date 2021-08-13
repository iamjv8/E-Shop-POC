import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/interface/product.interface';
import { CartService } from './cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  products: Product[] = [];
  constructor(private cartService: CartService) { }

  ngOnInit(): void {
    this.products = JSON.parse(localStorage.getItem('cartData') || '[]');
    console.log(this.products);
    this.cartService.getCartData().subscribe(response => {
      console.log(response);
    });
  }

  removeFromCart(index: number) {
    this.products.splice(index, 1);
    localStorage.setItem('cartData', JSON.stringify(this.products));
  }

}
