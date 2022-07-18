import { Cart } from './cart';
import { Product } from './product';

export class OrderItems {
  orderItemID: string;
  cartID: string;
  productID: string;
  orderItemCount: number;
  product: Product;

  constructor(
    orderItemID: string,
    cartID: string,
    productID: string,
    orderItemCount: number,
    product: Product
  ) {
    this.cartID = cartID;
    this.orderItemID = orderItemID;
    this.productID = productID;
    this.orderItemCount = orderItemCount;
    this.product = product;
  }
}
