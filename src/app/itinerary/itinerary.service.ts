import {Injectable} from "@angular/core";
import {Http, Response} from "@angular/http";
import {Itinerary} from "../models/Itinerary";
import 'rxjs/Rx';
const api = 'http://localhost:8080/hostel/';
@Injectable()
export class ItineraryService{



  constructor(private http: Http) {
  }


  loadAllItineraries(){

    return this.http.get('http://localhost:8080/hostel/itinerary')
      .map((response: Response) => response.json())

    }


  saveItinerary(itinerary: Itinerary){
    return this.http.post(api+'itinerary',itinerary).map(

      (response: Response) => {

       return  response.json()
      }
    );
  }


  deleteItinerary(id:number){
    return this.http.delete('http://localhost:8080/hostel/itinerary/'+id);
  }


  editItinerary(itinerary: Itinerary){
    return this.http.put('http://localhost:8080/hostel/itinerary',itinerary);
  }
}
