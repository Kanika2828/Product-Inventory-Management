import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './Home/home/home.component';
import { AboutComponent } from './about/about.component';
import { AddProductComponent } from './product/add-product/add-product.component';
import { EditProductComponent } from './product/edit-product/edit-product.component';
import { DeleteProductComponent } from './product/delete-product/delete-product.component';
import { canDeactivateDataGuard } from './product/canDeactivateDataGuard';
import { PiechartComponent } from './piechart/piechart.component'
import { UserProfileComponent } from './user-profile/user-profile.component'
import { AuthGuard } from 'src/guards/auth.guard';

const routes: Routes = [
  {
     path: '', redirectTo: 'home', pathMatch: 'full' ,
  },
  {
    path: 'home', component: HomeComponent,
  },
  {
    path: 'register', component: RegisterComponent
  },
  {
    path: 'login', component: LoginComponent
  },
  {
    path: 'about', component: AboutComponent
  },
  {
    path: 'product', loadChildren: './product/product.module#ProductModule'
  },
  {
    path: 'addPro', component: AddProductComponent, canActivate: [AuthGuard],canDeactivate: [canDeactivateDataGuard]
  },
  {
    path: 'editPro', component: EditProductComponent
  },
  {
    path: 'deletePro', component: DeleteProductComponent
  },
  {
    path: 'chart', component: PiechartComponent
  },
  {
    path: 'profile', component: UserProfileComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
