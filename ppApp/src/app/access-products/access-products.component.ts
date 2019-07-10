import { Component, OnInit } from '@angular/core';

import { Product } from '../_models/product';
import { PRODUCTS } from '../_helpers/product.helper';

@Component({
  selector: 'app-access-products',
  templateUrl: './access-products.component.html',
  styleUrls: ['./access-products.component.css']
})
export class AccessProductsComponent implements OnInit {

  products: Product[] = new Array();

  constructor() { }

  ngOnInit() {

    this.products = PRODUCTS;
  }

}
