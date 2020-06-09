import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from 'src/services/product.service';
import { of, Observable } from 'rxjs';
import { Products } from '../../../model/Product';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  title = "Features and more details";
  products: any =[];
  public shoppingCartItems$: Observable<Products[]> = of([]);
  public shoppingCartItems: Products[] = [];

  productID: any; //Getting Product id from URL
  productData: any;

  constructor(private route: ActivatedRoute, private ps: ProductService) {
    this.shoppingCartItems$ = this.ps.getItems();
    this.shoppingCartItems$.subscribe(_ => this.shoppingCartItems = _)
   }

  ngOnInit() {
    this. productID = this.route.snapshot.params['id'];
    this.loadProductDetails(this.productID);
     }

    loadProductDetails(productID){
      this.ps.getDetail(productID).subscribe(product => {
        this.productData = product;
      });
    } 
    
    getAllProduct(){
      this.ps.getAll().subscribe
      (
        (response) =>
        {
          this.products = response;
        },
        (error) => console.log(error)
      )
    }

    public addToCart(product: Products) {
      this.ps.addToCart(product);
    }
}
