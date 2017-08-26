import {Injectable} from "@angular/core";
import {Http, Response} from "@angular/http";
import 'rxjs/Rx';
@Injectable()
export class CustomerService{


  constructor(private http: Http) {
  }

  loadAllCustomers(){

   return this.http.get('http://localhost:8080/hostel/customer')
      .map((response: Response) => response.json());

  }


}
