import { Component, OnInit } from '@angular/core';
import {SharedService} from "../shared-service";
import {Customer} from "../models/customer.model";
import {Router} from "@angular/router";
import {ProductService} from "../product/product.service";
import {Product} from "../models/Product.model";
import {Response} from "@angular/http";
import {Itinerary} from "../models/Itinerary.model";
import {ItineraryService} from "../itinerary/itinerary.service";
import {CustomerProducts} from "../models/customerProduct.model";
import {CustomerService} from "../customer/customer.service";
import {CustomerItinerary} from "../models/customerItinerary.model";

@Component({
  selector: 'app-customer-detail',
  templateUrl: './customer-detail.component.html',
  styleUrls: ['./customer-detail.component.css'],
  providers:[ProductService,ItineraryService,CustomerService]
})
export class CustomerDetailComponent implements OnInit {

  customer:Customer = new Customer();
  products: Product [] = [];
  itineraries:Itinerary[] =[];

  constructor(private sharedService:SharedService,
              private router:Router,
              private productService:ProductService,
              private itineraryService:ItineraryService,
              private customerService:CustomerService) { }

    loadCustomer(){
      this.customer = this.sharedService.customer;
      if(this.customer.id == null){
        this.router.navigate(['/customer']);
      }
    }
  ngOnInit() {

    this.loadCustomer();
    this.loadProducts();
    this.loadItineraries();


  }

  loadProducts(){
  this.productService.loadAllProducts().subscribe(

      (response: Response)=> this.products = response.json()
  );
}
  loadItineraries(){

  this.itineraryService.loadAllItineraries().subscribe(
      (response: any)=> {
        this.itineraries = response
      }
  )
}
  buyProduct(product:Product){

    let customerProducts = new CustomerProducts();
    customerProducts.quantity=product['customer_quantity'];
    delete product['customer_quantity'];
    customerProducts.product = product;
    customerProducts.customerId = this.customer.id;


    this.customerService.buyProduct(customerProducts).subscribe(
        (response:any)=> {
          console.log(response);
          this.customerService.getCustomerById(this.customer.id).subscribe(
              (response:any)=>this.customer= response
          );
        }
    );
    customerProducts = new CustomerProducts();
}
  buyItinerary(itinerary:Itinerary){
      ;
      let customerItinerary = new CustomerItinerary();
      customerItinerary.quantity=itinerary['customer_quantity'];
      delete itinerary['customer_quantity'];
      customerItinerary.itinerary = itinerary;
      customerItinerary.customerId = this.customer.id;
      console.log(customerItinerary);

      this.customerService.buyItinerary(customerItinerary).subscribe(
          (response:any)=> {
            console.log(response);
            this.customerService.getCustomerById(this.customer.id).subscribe(
                (response:any)=>this.customer= response
            );
          }
      );
      customerItinerary = new CustomerItinerary();
    }

}
