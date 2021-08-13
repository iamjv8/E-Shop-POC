import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {
  product: any ={};
  constructor(private router: Router) { }

  ngOnInit(): void {
    console.log(window.history.state);
    this.product = window.history.state;
  }

}
