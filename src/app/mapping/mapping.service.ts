import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MappingService {
  cartMapping: any;
  authMapping: any;
  productMapping: any;

  constructor() { 
    import(`src/app/mapping/services/cart-mapping.service`).then(cartService => {
      this.cartMapping = new cartService.CartMappingService();
    });

    import(`src/app/mapping/services/auth-mapping.service`).then(authService => {
      this.authMapping = new authService.AuthMappingService();
    });

    import(`src/app/mapping/${environment.backendServer}/products-mapping.service`).then(productService => {
      this.productMapping = new productService.ProductsMappingService();
    });
  }
}

