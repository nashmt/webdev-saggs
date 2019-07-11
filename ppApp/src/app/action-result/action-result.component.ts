import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';

import { ProductsService } from '../_services/index';

@Component({
  selector: 'app-action-result',
  templateUrl: './action-result.component.html',
  styleUrls: ['./action-result.component.css']
})
export class ActionResultComponent implements OnInit {

  requested_product: string;
  denied_product: string;
  result: string;

  product_names: string[] = new Array();
  pending_names: string[] = new Array();


  constructor( 
    private route: ActivatedRoute,
    private productService: ProductsService
  ) { }

  ngOnInit() {
    
    // If the URL contains a "requested_product" argument,
    this.requested_product = this.route.snapshot.queryParamMap.get('requested_product');
    this.denied_product = this.route.snapshot.queryParamMap.get('denied_product');

    //TESTING
    // this.the_products = this.productService.the_products;

    /*
    for( let the_product of this.productService.the_products ) {

      this.product_names.push(the_product.name);
    }
    */

    this.product_names = this.productService.product_names;
    this.pending_names = this.productService.pending_names;
    
    
    if( this.requested_product ) {
      
      // If the requested product exists,
      if( this.product_names.includes(this.requested_product) ) {

        this.result = "successfully requested.";
      }
      
      else {

        this.result = "does not exist!";
      }
      
    }
     
    
    
    // If the URL contains a "denied_product" argument,
    // (and does NOT contain a "requested_product" argument,)
    else if( this.denied_product = this.route.snapshot.queryParamMap.get('denied_product') ) {

      // If the product has been requested,
      if( this.pending_names.includes(this.denied_product) ) {

        this.result = "successfully refused";
      }
      else {
        this.result = "has not been requested!";
      }
    }

    //If the URL contains neither argument,
    else {

      this.result = "Error: no product has been requested or denied.";
    }
    
  }

}
