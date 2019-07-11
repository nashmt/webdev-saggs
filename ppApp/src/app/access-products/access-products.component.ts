import { Component, OnInit } from '@angular/core';

import { PENDING, PRODUCTS, ACCESS, } from '../_helpers/index';
import { Product } from '../_models/index';
@Component({
  selector: 'app-access-products',
  templateUrl: './access-products.component.html',
  styleUrls: ['./access-products.component.css']
})
export class AccessProductsComponent implements OnInit {

  products: Product[] = new Array();

  constructor() { }

  ngOnInit() {

    this.products = ACCESS;
  }

}
