import { Component, OnInit } from '@angular/core';
import {Itinerary} from "../models/Itinerary";
import {ItineraryService} from "./itinerary.service";
import {Response} from "@angular/http";
import {isUndefined} from "util";

@Component({
  selector: 'app-itinerary',
  templateUrl: './itinerary.component.html',
  styleUrls: ['./itinerary.component.css'],
  providers: [ItineraryService]
})
export class ItineraryComponent implements OnInit {


  itinerary: Itinerary = new Itinerary();
  itineraries: Itinerary[] = [];
  constructor(private itineraryService: ItineraryService) { }

  ngOnInit() {

    this.itineraryService.loadAllItineraries().subscribe(
      (itineraries: any[]) => this.itineraries = itineraries
    );

  }


  submitItinerary(){

    if(!(isUndefined(this.itinerary.id)))
    {
      this.itineraryService.editItinerary(this.itinerary).subscribe(
        (data:any) => this.itinerary = new Itinerary()
      );
    }
    else{


    this.itineraryService.saveItinerary(this.itinerary).subscribe(

      (itinerary: any) => {
        console.log(itinerary);
        this.itinerary = new Itinerary();

      }
    );


    }
  }

  public editItinerary(id){

    this.itineraries.forEach(
      (value) => {


        if(value.id == id){
          this.itinerary = value;
        }

      }
    );



  }


  public deleteItinerary(id: number){
    console.log(this.itineraries);
    this.itineraryService.deleteItinerary(id).subscribe(
      (data:any) => {
        console.log('Data deleted');
        console.log(data);
        this.itinerary = new Itinerary();
        this.itineraries = this.itineraries.filter(
          (val) => {

            if(val.id == id)
              return false;
            return true;
          }

        );

      }
    );


    console.log(this.itineraries);

  }


}
