import {Injectable} from "@angular/core";
import {Http, Response} from "@angular/http";
import {Product} from "../models/Product";
import 'rxjs/Rx';
@Injectable()
export class ProductService{

  constructor(private http: Http){

  }


  loadAllProducts(){
    return this.http.get('http://localhost:8080/hostel/product')
  }

  saveProduct(product: Product){
    return this.http.post('http://localhost:8080/hostel/product',product).map(

      (response: Response) => response
    );

  }

  editProduct(product: Product) {
    console.log('Product to be edited');
    console.log(product);
    return this.http.put('http://localhost:8080/hostel/product',product);
  }

  deleteProduct(id: number) {

    return this.http.delete('http://localhost:8080/hostel/product/'+id);
  }
}
