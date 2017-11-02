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


  }


  saveCustomer()
  {
    this.customerService.saveCustomer(this.customer)
        .subscribe(
            (result:any)=>console.log(result),
            (error:any)=>console.log(error)
        )
  }

}
