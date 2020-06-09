import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/services/product.service';  

@Component({
  selector: 'app-piechart',
  templateUrl: './piechart.component.html',
  styleUrls: ['./piechart.component.css']
})
export class PiechartComponent implements OnInit {

  products: any =[];
  chart:Array<number>=[];
  max:any=[];
  topValue:any=[];
  id:any[]= [];

  constructor (private ps: ProductService) { }

  // ADD CHART OPTIONS. 
  pieChartOptions = {
      responsive: true,
      maintainAspectRatio: false
  }

  public pieChartLabels:string[]=[];

  pieChartColor:any = [
      {
          backgroundColor: ['red','green', 'yellow', 'blue','pink']
      }
  ]

  public pieChartData:any = [
      { 
          data: []
      }
  ];

  ngOnInit () {
    this.getAllProduct();
  }

  getAllProduct(){
    this.ps.getAll().subscribe
    (
      (response) =>
      {
        this.products = response;
        for(var i=0;i<this.products.length;i++){
          this.chart[i]=this.products[i].count
        }
        var first = Math.min(...this.chart)
        var second=0,third=0,fourth=0,fifth=0
        for (var i = 0; i < this.chart.length ; i++) 
        { 
            if (this.chart[i] > first) 
            { 
                fifth = fourth;
                fourth = third;
                third = second; 
                second = first; 
                first = this.chart[i]; 
                this.id.push(i)
            } 
            else if (this.chart[i] > second) 
            { 
                fifth =fourth;
                fourth = third;
                third = second; 
                second = this.chart[i]; 
                this.id.push(i)
            } 
       
            else if (this.chart[i] > third) 
            {
                fifth = fourth;
                fourth = third;
                third= this.chart[i]
                this.id.push(i)
            }
            else if (this.chart[i] > fourth)
            {
                fifth = fourth;
                fourth = this.chart[i];
                this.id.push(i)
            } 
            else if (this.chart[i] > fifth)
            {
                fifth = this.chart[i]
                this.id.push(i)
            }
        } 
        console.log(this.chart);
        this.max=[first, second, third, fourth, fifth];
        console.log(this.max);
        for(var i=0;i<this.chart.length; i++){
          if(this.max[i]==this.chart[i])
            this.topValue[i]=i;
        }
        console.log(this.topValue)
        console.log(this.id)
        for(var i=0; i<this.id.length;i++){
          for(var j=0;j<this.products.length;j++){
          if(this.id[i]==j){
            this.pieChartLabels[i]=this.products[j].name
          }
          }
        }
        for(var i=0 ;i<5;i++){
        this.pieChartData.forEach((dataset, index) => {
          this.pieChartData[index] = Object.assign({}, this.pieChartData[index], {
            data: [...this.pieChartData[index].data,this.max[i]]
          });
         });
        }
      },
      (error) => console.log(error)
    )
  }

  onChartClick(event) {
      console.log(event);
  }
}

