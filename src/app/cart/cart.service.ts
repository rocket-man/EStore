import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { OrderItems } from '../models/orderItems';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  localProductsUrl: String = 'http://localhost:8080/eStore/carts';
  private getOrderItemsUrl = this.localProductsUrl + '/viewitems';
  private saveCartUrl = this.localProductsUrl + '/saveCart';

  orderItem!: OrderItems;

  constructor(private http: HttpClient) {}

  public getOrderItems(): Observable<OrderItems[]> {
    return this.http.get<OrderItems[]>(this.getOrderItemsUrl);
  }

  public saveCart(product: Product) {
    return this.http.post(this.saveCartUrl, product);
  }
}
