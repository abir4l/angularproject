import {Product} from "../models/Product";
import {Itinerary} from "../models/Itinerary";

export class Customer {

  id: number = null;
  deleted: boolean=false;
  passportNumber:string;
  parent = null;
  from:Date=new Date();
  to:Date= new Date();
  createdOn: Date = null;
  modifiedOn: Date = null;
  name: string;
  products: Product[] = [];
  itineraries: Itinerary[] = [];
  email: string;
  nation: string;


}
