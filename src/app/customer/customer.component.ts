import {Component, OnInit, ViewChild} from '@angular/core';
import {CustomerService} from "./customer.service";
import {Customer} from "./customer.model";
import { DatepickerOptions } from 'ng2-datepicker';

@Component({
    selector: 'app-customer',
    templateUrl: './customer.component.html',
    styleUrls: ['./customer.component.css'],
})
export class CustomerComponent implements OnInit {

    customers: Customer[] = [];
    customer: Customer = new Customer();
    //date: DateModel;
    options: DatepickerOptions = {
        minYear: 1970,
        maxYear: 2030,
        displayFormat: 'MMM D[,] YYYY',
        barTitleFormat: 'MMMM YYYY',
        firstCalendarDay: 0// 0 - Sunday, 1 - Monday
};

    constructor(private customerService: CustomerService) {

    }


    ngOnInit() {


        this.loadAll();


    }


    loadAll() {
        this.customerService.loadAllCustomers().subscribe(
            (customers: Customer[]) => this.customers = customers
        );
    }

    saveCustomer() {
        console.log(this.customer);
        this.customerService.saveCustomer(this.customer)
            .subscribe(
                (result: any) => {
                    console.log(result),
                        this.loadAll()
                },
                (error: any) => console.log(error)
            )
    }

    getCustomer(customerId) {
        this.customerService.getCustomerById(customerId)
            .subscribe(
                (result: any) => this.customer = result,
                (error: any) => console.log(error)
            )
    }

}
