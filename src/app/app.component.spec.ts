import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { ChartsModule } from 'ng2-charts'

import { AppRoutingModule } from './app-routing.module';
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

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        AppRoutingModule,
        ReactiveFormsModule,
        HttpClientModule,
        HomeRoutingModule,
        FormsModule,
        ChartsModule
      ],
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
      providers: [UserRegisterService, AuthenticationService]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'CapstoneProject'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('CapstoneProject');
  });

  it('should have logout method', () => {
    expect(component.logout).toBeTruthy();
  })
});
