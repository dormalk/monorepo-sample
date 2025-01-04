import { Routes } from '@angular/router';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductComponent } from './product/product.component';

export const routes: Routes = [
  { path: '', component: ProductListComponent },
  { path: 'product', component: ProductComponent }
];