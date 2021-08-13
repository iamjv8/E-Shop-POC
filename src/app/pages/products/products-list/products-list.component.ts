import { AfterViewInit, Component, ElementRef, Renderer2, ViewChild } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { SpinnerComponent } from 'src/app/components/spinner/spinner.component';
import { Product } from 'src/app/interface/product.interface';
import { ProductsService } from '../products.service';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss'],
})
export class ProductsListComponent implements AfterViewInit {
  shoppingCart = faShoppingCart;
  allProducts: Product[] = [];
  filteredProducts: Product[] = [];
  categories: string[] = [];
  selectedCategories: string[] = [];
  sortOptions: any[] = [
    {
      label: '--Select--',
      value: 'default'
    },
    {
      label: 'Low To High',
      value: 'LTH'
    },
    {
      label: 'High to Low',
      value: 'HTL'
    }
  ]
  searchText: string = '';
  sortBy: any = this.sortOptions[0];
  @ViewChild(SpinnerComponent) spinner: SpinnerComponent | undefined;
  @ViewChild('cartItemIndicator') cartItemIndicator: ElementRef | undefined;
  constructor(
    private router: Router,
    private productService: ProductsService,
    private renderer:Renderer2
  ) {}

  ngAfterViewInit() {
    this.getProducts();
    this.refreshCartItems();
  }

  getProducts() {
    this.spinner?.showSpinner();
    this.productService.getProducts().subscribe((resp: Product[]) => {
      this.allProducts = resp;
      this.filteredProducts = this.allProducts;
      this.categories = this.productService.filterCategories(this.allProducts);
      this.spinner?.hideSpinner();
    });
  }

  refreshCartItems() {
    const cartItems = JSON.parse(localStorage.getItem('cartData') || '[]');
    if(cartItems.length) {
      this.renderer.addClass(this.cartItemIndicator?.nativeElement, 'cart-items-indicator');
    }
  }

  goToCart() {
    this.router.navigate(['/cart']);
  }

  onCheckChange(event: any) {
    if (
      event.target.checked &&
      !this.selectedCategories.includes(event.target.value)
    ) {
      this.selectedCategories.push(event.target.value);
    } else if (
      !event.target.checked &&
      this.selectedCategories.includes(event.target.value)
    ) {
      this.selectedCategories.splice(
        this.selectedCategories.findIndex(
          (value) => value === event.target.value
        ),
        1
      );
    }
    this.filteredProducts = this.productService.filterProducts(
      this.allProducts,
      'category',
      this.selectedCategories
    );
  }

  openProductDetail(product: Product[]) {
    const navigationExtras: NavigationExtras = {
      state: product,
    };
    this.router.navigate(['/product/detail'], navigationExtras);
  }

  onSortSelectChange(option: any) {
    this.sortBy = option;
    this.sortProducts();
  }

  sortProducts() {
    this.filteredProducts.sort((a: any, b: any) => {
      if (a.price < b.price) {
        return this.sortBy.value === 'LTH' ? -1 : 1;
      }
      if (a.price > b.price) {
        return this.sortBy.value === 'LTH' ? 1 : -1;
      }
      return 0;
    });
  }

  logout() {
    localStorage.removeItem('token');
    this.router.navigate(['auth']);
  }
}
