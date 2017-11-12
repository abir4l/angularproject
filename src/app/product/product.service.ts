import {Injectable} from "@angular/core";
import {Http, Response} from "@angular/http";
import {Product} from "../models/Product.model";
import 'rxjs/Rx';
import {environment} from "../../environments/environment";
@Injectable()
export class ProductService{

  constructor(private http: Http){

  }


  loadAllProducts(){
    return this.http.get(environment.api+'product')
  }

  saveProduct(product: Product){
    return this.http.post(environment.api+'product',product).map(

      (response: Response) => response
    );

  }

  editProduct(product: Product) {
    console.log('Product to be edited');
    console.log(product);
    return this.http.put(environment.api+'product',product);
  }

  deleteProduct(id: number) {

    return this.http.delete(environment.api+'product/'+id);
  }
}
