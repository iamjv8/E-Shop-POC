import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { InterceptorService } from './services/interceptor.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AuthMappingService } from './mapping/services/auth-mapping.service';
import { ProductsMappingService } from './mapping/services/products-mapping.service';
import { CartMappingService } from './mapping/services/cart-mapping.service';
@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: InterceptorService,
    multi: true,
  },AuthMappingService, ProductsMappingService, CartMappingService],
  bootstrap: [AppComponent]
})
export class AppModule { }
