import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../models/product';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { OrderItems } from '../models/orderItems';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {


  private getProductsUrl = "http://localhost:8080/eStore/products/viewAll";
  private saveProductsUrl = "http://localhost:8080/eStore/products/save";
  private addProductToCartUrl = "http://localhost:8080/eStore/products/addToCart"
  private addAnotherToCartUrl = "http://localhost:8080/eStore/products/addAnother"
  private removeFromCartUrl= "http://localhost:8080/eStore/products/removeFromCart"
  //private ordersUrl = "http://localhost:8080/api/orders";

  constructor(private http: HttpClient) { }

  //pass the URLs here, get the products displayed
  public findAllProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.getProductsUrl);
  }

  public requestProduct(product: Product){
    return this.http.post(this.saveProductsUrl, product);
  }

  public addProductToCart(product: Product){
    return this.http.post(this.addProductToCartUrl, product)
  }

  public addAnotherToCart(orderItem: OrderItems){
    return this.http.put(this.addAnotherToCartUrl, orderItem)
  }

  public removeFromCart(orderItem: OrderItems){
    return this.http.delete(this.removeFromCartUrl, orderItem)
  }

  generateOrderItem(product: Product){

  }

  updateOrderItem(orderItem: OrderItems){

    
  }





}
