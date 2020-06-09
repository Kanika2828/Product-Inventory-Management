import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { HomeRoutingModule } from './HomePage-routing.module';
import { HomeComponent } from './home/home.component';
import { EditProductComponent } from '../product/edit-product/edit-product.component'
import { DeleteProductComponent } from '../product/delete-product/delete-product.component'
import { HttpClientModule } from '@angular/common/http';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { SearchFilterPipe } from '../../pipes/search-filter.pipe';

@NgModule({
  declarations: [
    HomeComponent,
    ProductDetailComponent,
    EditProductComponent,
    DeleteProductComponent,
    SearchFilterPipe
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  exports: [
    HomeComponent
],
})
export class HomeModule { }
