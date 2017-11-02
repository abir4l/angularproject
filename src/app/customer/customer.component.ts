import { Component, OnInit } from '@angular/core';
import {CustomerService} from "./customer.service";
import {Customer} from "./customer.model";

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css'],
})
export class CustomerComponent implements OnInit {

  constructor(private customerService: CustomerService) { }
  customers: Customer[] = [];
  customer:Customer = new Customer();

  ngOnInit() {


    this.customerService.loadAllCustomers().subscribe(
      (customers: Customer[]) => this.customers = customers
    );
    console.log(this.customer);

  }


  saveCustomer()
  {
    this.customerService.saveCustomer(this.customer)
        .subscribe(
            (result:any)=>console.log(result),
            (error:any)=>console.log(error)
        )
  }

  getCustomer(customerId)
  {
    this.customerService.getCustomerById(customerId)
        .subscribe(
            (result:any)=>this.customer=result,
            (error:any) =>console.log(error)
        )
  }

}
