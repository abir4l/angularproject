import { Component } from '@angular/core';
import {Product} from "./models/Product.model";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  products: Product [] = [];
  product: Product = new Product();


  submitProduct(){

    this.products.push(this.product);
    this.product = new Product();

  }




}
