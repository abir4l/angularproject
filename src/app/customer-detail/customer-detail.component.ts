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
    this.productService.loadAllProducts().subscribe(
        (response: Response)=> this.products = response.json()
    );
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
    console.log(customerProducts);
    this.customerService.buyProduct(customerProducts).subscribe(
        (response:any)=> console.log(response)
    );
    customerProducts = new CustomerProducts();

    this.customerService.getCustomerById(this.customer.id).subscribe(
        (response:any)=>this.customer= response
    );




  }
  buyItinerary(itinerary:Itinerary){

  }

}
