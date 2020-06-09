import { Component } from '@angular/core';
import { AuthenticationService } from '../services/authentication.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Products } from '../model/Product';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'CapstoneProject';
  navbarOpen = false;
  public shoppingCartItems$: Observable<Products[]>;

  constructor (private authService:AuthenticationService, private router:Router, private ps: ProductService) 
  {
    this.shoppingCartItems$ = this
      .ps
      .getItems();

    this.shoppingCartItems$.subscribe(_ => _);
  }

  logout() {
    this.authService.logoutUser();
    this.router.navigate(['']);
  }

  toggleNavbar() {
    this.navbarOpen = !this.navbarOpen;
  }
}


