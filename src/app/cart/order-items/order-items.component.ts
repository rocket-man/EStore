import { Component, OnInit } from '@angular/core';
import { OrderItems } from 'src/app/models/orderItems';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-order-items',
  templateUrl: './order-items.component.html',
  styleUrls: ['./order-items.component.css'],
})
export class OrderItemsComponent implements OnInit {
  orderItems: OrderItems[] = [];

  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    this.loadOrderItems();
  }

  loadOrderItems() {
    this.cartService.getOrderItems().subscribe({
      next: (orderItemFetched: OrderItems[]) =>
        (this.orderItems = orderItemFetched),
      error: (e) => console.log(e),
    });
  }
}
