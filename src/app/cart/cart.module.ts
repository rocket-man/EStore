import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrderItemsComponent } from './order-items/order-items.component';
import { CheckoutComponent } from './checkout/checkout.component';



@NgModule({
  declarations: [
    OrderItemsComponent,
    CheckoutComponent
  ],
  imports: [
    CommonModule
  ]
})
export class CartModule { }
