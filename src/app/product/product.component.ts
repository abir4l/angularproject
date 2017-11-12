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
        (data:any) => this.product = new Product()
      );
    }else{
         this.productService.saveProduct(this.product).subscribe(
           (data: any) => {
             console.log(data);
             this.products.push(this.product);
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
   console.log(this.products);
    this.productService.deleteProduct(id).subscribe(
      (data:any) => {
        console.log('Data deleted');
        console.log(data);
        this.product = new Product();
        this.products = this.products.filter(
          (val) => {

            if(val.id == id)
              return false;
            return true;
          }

        );

      }
    );


   console.log(this.products);

  }


  ngOnInit() {



     this.productService.loadAllProducts().subscribe(

      (response: Response)=> this.products = response.json()


    );

  }

}
