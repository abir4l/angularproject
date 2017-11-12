import {Injectable} from "@angular/core";
import {Http, Response} from "@angular/http";
import {Itinerary} from "../models/Itinerary.model";
import 'rxjs/Rx';
import {environment} from "../../environments/environment";
const api = 'http://localhost:8080/hostel/';
@Injectable()
export class ItineraryService{



  constructor(private http: Http) {
  }


  loadAllItineraries(){

    return this.http.get(environment.api+'itinerary')
      .map((response: Response) => response.json())

    }


  saveItinerary(itinerary: Itinerary){
    return this.http.post(environment.api+'itinerary',itinerary).map(

      (response: Response) => {

       return  response.json()
      }
    );
  }


  deleteItinerary(id:number){
    return this.http.delete(environment.api+'itinerary/'+id);
  }


  editItinerary(itinerary: Itinerary){
    return this.http.put(environment.api+'itinerary',itinerary);
  }
}
