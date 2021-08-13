import { Injectable } from '@angular/core';

@Injectable()
export class CartMappingService {

  constructor() { }

  mapCartData(response: any) {
    console.log(response);
    return response;
    
  }
}
