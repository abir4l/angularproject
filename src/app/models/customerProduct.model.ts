import {Product} from "./Product.model";
import {Customer} from "./customer.model";
export class CustomerProducts{

    id: number=null;
    customerId:number;
    product: Product;
    quantity: number;
    createdOn: Date;
}