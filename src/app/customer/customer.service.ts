import {Injectable} from "@angular/core";
import {Http, Response} from "@angular/http";
import 'rxjs/Rx';
import {environment} from "../../environments/environment";
import {Customer} from "../models/customer.model";
import {CustomerProducts} from "../models/customerProduct.model";
import {CustomerItinerary} from "../models/customerItinerary.model";
@Injectable()
export class CustomerService{


  constructor(private http: Http) {
  }


    saveCustomer(customer: Customer){
        return this.http.post(environment.api+'customer',customer).map(

            (response: Response) => {

                console.log(response)
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

              console.log(response);
          }
      );

  }


    deleteCustomer(id:number){
        return this.http.delete(environment.api+'customer/'+id)
            .map(
                (response:Response)=>console.log(response)
            );
    }

    buyProduct(customerProduct:CustomerProducts){

        return this.http.post(environment.api+'customer/buyProduct',customerProduct).map(
            (response: Response) => response
        )
    }

    buyItinerary(customerItinerary:CustomerItinerary){
        console.log(customerItinerary);
        return this.http.post(environment.api+'customer/buyItinerary',customerItinerary).map(
            (response: Response) => response
        )
    }




}
