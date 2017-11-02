import {Product} from "../models/Product";
import {Itinerary} from "../models/Itinerary";
export class Customer {

  id: number;
  deleted: boolean;
  passportNo:number;
  from:Date;
  to:Date;
  createdOn: Date;
  modifiedOn: Date;
  name: string;
  products: Product = new Product();
  itineraries: Itinerary = new Itinerary();
  email: string;
  nation: string;

}
