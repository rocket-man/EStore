import { OrderItems } from "./orderItems";
import { Product } from "./product";

export class Cart{
    id: String = "";
    taggedUser: String = "";
    items: OrderItems = new OrderItems();

}