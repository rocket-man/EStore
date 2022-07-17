import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

}

  /*
  loadProductList(){
    this.productService.findAllProducts().subscribe({
      next: (productFetched: Product) => { //notarray//
        this.productAll=productFetched;
        this.productAll.forEach(productSingle =>{
          this.productAll.push(productSingle)
        })
      },
      error: e=>console.log(e)
    })
  }*/





