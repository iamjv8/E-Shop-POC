import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { ProductsMappingService } from 'src/app/mapping/services/products-mapping.service';
import { environment } from 'src/environments/environment';

@Injectable()
export class ProductsService {
  constructor(
    private http: HttpClient,
    private productMapping: ProductsMappingService
  ) {}

  getProducts() {
    return this.http.get(`${environment.apiUrl}/products`).pipe(
      map((resp) => {
        return this.productMapping.mapProducts(resp);
      })
    );
  }

  filterCategories(products: any[]) {
    let categories: string[] = [];
    products.filter((product) => {
      if (!categories.includes(product.category)) {
        categories.push(product.category);
      }
    });
    return categories;
  }

  filterProducts(
    products: any[],
    fieldTofilterWith: string,
    arrayOfSelectedFilterValues: any[]
  ) {
    if (!products.length) {
      return [];
    }
    if (!arrayOfSelectedFilterValues.length) {
      return products;
    }
    let filteredProducts: any[] = [];
    products.filter((item) => {
      if (arrayOfSelectedFilterValues.includes(item[fieldTofilterWith])) {
        filteredProducts.push(item);
      }
    });
    return filteredProducts;
  }
}
