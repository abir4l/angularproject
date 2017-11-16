import { Component, OnInit } from '@angular/core';
import {Product} from "../models/Product.model";
import {ProductService} from "./product.service";
import {Response} from "@angular/http";
import {isUndefined} from "util";


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
  providers: [ProductService]
})
export class ProductComponent implements OnInit {

  products: Product [] = [];
  product: Product = new Product();

  constructor(private productService: ProductService) { }

  submitProduct(){

    if(!(isUndefined(this.product.id))){
      this.productService.editProduct(this.product).subscribe(
        (data:any) => {
            this.product = new Product();
            this.loadProducts();

        }
      );
    }else{
         this.productService.saveProduct(this.product).subscribe(
           (data: any) => {

             this.loadProducts();
             this.product = new Product();

           }
         );
    }

  }

 public editProduct(id){

    this.products.forEach(
      (value) => {


        if(value.id == id){
           this.product = value;
        }

      }
    );



  }



    deleteConfirm(id:number) {
        if(confirm("Are you sure to delete ?")) {
            this.deleteProduct(id);
        }
    }

 public deleteProduct(id: number){

    this.productService.deleteProduct(id).subscribe(
      (data:any) => {

        this.product = new Product();
        this.loadProducts();

      }
    );




  }


  ngOnInit() {


    this.loadProducts();

  }

  loadProducts(){
      this.productService.loadAllProducts().subscribe(

          (response: Response)=> this.products = response.json()


      );

  }

}
