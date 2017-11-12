import {Product} from "./Product.model";
import {Customer} from "./customer.model";
export class CustomerProducts{

    id: number;
    customer: Customer;
    product: Product;
    quantity: number;
}