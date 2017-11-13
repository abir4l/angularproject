import {Injectable} from "@angular/core";
import {Customer} from "./models/customer.model";

@Injectable()
export class SharedService{
    customer:Customer = new Customer();
}