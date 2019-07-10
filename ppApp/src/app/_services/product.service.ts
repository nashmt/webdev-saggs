import { Injectable, APP_INITIALIZER } from '@angular/core';


import { PRODUCTS, PENDING } from '../_helpers/product.helper';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  private the_names: string[] = new Array();
  private the_pending_names: string[] = new Array();

  constructor( ) { 

    this.init();
  }

  init () {

    for( let the_product of PRODUCTS ) {

      this.the_names.push(the_product.title);
    }

    for( let the_product of PENDING ) {

      this.the_pending_names.push(the_product.title);
    }
  }

  
  get product_names() {

    return this.the_names;
  }

  get pending_names() {

    return this.the_pending_names;
  }  
}
