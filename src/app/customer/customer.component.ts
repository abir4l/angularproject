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
    editStatus:boolean;
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

    saveCustomer()
    {
        if(this.editStatus)
        {
            this.customer.from = null;
            this.customer.to = null;
            this.customerService.editCustomer(this.customer)
                .subscribe(
                    (result:any)=>{console.log(result),
                        this.customer = null;
                        this.customer = new Customer();
                        this.loadAll();
                        this.editStatus=false},
                    (error:any)=>console.log(error)
                )
        }
        else
        {
            this.customerService.saveCustomer(this.customer)
                .subscribe(
                    (result:any)=>{
                        this.customer = null;
                        this.customer = new Customer();
                        this.loadAll();},
                    (error:any)=>console.log(error)
                )
        }
    }

    getCustomer(customerId)
    {
        this.customerService.getCustomerById(customerId)
            .subscribe(
                (result:any)=>{this.customer=result;
                    this.editStatus = true},
                (error:any) =>console.log(error)
            )
    }
}
