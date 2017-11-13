import {Product} from "./Product.model";
import {Itinerary} from "./Itinerary.model";
import {CustomerProducts} from "./customerProduct.model";
import {CustomerItinerary} from "./customerItinerary.model";

export class Customer {

  id: number;
  deleted: boolean=false;
  passportNumber:string;
  parentId:number=null;
  from:Date=new Date();
  to:Date= new Date();
  createdOn: Date;
  modifiedOn: Date;
  name: string;
  // products: Product[] = [];
  // itineraries: Itinerary[] = [];
  email: string;
  nation: string;
  products:CustomerProducts[]=[];
  customerItinerary:CustomerItinerary[]=[];


}
