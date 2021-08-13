import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { CartMappingService } from 'src/app/mapping/services/cart-mapping.service';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  constructor(private http: HttpClient, private cartMapping: CartMappingService) { 
   }

  getCartData(){
    return this.http.get(`${environment.apiUrl}/carts/5`).pipe(
      map((resp) => {
        return this.cartMapping.mapCartData(resp);
      })
    );
  }
  
}
