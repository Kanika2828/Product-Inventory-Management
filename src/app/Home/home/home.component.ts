import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../../services/product.service';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http'
import { Products } from '../../../model/Product';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  products: Products[];
  count:number=null;
  chart=[];
  data: any;
  account: Object;

  url : string = "http://localhost:3000/Products"

  constructor(private ps: ProductService, private router: Router, private http: HttpClient) {}
  
  ngOnInit(){
    this.getAllProduct();
  }

  public view(id) {
    const url=`${this.url}/${id}`
    this.ps.getDetail(id).subscribe((data)=> {
      this.account = data ;
      console.log(this.account['count'])  
      this.http.patch(url,
      {
        "count": this.account['count']+1
      }).subscribe(
        data=>{
          console.log(data)
        }
      )})
    console.log(this.chart)
    this.router.navigate(['/proDetail', id]);
  }

  getAllProduct(){
    this.ps.getAll().subscribe
    (
      (response) =>
      {
        this.products = response;
        console.log(this.products);
        console.log(this.products[0].name);
      },
      (error) => console.log(error)
    )
  }
}
