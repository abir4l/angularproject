import {Injectable} from "@angular/core";
import {Http, Response} from "@angular/http";
import 'rxjs/Rx';
import {environment} from "../../environments/environment";
import {Customer} from "./customer.model";
@Injectable()
export class CustomerService{


  constructor(private http: Http) {
  }


    saveCustomer(customer: Customer){
        return this.http.post(environment.api+'customer',customer).map(

            (response: Response) => {

                return  response.json()
            }
        );
    }

    loadAllCustomers(){

      return this.http.get(environment.api+'customer')
      .map((response: Response) =>
          response.json()
      );

  }

     getCustomerById(customerId:number){

      return this.http.get(environment.api+'customer/'+customerId)
          .map(
              (response:Response) =>
                  response.json()
          );

  }


     editCustomer(customer:Customer){

      return this.http.put(environment.api+'customer',customer).map(

          (response: Response) => {

              response.json()
          }
      );

  }






}
