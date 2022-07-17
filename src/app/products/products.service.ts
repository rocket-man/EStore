import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Product } from '../models/product';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { OrderItems } from '../models/orderItems';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  localProductsUrl: String = 'http://localhost:8080/eStore/products';

  private getProductsUrl = this.localProductsUrl + '/viewAll'; 
  // "http://localhost:8080/eStore/products/viewAll";
  private saveProductsUrl = 'http://localhost:8080/eStore/products/save';
  private addProductToCartUrl =
    'http://localhost:8080/eStore/products/addToCart';
  private addAnotherToCartUrl =
    'http://localhost:8080/eStore/products/addAnother';
  private removeFromCartUrl =
    'http://localhost:8080/eStore/products/removeFromCart';
  private getOrderItemUrl = 'http://localhost:8080/eStore/cart/getOrderItem';

  orderItem!: OrderItems;

  constructor(private http: HttpClient) {}

  public findAllProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.getProductsUrl);
  }

  public requestProduct(product: Product) {
    return this.http.post(this.saveProductsUrl, product);
  }

  public addProductToCart(product: Product) {
    let orderItem = this.getOrderItem(product);
    //TODO:: handle mapping of product->orderItem in backend and DB
    return this.http.post(this.addProductToCartUrl, product);
  }

  public addAnotherToCart(product: Product) {
    let orderItem = this.getOrderItem(product);
    orderItem.orderItemCount = orderItem.orderItemCount + 1;
    return this.http.post(this.addAnotherToCartUrl, orderItem);
  }

  public removeFromCart(product: Product) {
    let orderItemLocal = this.getOrderItem(product);
    orderItemLocal.orderItemCount = 0;
    return this.http.post(this.removeFromCartUrl, orderItemLocal);
  }

  public getOrderItem(product: Product): OrderItems {
    this.http
      .get<OrderItems>(this.getOrderItemUrl)
      .subscribe((item) => (this.orderItem = item));
    return this.orderItem;
  }
}
