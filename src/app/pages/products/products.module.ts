import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { BsDropdownModule } from 'ngx-bootstrap/dropdown';

import { CommonComponentsModule } from 'src/app/components/common-components.module';
import { SearchFilterPipe } from 'src/app/pipes/search-filter.pipe';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductsListComponent } from './products-list/products-list.component';
import { ProductsService } from './products.service';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

const routes: Routes = [
  { path: 'list', component: ProductsListComponent },
  { path: 'detail', component: ProductDetailComponent },
  { path: '**', redirectTo: 'list' },
];


@NgModule({
  declarations: [ProductsListComponent, SearchFilterPipe, ProductDetailComponent],
  imports: [
    CommonModule,
    CommonComponentsModule,
    FormsModule,
    FontAwesomeModule,
    BsDropdownModule.forRoot(),
    RouterModule.forChild(routes)
  ],
  exports:[RouterModule],
  providers:[ProductsService]
})
export class ProductsModule { }
