import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { EditProductComponent } from '../product/edit-product/edit-product.component';
import { DeleteProductComponent } from '../product/delete-product/delete-product.component';
import { AuthGuard } from '../../guards/auth.guard';


const routes: Routes = [
  {
    path: 'proDetail/:id', component: ProductDetailComponent, canActivate: [AuthGuard]
  },
  {
    path: 'proDetail/:id/editPro', component: EditProductComponent
  },
  {
    path: 'proDetail/:id/deletePro', component: DeleteProductComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
