import {Itinerary} from "./Itinerary.model";
import {Customer} from "./customer.model";
export class CustomerItinerary{

    id: number=null;
    itinerary:Itinerary = new Itinerary();
    customerId:number;
    quantity: number;
    createdOn: Date = new Date();

}