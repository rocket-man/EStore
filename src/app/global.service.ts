import { Injectable } from '@angular/core';
import { OrderItems } from './models/orderItems';

@Injectable({
  providedIn: 'root'
})
export class GlobalService {

  orderItemsArray: OrderItems[] = [];

  constructor() { }

  addOrderItems (orderItem : OrderItems){
    this.orderItemsArray.push(orderItem)
  }

  getOrderItemsArray () : OrderItems[]{
    return this.orderItemsArray
  }

}
