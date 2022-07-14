import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrderItemsComponent } from './order-items/order-items.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { CartService } from './cart.service';



@NgModule({
  declarations: [
    OrderItemsComponent,
    CheckoutComponent
  ],
  imports: [
    CommonModule
  ],
  providers: [CartService]
})
export class CartModule { }
