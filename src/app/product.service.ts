import { Product } from './product';
import { Injectable } from '@angular/core';
import {Http, Response, Headers} from '@angular/http';
import 'rxjs/Rx';
import 'rxjs/add/operator/toPromise';


@Injectable()
export class productService {
  constructor(public http:Http) {}
  private url: string = "/assets/products.json"
  getProducts(input): Promise<Product[]> {
    return this.http.get(this.url).toPromise()
      .then(response => response.json().filter
      ((product) => { return product.category == input}) as Product[])
      .catch(this.handleError);
  }
  
  
  private handleError (error: any): Promise<any> {
    console.error(error.message || error);
    return Promise.reject(error.message || error);
  } 
}