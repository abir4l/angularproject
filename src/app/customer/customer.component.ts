import {Component, OnInit, ViewChild} from '@angular/core';
import {CustomerService} from "./customer.service";
import {Customer} from "../models/customer.model";
import { DatepickerOptions } from 'ng2-datepicker';
import {SharedService} from "../shared-service";
import {Router} from '@angular/router';

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


    constructor(private customerService: CustomerService,private sharedService:SharedService,private router:Router) {

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
            if(this.customer.id == this.customer.parentId){

                this.customer.parentId = null;
            }
            this.customerService.editCustomer(this.customer)
                .subscribe(
                    (result:any)=>{

                        this.customer = new Customer();
                        this.loadAll();
                        this.editStatus=false
                    },
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



  deleteCustomer(customerId:number)
  {

      if(confirm("Are you sure?")){


      this.customerService.deleteCustomer(customerId)
          .subscribe(

              (result:any)=>{this.loadAll();
                  },
              (error:any) =>console.log(error)
          );
      }
  }



    getCustomer(customerId)
    {
        this.customerService.getCustomerById(customerId)
            .subscribe(
                (result:any)=>{
                    this.customer=result;
                    console.log(result);
                    this.editStatus = true
                },
                (error:any) =>console.log(error)
            )
    }

    showCustomerDetail(customer:Customer){

        this.sharedService.customer = customer;
        this.router.navigate(['/customer-detail']);


    }

    resetCustomer(){
        this.customer = new Customer();
        this.editStatus = false;
    }


}
