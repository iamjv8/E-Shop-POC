import { Injectable } from '@angular/core';
import { Product } from 'src/app/interface/product.interface';
@Injectable()
export class ProductsMappingService {
  constructor() {}

  mapProducts(response: any): Product[] {
    let products: Product[] = [];
    response.map((product: any) => {
      products.push(<Product>{
        id: product.id,
        title: product.title,
        price: product.price,
        description: product.description,
        category: product.category,
        image: product.image,
      });
    });
    return products;
  }
}
