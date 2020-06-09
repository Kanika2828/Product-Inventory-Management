import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { ChartsModule } from 'ng2-charts'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeRoutingModule } from './Home/HomePage-routing.module';
import { HomePageComponent } from './Home/HomePage.component';
import { HomeComponent } from './Home/home/home.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { UserRegisterService } from '../services/user-register.service';
import { HttpClientModule } from '@angular/common/http';
import { ProductDetailComponent } from './Home/product-detail/product-detail.component';
import { AboutComponent } from './about/about.component';
import { SearchFilterPipe } from '../pipes/search-filter.pipe';
import { AddProductComponent } from './product/add-product/add-product.component';
import { EditProductComponent } from './product/edit-product/edit-product.component';
import { DeleteProductComponent } from './product/delete-product/delete-product.component';
import { AuthenticationService } from '../services/authentication.service';
import { PiechartComponent } from './piechart/piechart.component';
import { UserProfileComponent } from './user-profile/user-profile.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    RegisterComponent,
    LoginComponent,
    ProductDetailComponent,
    AboutComponent,
    HomePageComponent,
    AddProductComponent,
    EditProductComponent,
    DeleteProductComponent,
    SearchFilterPipe,
    PiechartComponent,
    UserProfileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    HomeRoutingModule,
    FormsModule,
    ChartsModule
  ],
  providers: [UserRegisterService, AuthenticationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
