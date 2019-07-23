import { Component, OnInit } from '@angular/core';

import { ISHTTPService } from '../_services/ishttp.service';


@Component({
  selector: 'app-products-page',
  templateUrl: './products-page.component.html',
  styleUrls: ['./products-page.component.css']
})
export class ProductsPageComponent implements OnInit {

  private products: any = new Array();

  constructor(private http: ISHTTPService) { }


  ngOnInit() {


    this.http.get_products().subscribe(

      (data) => {

        this.products = data.getProductsOutput.results;
      }
    );
  }

}
