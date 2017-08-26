import { Component, OnInit } from '@angular/core';
import {CustomerService} from "./customer.service";
import {Customer} from "./customer.model";

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css'],
  providers:[CustomerService]
})
export class CustomerComponent implements OnInit {

  constructor(private customerService: CustomerService) { }
  customers: Customer[] = [];

  ngOnInit() {


    this.customerService.loadAllCustomers().subscribe(
      (customers: Customer[]) => this.customers = customers
    );


  }

}
